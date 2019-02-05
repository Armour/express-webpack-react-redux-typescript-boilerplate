workflow "Deploy on Heroku" {
  on = "push"
  resolves = [
    "verify",
  ]
}

# Login
action "login" {
  uses = "actions/heroku@master"
  args = "container:login"
  secrets = ["HEROKU_API_KEY"]
}

# Push
action "push" {
  needs = ["login"]
  uses = "actions/heroku@master"
  args = ["container:push", "--app", "$HEROKU_APP", "web"]
  secrets = ["HEROKU_API_KEY"]
  env = {
    HEROKU_APP = "express-react-typescript"
  }
}

# Release
action "deploy" {
  needs = ["push"]
  uses = "actions/heroku@master"
  args = ["container:release", "--app", "$HEROKU_APP", "web"]
  secrets = ["HEROKU_API_KEY"]
  env = {
    HEROKU_APP = "express-react-typescript"
  }
}

# Verify
action "verify" {
  needs = ["deploy"]
  uses = "actions/heroku@master"
  args = ["apps:info", "$HEROKU_APP"]
  secrets = ["HEROKU_API_KEY"]
  env = {
    HEROKU_APP = "express-react-typescript"
  }
}
