# ChatDemo
The purpose of this repository is to provide a follow-along style introduction into Phoenix Channels. The master branch will purposefully be left incomplete with the intent that users will fill in the missing pieces while learning a thing or two about how channels work in the Phoenix framework. Note: This isn't a frontend based project, so don't judge it so hard... it has feelings too y'know :'(

## Setup

### Docker (Recommended)
* Open terminal in root directory
* Input `docker-compose up`
* Application should begin settings itself up
* Once you see the following `[info] Access ChatDemoWeb.Endpoint at http://localhost:4000`, wait like 15 seconds for CSS to compile

### Non-Docker (Not Recommended):
* Install Elixir 1.8.2
* Install Postgres 11.2
* Install Phoenix 1.3.0
* Navigate to root directory in terminal
* Install dependencies with `mix deps.get`
* Create and migrate your database with `mix ecto.setup`
* Install Node.js dependencies with `npm install`
* Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.