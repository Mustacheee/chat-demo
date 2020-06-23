defmodule ChatDemo.Repo.Migrations.CreateUsersTable do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :username, :string
    end

    create unique_index(:users, [:username])
  end
end
