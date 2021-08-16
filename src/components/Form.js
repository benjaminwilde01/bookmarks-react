import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const baseURL = 'http://localhost:3003/'

function Form() {

    const history = useHistory()

    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')

    const addBookmark = async (ev) => {
        ev.preventDefault()
        try {
            await axios.post(baseURL + 'bookmarks', {
                title: title,
                url: url
            })
            // history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={ addBookmark }>

                
                <label htmlFor="title">Title:</label>
                <input onChange={(ev) => setTitle(ev.target.value) } type="text" id="title" name="title"  value={ title } required/>

                <label htmlFor="url"></label>
                <input onChange={(ev) => setUrl(ev.target.value) } type="text" id="url" name="url"  value={ url } required/>

                <button type="submit">Submit</button>
            </form>
    )
}

export default Form
