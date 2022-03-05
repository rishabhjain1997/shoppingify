import React from "react"
import spinner from "../assets/svg/Cube.gif"
const Spinner = () => {
  return (
    <div className="flex-1 flex flex-col  justify-center">
      <img src={spinner} alt="Loading..." className=" align-middle mx-auto" />
    </div>
  )
}

export default Spinner
