# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :chat_demo,
  ecto_repos: [ChatDemo.Repo]

# Configures the endpoint
config :chat_demo, ChatDemoWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "vky0QKvfMutFRy3Xw2hrB0PPh6ud+j4nTdCw0zePvMsYROeRRB+UZdBpINAi7CSJ",
  render_errors: [view: ChatDemoWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: ChatDemo.PubSub,
  live_view: [signing_salt: "+jrVl49D"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
