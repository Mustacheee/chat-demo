defmodule ChatDemo.Repo.Migrations.CreateMessageTable do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add :user_id, references(:users)
      add :message, :string

      timestamps()
    end
  end
end
