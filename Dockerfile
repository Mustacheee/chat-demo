FROM elixir:1.8.2

ENV MIX_ENV dev
ENV NODE_ENV development
ENV PORT 4001
EXPOSE 4001

RUN apt-get update
RUN apt-get install -y postgresql-client inotify-tools

RUN mix local.hex --force
RUN mix local.rebar --force
RUN mix archive.install --force http://github.com/phoenixframework/archives/raw/master/phx_new-1.3.0.ez

RUN curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install nodejs

RUN mkdir /app
WORKDIR /app