defmodule PhoenixReact.CommentView do
  use PhoenixReact.Web, :view

  def render("index.json", %{comments: comments}) do
    %{data: render_many(comments, PhoenixReact.CommentView, "comment.json")}
  end

  def render("show.json", %{comment: comment}) do
    %{data: render_one(comment, PhoenixReact.CommentView, "comment.json")}
  end

  def render("comment.json", %{comment: comment}) do
    %{id: comment.id, author: comment.author, text: comment.text}
  end
end
