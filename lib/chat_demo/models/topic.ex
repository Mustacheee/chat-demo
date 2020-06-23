defmodule ChatDemo.Models.Topic do
  use ChatDemo, :model
  alias ChatDemo.Models.Message

  schema "topics" do
    field :name, :string

    has_many :messages, Message
  end

  def changeset(%__MODULE__{} = topic, attrs \\ %{}) do
    topic
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end

  def create(params) do
    %__MODULE__{}
    |> changeset(params)
    |> Repo.insert()
  end

  def get_by_name(name) do
    __MODULE__
    |> Repo.get_by(%{name: name})
    |> Repo.preload([messages: [:user]])
  end
end
