import React from "react"
import { ReactComponent as AppIcon } from "../assets/svg/logo.svg"
import { NavLink } from "react-router-dom"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import ReplayIcon from "@mui/icons-material/Replay"
import BarChartIcon from "@mui/icons-material/BarChart"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const Sidebar = () => {
  return (
    <div className="h-screen w-24 fixed bg-base-100 flex flex-col justify-between py-4 items-center">
      <AppIcon />
      <div className="flex flex-col items-stretch w-full space-y-20 text-lg text-xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            "border-l-4 text-center  menuIconContainer indexIconContainer " +
            (isActive ? "border-yellow-400" : "border-transparent")
          }
        >
          <FormatListBulletedIcon className="text-gray-600 text-xl" />
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            "border-l-4 text-center  menuIconContainer historyIconContainer " +
            (isActive ? "border-yellow-400" : "border-transparent")
          }
        >
          <ReplayIcon className="text-gray-600 text-xl" />
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            "border-l-4 text-center menuIconContainer statisticsIconContainer " +
            (isActive ? "border-yellow-400" : "border-transparent")
          }
        >
          <BarChartIcon className="text-gray-600 text-xl" />
        </NavLink>
      </div>
      <ShoppingCartIcon className="menuIconWhite my-2 p-2 bg-yellow-400 text-4xl rounded-full" />
    </div>
  )
}

export default Sidebar
