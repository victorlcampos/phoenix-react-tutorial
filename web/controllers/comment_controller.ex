defmodule PhoenixReact.CommentController do
  use PhoenixReact.Web, :controller

  alias PhoenixReact.Comment

  def index(conn, _params) do
    comments = Repo.all(Comment)
    render(conn, "index.json", comments: comments)
  end
end
