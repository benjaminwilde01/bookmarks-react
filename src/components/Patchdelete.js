import React, { useState, useEffect } from 'react'
import axios from 'axios'

const baseURL = 'http://localhost:3003/'

const Patchdelete = ({currentId, setCurrentId}) => {

    const deleteBookmark = async (e) => {
        console.log(setCurrentId) 
        e.preventDefault()
      //   try {
      //       await axios.delete(`${baseURL}bookmarks/${useState.id}`)
      //   } catch (error) {
            
      //   }
    }
    return (
        <div>
            <button onClick={deleteBookmark} />
        </div>
    )
}

export default Patchdelete
