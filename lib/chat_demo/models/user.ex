defmodule ChatDemo.Models.User do
  use ChatDemo, :model
  alias ChatDemo.Models.Message

  schema "users" do
    field :username, :string

    has_many :messages, Message
  end

  def changeset(%__MODULE__{} = user, attrs \\ %{}) do
    user
    |> cast(attrs, [:username])
    |> unique_constraint(:username)
    |> validate_required([:username])
  end

  def get_by_username(username), do: Repo.get_by(__MODULE__, [username: username])
end
