import React, { useContext } from "react"
import AddIcon from "@mui/icons-material/Add"
import CartContext from "../context/cart/CartContext"

const Item = ({ item }) => {
  const { dispatch } = useContext(CartContext)

  const addToCart = (e) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }
  return (
    <div className="mr-4 p-2 rounded-md shadow-md flex flex-row justify-between">
      <p className="text-sm font-medium">{item.data.name}</p>
      <AddIcon className="text-gray-400" onClick={addToCart} />
    </div>
  )
}

export default Item
