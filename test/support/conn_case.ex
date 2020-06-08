<<<<<<< HEAD
defmodule ChatDemoWeb.ConnCase do
=======
defmodule PhoenixReactPlaygroundWeb.ConnCase do
>>>>>>> --wip-- [skip ci]
  @moduledoc """
  This module defines the test case to be used by
  tests that require setting up a connection.

  Such tests rely on `Phoenix.ConnTest` and also
  import other functionality to make it easier
  to build common data structures and query the data layer.

  Finally, if the test case interacts with the database,
<<<<<<< HEAD
  we enable the SQL sandbox, so changes done to the database
  are reverted at the end of every test. If you are using
  PostgreSQL, you can even run database tests asynchronously
  by setting `use ChatDemoWeb.ConnCase, async: true`, although
  this option is not recommended for other databases.
=======
  it cannot be async. For this reason, every test runs
  inside a transaction which is reset at the beginning
  of the test unless the test case is marked as async.
>>>>>>> --wip-- [skip ci]
  """

  use ExUnit.CaseTemplate

  using do
    quote do
      # Import conveniences for testing with connections
      import Plug.Conn
      import Phoenix.ConnTest
      import ChatDemoWeb.ConnCase

      alias ChatDemoWeb.Router.Helpers, as: Routes

      # The default endpoint for testing
      @endpoint ChatDemoWeb.Endpoint
    end
  end

  setup tags do
    :ok = Ecto.Adapters.SQL.Sandbox.checkout(ChatDemo.Repo)

    unless tags[:async] do
      Ecto.Adapters.SQL.Sandbox.mode(ChatDemo.Repo, {:shared, self()})
    end

    {:ok, conn: Phoenix.ConnTest.build_conn()}
  end
end
