import React from 'react'
import {useState} from "react"

function NewsSearch({onUpdate}) {
    const [keyword, setKeyword] = useState("");

    const handleChange = (e) =>{
        setKeyword(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        onUpdate(keyword);
        setKeyword("");
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={handleChange} placeholder="What are you searching for?" />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default NewsSearch
