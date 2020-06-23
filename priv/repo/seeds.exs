alias ChatDemo.Models.{Topic, User}

ChatDemo.Repo.insert!(%User{username: "default user"})
ChatDemo.Repo.insert!(%Topic{name: "default"})
