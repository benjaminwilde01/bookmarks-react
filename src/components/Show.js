import React, { useState, useEffect } from 'react'
import axios from 'axios'

const baseURL = 'http://localhost:3003/'
let showForm = false

const Show = () => {
    
    const [bookmarks, setBookmarks] = useState([])

    
    
    const toggleForm = () => {
        showForm = !showForm
        console.log(showForm)
    }
    

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

    
    function updateBookmark (id) {
        console.log(id)
        const newBookmark = bookmarks.filter((bookmark) => bookmark.id !== id)

        setBookmarks(newBookmark)
        
        try {
            axios.patch(`${baseURL}bookmarks/${id}`)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div>
            {bookmarks.map((bookmark) => (
                <div key={bookmark._id}>
                    <h3>{bookmark.title}</h3>
                    <h3><a href={'http://' + bookmark.url} target='_blank' rel="noreferrer">{bookmark.url} </a></h3>
                    <button onClick={() => deleteBookmark(bookmark._id)}>DELETE</button>  
                    <button onClick={toggleForm}>EDIT</button> 
                    { showForm &&
                        <form onSubmit={() => updateBookmark(bookmark._id)}>
                            <input type="text" name="title" id="title" />
                            <input type="text" name="url" id="url" />
                            <input  type="submit" value="Submit"/>
                        </form>
                    }
                </div>
            ))}
        </div>
    )
}

export default Show
