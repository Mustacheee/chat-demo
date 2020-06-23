defmodule ChatDemoWeb.TopicChannel do
  require Logger

  use Phoenix.Channel
  alias ChatDemo.Models.{Message, Topic}

  def join("topic:" <> topic, _payload, socket) do
    topic
    |> Topic.get_by_name()
    |> case do
      %Topic{id: topic_id, messages: messages} ->
        socket =
          socket
          |> assign(:topic, topic)
          |> assign(:topic_id, topic_id)

        {:ok, %{messages: messages}, socket}
      _ ->
        {:error, "Topic not found"}
    end
  end

  def handle_in("message", %{"message" => payload}, %{assigns: %{user_id: user_id, topic: topic, topic_id: topic_id}} = socket) do
    %{message: payload, user_id: user_id, topic_id: topic_id}
    |> Message.create()
    |> case do
      {:ok, %Message{} = message} ->
        broadcast!(socket, "topic:#{topic}:message", message)
        {:noreply, socket}
      {:error, error} ->
        Logger.error("Could not save message #{inspect error}")
        {:reply, {:error, %{error: "Could not save message"}}, socket}
    end
  end
end
