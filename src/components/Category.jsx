import React, { useEffect, useState } from "react"
import Item from "./Item"

const Category = ({ data, categoryName }) => {
  const [items, setItems] = useState(null)

  useEffect(() => {
    setItems(
      data.filter((item) => {
        return item.data.category === categoryName
      })
    )
  }, [data, categoryName])
  return (
    <div>
      <h1 className="mt-10 mb-4 text-base font-semibold">{categoryName}</h1>
      <div className="grid grid-cols-2 grid-gap-2 lg:grid-cols-4 lg:grid-gap-4">
        {items?.map((item) => {
          return <Item item={item} key={item.id} />
        })}
      </div>
    </div>
  )
}
// grid grid-cols-4 gap-4
export default Category
