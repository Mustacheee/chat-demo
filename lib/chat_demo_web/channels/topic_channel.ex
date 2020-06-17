defmodule ChatDemoWeb.TopicChannel do
  use Phoenix.Channel

  def join(_channel, _payload, socket) do
    IO.inspect(socket)
    {:ok, %{hey: "there"}, socket}
  end

  def handle_in(channel, payload, socket) do
    IO.inspect channel
    IO.inspect payload
    {:reply, :ok, socket}
  end
end
