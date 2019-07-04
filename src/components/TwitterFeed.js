import React from "react";

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

// // const API = "https://gnip-stream.twitter.com/stream/powertrack/accounts/{gnip_account_name}/publishers/twitter/{stream_label}.json"

class TwitterFeed extends React.Component {
  render() {
  return (
<div>
    <a className="twitter-timeline" data-width="350" data-height="700" href="https://twitter.com/ftmoney?ref_src=twsrc%5Etfw">Tweets by ftmoney</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
  </div>
  )
}
}
export default TwitterFeed;

