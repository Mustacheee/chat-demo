defmodule ChatDemo.Repo.Migrations.AddTopicsToMessages do
  use Ecto.Migration

  def change do
    alter table(:messages) do
      add :topic_id, references(:topics)
    end
  end
end
