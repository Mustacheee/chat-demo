alias ChatDemo.Models.{Topic, User}

ChatDemo.Repo.insert!(%User{username: "user one"})
ChatDemo.Repo.insert!(%User{username: "user two"})
ChatDemo.Repo.insert!(%Topic{name: "default"})
