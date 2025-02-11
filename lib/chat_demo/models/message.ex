defmodule ChatDemo.Models.Message do
  use ChatDemo, :model
  alias ChatDemo.Models.{Topic, User}

  @derive {Jason.Encoder, only: [:message, :inserted_at, :user]}

  schema "messages" do
    field :message, :string

    belongs_to :user, User
    belongs_to :topic, Topic

    timestamps()
  end

  def changeset(%__MODULE__{} = message, attrs \\ %{}) do
    message
    |> cast(attrs, [:message, :user_id, :topic_id])
    |> validate_required([:message, :user_id, :topic_id])
  end

  @spec create(:invalid | %{optional(:__struct__) => none, optional(atom | binary) => any}) :: any
  def create(params) do
    %__MODULE__{}
    |> changeset(params)
    |> Repo.insert()
    |> case do
      {:ok, %__MODULE__{} = message} ->
        {:ok, Repo.preload(message, :user)}
      other ->
        other
    end
  end
end
