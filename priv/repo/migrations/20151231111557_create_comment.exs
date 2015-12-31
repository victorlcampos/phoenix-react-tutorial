defmodule PhoenixReact.Repo.Migrations.CreateComment do
  use Ecto.Migration

  def change do
    create table(:comments) do
      add :author, :string
      add :text, :string

      timestamps
    end

  end
end
