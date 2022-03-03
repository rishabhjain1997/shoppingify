import React from "react"
import Search from "../components/Search"
import ItemsList from "../components/ItemsList"
const Items = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col content-center">
      <header className="pt-4 grid grid-cols-3 gap-8">
        <p className="col-span-2 h-fit self-center font-medium">
          <span className="text-yellow-500">Shoppingify</span> allows you to
          take your shopping list wherever you go
        </p>
        <Search />
      </header>
      <ItemsList />
    </div>
  )
}

export default Items
