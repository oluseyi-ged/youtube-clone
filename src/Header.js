import React from "react"
import "./Header.css"
import MenuSharpIcon from "@material-ui/icons/MenuSharp"
import SearchSharpIcon from "@material-ui/icons/SearchSharp"
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp"
import AppsSharpIcon from "@material-ui/icons/AppsSharp"
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp"
import { Avatar } from "@material-ui/core"

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon fontSize="large" />
        <img
          className="header__logo"
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
          alt="Youtube logo"
        />
      </div>

      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchSharpIcon className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsSharpIcon className="header__icon" />
        <Avatar
          alt="User Avatar"
          src="https://res.cloudinary.com/odd-developer/image/upload/v1627925104/P8iXlJ7x_400x400_f7xbus.jpg"
        />
      </div>
    </div>
  )
}

export default Header
