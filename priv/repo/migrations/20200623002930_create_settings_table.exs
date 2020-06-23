defmodule ChatDemo.Repo.Migrations.CreateSettingsTable do
  use Ecto.Migration

  def change do
    create table(:settings) do
      add :name, :string
    end

    create unique_index(:settings, [:name])
  end
end
