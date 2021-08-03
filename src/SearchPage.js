import React from "react"
import "./SearchPage.css"
import TuneIcon from "@material-ui/icons/Tune"

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/UUUBRjUs2lBdKGgtOfsHifIXscTWf8HVf5xm0qUQsHPTDyGWqqKivQUmIKopoGYRIlU7W26lGA=s176-c-k-c0x00ffffff-no-rj-mo"
        Channel="FC Barcelona"
        verified
        subs="12.1M"
        noOfVideos={(9, 245)}
        description="FIRST SPORTS TEAM IN THE WORLD TO REACH 10 MILLION SUBSCRIBERS ON @YOUTUBE! ❤️ Welcome"
      />
    </div>
  )
}

export default SearchPage
