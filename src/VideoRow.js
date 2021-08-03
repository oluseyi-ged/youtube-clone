import React from "react"
import { Avatar } from "@material-ui/core"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import "./VideoRow.css"

function VideoRow({
  views,
  avatar,
  verified,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <div className="videoRow__thumbnail">
        <img src={image} alt="" />
      </div>
      <div className="videoRow__details">
        <h1>{title}</h1>
        <p>
          {views} views - {timestamp}
        </p>
        <div className="videoRow__channel">
          <Avatar className="videoRow__avatar" alt={channel} src={avatar} />
          <p>{channel}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default VideoRow
