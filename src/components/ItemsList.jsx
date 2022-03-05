import React from "react"
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../firebase.config.js"
import { useEffect, useState } from "react"
import Spinner from "./Spinner"
import Category from "./Category.jsx"

const ItemsList = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(null)
  const [categories, setCategories] = useState(null)
  useEffect(() => {
    const fetchItems = async () => {
      const itemRef = collection(db, "items")
      const q = query(itemRef)
      const querySnap = await getDocs(q)
      const itemsList = []
      querySnap.forEach((doc) => {
        return itemsList.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      setItems(itemsList)

      const categoryList = Array.from(
        new Set(
          itemsList.map((doc) => {
            return doc.data.category
          })
        )
      )
      setCategories(categoryList)
      setLoading(false)
    }

    fetchItems()
  }, [])

  if (loading) {
    return <Spinner />
  }
  if (!loading && !items) {
    return (
      <div className="flex-1 flex flex-col justify-center">
        No items available...
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col">
      {categories.map((category) => {
        return <Category key={category} data={items} categoryName={category} />
      })}
    </div>
  )
}

export default ItemsList
