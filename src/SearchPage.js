import React from "react"
import "./SearchPage.css"
import ChannelRow from "./ChannelRow"
import TuneIcon from "@material-ui/icons/Tune"
import VideoRow from "./VideoRow"

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
        channel="FC Barcelona"
        verified
        subs="12.1M"
        noOfVideos={(9, 245)}
        description="FIRST SPORTS TEAM IN THE WORLD TO REACH 10 MILLION SUBSCRIBERS ON @YOUTUBE! ❤️ Welcome"
      />
      <hr />
      <VideoRow
        avatar="https://yt3.ggpht.com/UUUBRjUs2lBdKGgtOfsHifIXscTWf8HVf5xm0qUQsHPTDyGWqqKivQUmIKopoGYRIlU7W26lGA=s176-c-k-c0x00ffffff-no-rj-mo"
        views="274K views"
        verified
        description="The Brazilian full back enjoys his first day out on the training field alongside Philippe Coutinho with Sergio Agüero continuing to ..."
        timestamp="1 day ago"
        channel="FC Barcelona"
        title="👑👑 EMERSON ROYAL'S FIRST TRAINING WITH BARCA 👑👑"
        image="http://i3.ytimg.com/vi/fJbWxYPR_BQ/hqdefault.jpg"
      />
      <VideoRow
        avatar="https://yt3.ggpht.com/UUUBRjUs2lBdKGgtOfsHifIXscTWf8HVf5xm0qUQsHPTDyGWqqKivQUmIKopoGYRIlU7W26lGA=s176-c-k-c0x00ffffff-no-rj-mo"
        views="274K views"
        verified
        description="FC Barcelona have made it three wins out of three this preseason with a convincing victory over VfB Stuttgart at the ..."
        timestamp="3 days ago"
        channel="FC Barcelona"
        title="HIGHLIGHTS | VFB Stuttgart 0-3 Barça (MEMPHIS, YUSUF DEMIR & RIQUI PUIG SCORE)"
        image="http://i3.ytimg.com/vi/41AFcPa2_F0/hqdefault.jpg"
      />{" "}
      <VideoRow
        avatar="https://yt3.ggpht.com/UUUBRjUs2lBdKGgtOfsHifIXscTWf8HVf5xm0qUQsHPTDyGWqqKivQUmIKopoGYRIlU7W26lGA=s176-c-k-c0x00ffffff-no-rj-mo"
        views="274K views"
        verified
        description="The Kun Agüero and Ter Stegen do gym work in Barcelona while the team is staying Germany for pre-season training camps."
        timestamp="1 day ago"
        channel="FC Barcelona"
        title="KUN AGÜERO & TER STEGEN GYM WORK IN BARCELONA!"
        image="http://i3.ytimg.com/vi/em2NdK8-nxY/hqdefault.jpg"
      />{" "}
      <VideoRow
        avatar="https://yt3.ggpht.com/UUUBRjUs2lBdKGgtOfsHifIXscTWf8HVf5xm0qUQsHPTDyGWqqKivQUmIKopoGYRIlU7W26lGA=s176-c-k-c0x00ffffff-no-rj-mo"
        views="274K views"
        verified
        description="Join us LIVE from the Red Bull Arena Salzburg for Barça's fourth friendly match of the season against FC Red Bull Salzburg on ..."
        timestamp="Premieres Tomorrow"
        channel="FC Barcelona"
        title="🔥 BARÇA LIVE | FC RED BULL SALZBURG - BARÇA ⚽ FRIENDLY MATCH FROM AUSTRIA"
        image="http://i3.ytimg.com/vi/ZBVohSHN5g8/hqdefault.jpg"
      />
      <VideoRow
        avatar="https://yt3.ggpht.com/UUUBRjUs2lBdKGgtOfsHifIXscTWf8HVf5xm0qUQsHPTDyGWqqKivQUmIKopoGYRIlU7W26lGA=s176-c-k-c0x00ffffff-no-rj-mo"
        views="274K views"
        verified
        description="The Brazilian full back enjoys his first day out on the training field alongside Philippe Coutinho with Sergio Agüero continuing to ..."
        timestamp="1 day ago"
        channel="FC Barcelona"
        title="👑👑 EMERSON ROYAL'S FIRST TRAINING WITH BARCA 👑👑"
        image="http://i3.ytimg.com/vi/fJbWxYPR_BQ/hqdefault.jpg"
      />
      <VideoRow
        avatar="https://yt3.ggpht.com/UUUBRjUs2lBdKGgtOfsHifIXscTWf8HVf5xm0qUQsHPTDyGWqqKivQUmIKopoGYRIlU7W26lGA=s176-c-k-c0x00ffffff-no-rj-mo"
        views="274K views"
        verified
        description="FC Barcelona have made it three wins out of three this preseason with a convincing victory over VfB Stuttgart at the ..."
        timestamp="3 days ago"
        channel="FC Barcelona"
        title="HIGHLIGHTS | VFB Stuttgart 0-3 Barça (MEMPHIS, YUSUF DEMIR & RIQUI PUIG SCORE)"
        image="http://i3.ytimg.com/vi/41AFcPa2_F0/hqdefault.jpg"
      />{" "}
      <VideoRow
        avatar="https://yt3.ggpht.com/UUUBRjUs2lBdKGgtOfsHifIXscTWf8HVf5xm0qUQsHPTDyGWqqKivQUmIKopoGYRIlU7W26lGA=s176-c-k-c0x00ffffff-no-rj-mo"
        views="274K views"
        verified
        description="The Kun Agüero and Ter Stegen do gym work in Barcelona while the team is staying Germany for pre-season training camps."
        timestamp="1 day ago"
        channel="FC Barcelona"
        title="KUN AGÜERO & TER STEGEN GYM WORK IN BARCELONA!"
        image="http://i3.ytimg.com/vi/em2NdK8-nxY/hqdefault.jpg"
      />{" "}
      <VideoRow
        avatar="https://yt3.ggpht.com/UUUBRjUs2lBdKGgtOfsHifIXscTWf8HVf5xm0qUQsHPTDyGWqqKivQUmIKopoGYRIlU7W26lGA=s176-c-k-c0x00ffffff-no-rj-mo"
        views="274K views"
        verified
        description="Join us LIVE from the Red Bull Arena Salzburg for Barça's fourth friendly match of the season against FC Red Bull Salzburg on ..."
        timestamp="Premieres Tomorrow"
        channel="FC Barcelona"
        title="🔥 BARÇA LIVE | FC RED BULL SALZBURG - BARÇA ⚽ FRIENDLY MATCH FROM AUSTRIA"
        image="http://i3.ytimg.com/vi/ZBVohSHN5g8/hqdefault.jpg"
      />
    </div>
  )
}

export default SearchPage
