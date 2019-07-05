import Script from 'react-load-script'
import React from "react"

class TwitterScript extends React.Component {
    render() {
        return (
          <Script
            url="https://platform.twitter.com/widgets.js"
          />
        )
      }
}

export default TwitterScript