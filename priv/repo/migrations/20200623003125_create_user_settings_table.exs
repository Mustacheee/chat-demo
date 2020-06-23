defmodule ChatDemo.Repo.Migrations.CreateUserSettingsTable do
  use Ecto.Migration

  def change do
    create table(:user_settings) do
      add :user_id, references(:users)
      add :setting_id, references(:settings)
    end

    create unique_index(:user_settings, [:user_id, :setting_id])
  end
end
