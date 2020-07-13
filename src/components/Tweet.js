import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Tweet = ({ json }) => {
  const { id } = json.data;

  const options = {
    cards: "hidden",
    align: "center",
    width: "550",
    conversation: "none",
  };

  return <TwitterTweetEmbed options={options} tweetId={id} />;
};

export default Tweet;
