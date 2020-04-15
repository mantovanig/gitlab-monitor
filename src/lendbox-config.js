export default {
  gitlabApi: "https://gitlab.com/api/v4",
  privateToken: process.env.GITLAB_TOKEN,
  maxAge: 168,
  membership: true,
  fetchCount: 50,
  filter: {
    include: "backend|frontend"
  }
}
