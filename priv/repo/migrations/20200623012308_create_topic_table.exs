defmodule ChatDemo.Repo.Migrations.CreateTopicTable do
  use Ecto.Migration

  def change do
    create table(:topics) do
      add :name, :string
    end
  end
end
