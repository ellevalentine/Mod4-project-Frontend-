import React from "react";
import TwitterScript from "../pages/Script.js";

// import {
//   TwitterTimelineEmbed,
//   TwitterShareButton,
//   TwitterFollowButton,
//   TwitterHashtagButton,
//   TwitterMentionButton,
//   TwitterTweetEmbed,
//   TwitterMomentShare,
//   TwitterDMButton,
//   TwitterVideoEmbed,
//   TwitterOnAirButton
// } from "react-twitter-embed";

// const API = "https://gnip-stream.twitter.com/stream/powertrack/accounts/{gnip_account_name}/publishers/twitter/{stream_label}.json"

class TwitterFeed extends React.Component {
  render() {
    return (
      <div className="twitter-container">
        <a
          className="twitter-timeline"
          // data-width="250"
          data-height="675"
          href="https://twitter.com/ftmoney?ref_src=twsrc%5Etfw"
        >
          Tweets by ftmoney
        </a>
        <TwitterScript />
      </div>
    );
  }
}
export default TwitterFeed;
