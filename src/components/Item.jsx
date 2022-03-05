import React from "react"
import AddIcon from "@mui/icons-material/Add"

const Item = ({ item }) => {
  return (
    <div className="mr-4 p-2 rounded-md shadow-md flex flex-row justify-between">
      <p className="text-sm font-medium">{item.data.name}</p>
      <AddIcon className="text-gray-400" />
    </div>
  )
}

export default Item
