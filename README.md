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
- A Twitter developer app, which can be created in your Twitter developer account.
- A bearer token from your app in the [Twitter developer portal](https://developer.twitter.com/en/docs/developer-portal/overview)
- Set up a project to obtain access to v2 endpoints in the [Twitter developer portal](https://developer.twitter.com/en/docs/developer-portal/overview)l
- Access to the [filtered stream](http://developer.twitter.com/en/docs/twitter-api/tweets/filter-stream) endpoint. You will also need to activate it in the [Twitter developer portal](https://developer.twitter.com/en/docs/developer-portal/overview) dashboard within your Twitter Developer account.
- [Node.js](https://nodejs.org/)
- [Npm](https://docs.npmjs.com/about-npm) (This is automatically installed with Node. Make sure you have npm 5.2 or higher.)
- [Npx](https://www.npmjs.com/package/npx) (Included with npm 5.2 or higher)

## Install

```sh
npm install
```

## Environment setup

- Your bearer token can be found from your app in the [Twitter developer portal](https://developer.twitter.com/en/docs/developer-portal/overview)

```sh
export TWITTER_BEARER_TOKEN=<REPLACE WITH YOUR BEARER TOKEN INCLUDING ANGLE BRACKETS>
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
