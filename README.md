# Real-Time Tweet Streamer

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/twitterdev/remote-dev-jobs-streamer" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://twitter.com/tonyv00" target="_blank">
    <img alt="Twitter: tonyv00" src="https://img.shields.io/twitter/follow/tonyv00.svg?style=social" />
  </a>
</p>

> An example app to stream Tweets in real-time using the filtered stream endpoints and Tweet annotations to listen for Tweets based on your own topics of interest. See the [tutorial](https://developer.twitter.com/en/docs/tutorials/building-an-app-to-stream-tweets) for some real life examples of how this can be used and a step by step on how to build this app on your own.

### 🏠 [Guided tutorial](https://developer.twitter.com/en/docs/tutorials/building-an-app-to-stream-tweets)

### ✨ [Glitch Demo](https://glitch.com/~twitter-real-time-tweet-streamer)

## Prerequisites

- Twitter Developer account: if you don’t have one already, you can [apply for one](https://developer.twitter.com/en/apply-for-access.html).
- A Twitter developer App attached to a Project. You can create both in your [Twitter developer portal](https://developer.twitter.com/en/portal/projects-and-apps).
- A bearer token from your App in the Twitter developer portal. This token must be associated with a Project to authenticate requests to Twitter API v2 endpoints.
- Access to the [filtered stream](http://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/introduction) endpoint. You may need to apply for Elevated access in your Twitter Developer account.
- [Node.js](https://nodejs.org/) (version 10.x or higher)
- [npm](https://docs.npmjs.com/about-npm) (version 5.2 or higher, comes with Node.js)

## Install

```sh
npm install
```

## Environment setup

1. Create a Project in the [Twitter developer portal](https://developer.twitter.com/en/portal/projects-and-apps) if you haven't already.
2. Create an App within your Project, or use an existing App attached to a Project.
3. Generate a bearer token for your App. This token will be used to authenticate your requests to the Twitter API v2 endpoints.
4. Create a `.env` file in the root directory of the project with the following content:

```
## Usage

```sh
npm start
```

## Author

👤 **Tony Vu**

- Website: https://twitter.com/tonyv00
- Twitter: [@tonyv00](https://twitter.com/tonyv00)
- Github: [@tonyv](https://github.com/tonyv)

# How to Contribute

We'd love to get patches from you!

## 📝 License

By contributing your code, you agree to license your contribution under the
terms of the APLv2: https://github.com/twitter/repo-scaffolding/blob/master/LICENSE

## Code of Conduct

Read our [Code of Conduct](CODE_OF_CONDUCT.md) for the project.

## Docker Setup

To run the application using Docker:

1. Make sure you have Docker and Docker Compose installed on your system.

2. Set your Twitter Bearer Token as an environment variable:
   ```sh
   export TWITTER_BEARER_TOKEN=<YOUR_BEARER_TOKEN>
   ```

3. Build and run the Docker container:
   ```sh
   docker-compose up --build
   ```

4. Access the application at `http://localhost:3001`
