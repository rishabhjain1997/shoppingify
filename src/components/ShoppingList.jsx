import React from "react"
import { useContext } from "react"
import CartContext from "../context/cart/CartContext"
import EditIcon from "@mui/icons-material/Edit"
import CartButton from "./shared/CartButton"

const ShoppingList = () => {
  const { cart, listName } = useContext(CartContext)
  const categories = Array.from(
    new Set(
      cart.map((doc) => {
        return doc.data.category
      })
    )
  )
  return (
    <div className="z-10">
      <div className="mt-12 flex justify-between items-center">
        <p className="text-md font-bold">{listName}</p>
        <EditIcon className="text-md" />
      </div>
      {categories.map((category) => {
        return (
          <>
            <p className="mt-10 text-xs text-gray-500">{category}</p>
            {cart.map((cartItem) => {
              if (cartItem.data.category === category) {
                return (
                  <div className="mt-6 flex justify-between  items-center">
                    <p>{cartItem.data.name}</p>
                    <CartButton cartItem={cartItem} />
                  </div>
                )
              }
            })}
          </>
        )
      })}
    </div>
  )
}

export default ShoppingList
