import React from "react"
import { useState } from "react"
const Search = () => {
  const [searchText, setSearchText] = useState("")
  const onChange = (e) => {
    setSearchText(e.target.value)
  }
  return (
    <form>
      <input
        type="text"
        id="searchText"
        value={searchText}
        onChange={onChange}
        className="input rounded-xl w-full max-w-xl shadow-sm"
        placeholder="search item"
      />
    </form>
  )
}

export default Search
