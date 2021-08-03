import { Avatar } from "@material-ui/core"
import React from "react"
import "./ChannelRow.css"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__avatar" alt={channel} src={image} />
      <div className="channelRow__details">
        <h4>
          {channel} {verified && <CheckCircleIcon />}
        </h4>
        <p>
          {subs} subscribers - {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow
