import React from "react"
import { ReactComponent as BottleIcon } from "../assets/svg/source.svg"
import { useContext } from "react"
import CartContext from "../context/cart/CartContext"
import ShoppingList from "./ShoppingList"

const CartMenu = () => {
  const { cart } = useContext(CartContext)

  return (
    <div
      className={`min-h-screen w-72 lg:w-96 flex flex-col px-4 shopping-list ${
        cart.length === 0 && "  empty-list"
      }`}
    >
      <div className="bg-purple-800 mt-10 p-3 rounded-xl relative">
        <div className="ml-24">
          <p className="text-white text-sm font-semibold">
            Didn't find what you need?
          </p>
          <button className="mt-4 p-3 text-purple-800 font-semibold rounded-xl bg-base-100">
            Add item
          </button>
        </div>
        <BottleIcon className="absolute left-2 -top-10" />
      </div>
      {cart.length > 0 ? (
        <ShoppingList />
      ) : (
        <p className="my-auto mx-auto z-10 font-semibold text-lg">No items</p>
      )}
    </div>
  )
}

export default CartMenu
