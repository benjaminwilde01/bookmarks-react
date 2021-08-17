import React, { useState } from 'react'
import axios from 'axios'

const baseURL = 'http://localhost:3003/'

function Form() {


    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')

    const addBookmark = async (ev) => {
        ev.preventDefault()
        try {
            await axios.post(baseURL + 'bookmarks', {
                title: title,
                url: url
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={ addBookmark }>  
                <label htmlFor="title">Name:</label>
                <input onChange={(ev) => setTitle(ev.target.value) } type="text" id="title" name="title"  value={ title } required/>

                <label htmlFor="url">URL:</label>
                <input onChange={(ev) => setUrl(ev.target.value) } type="text" id="url" name="url"  value={ url } required/>

                <button type="submit">Submit</button>
            </form>
    )
}

export default Form
