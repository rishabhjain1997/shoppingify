import React from "react"
import { useState, useContext } from "react"
import DeleteIcon from "@mui/icons-material/Delete"
import RemoveIcon from "@mui/icons-material/Remove"
import AddIcon from "@mui/icons-material/Add"
import CartContext from "../../context/cart/CartContext"

const CartButton = ({ cartItem }) => {
  const [edit, setEdit] = useState(false)
  const { dispatch } = useContext(CartContext)
  const addToCart = (e) => {
    dispatch({ type: "ADD_ITEM", payload: cartItem })
  }
  const deleteItem = (e) => {
    dispatch({ type: "DELETE_ITEM", payload: cartItem })
  }

  if (edit) {
    return (
      <div className="flex bg-base-100 space-x-2 rounded-xl">
        <div className="bg-orange-400 px-1 rounded-xl flex flex-col content-center justify-center">
          <DeleteIcon className="text-neutral-content" onClick={deleteItem} />
        </div>
        <div className="flex pr-2 py-2 space-x-2  content-center justify-center">
          <RemoveIcon className="text-orange-300 " />
          <div
            className="bg-transparent text-orange-400 cursor-pointer border border-2 border-orange-300 rounded-2xl text-sm px-3 py-1"
            onClick={() => setEdit((prevState) => !prevState)}
          >{`${cartItem.quantity} pcs`}</div>
          <AddIcon className="text-orange-300 " onClick={addToCart} />
        </div>
      </div>
    )
  }
  return (
    <div
      className="bg-transparent text-orange-400 cursor-pointer border border-2 border-orange-300 rounded-2xl text-sm px-3 py-1"
      onClick={() => setEdit((prevState) => !prevState)}
    >{`${cartItem.quantity} pcs`}</div>
  )
}

export default CartButton
