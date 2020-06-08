defmodule ChatDemoWeb.PageController do
  use ChatDemoWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
