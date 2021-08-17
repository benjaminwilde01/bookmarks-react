import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Patchdelete from './Patchdelete'

const baseURL = 'http://localhost:3003/'

const Show = ({currentId, setCurrentId}) => {

  const [bookmarks, setBookmarks] = useState([])

  

  useEffect(() => {
      async function fetchData() {
          const res = await axios.get(baseURL + 'bookmarks')
          setBookmarks(res.data)
      }
      fetchData()
  })

  function deleteBookmark (id) {
      console.log(id)
      const newBookmark = bookmarks.filter((bookmark) => bookmark.id !== id)

      setBookmarks(newBookmark)
      
      try {
            axios.delete(`${baseURL}bookmarks/${id}`)
      } catch (error) {
          console.log(error)
      }
  }



    return (
        <div>
            {bookmarks.map((bookmark) => (
                <div key={bookmark._id}>
                    <h3>{bookmark.title}</h3>
                    <h3><a href={'http://' + bookmark.url} target='_blank'>{bookmark.url} </a></h3>
                    <button onClick={() => deleteBookmark(bookmark._id)}  />
                        
                </div>
            ))}
        </div>
    )
}

export default Show
