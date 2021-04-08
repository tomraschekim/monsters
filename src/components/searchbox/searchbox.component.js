import React from 'react'
import "./searchbox.css"
export const Searchbox = ({placeholder, handlechange}) => {
    return (
        <div >
            <input 
            className="search"
            type="search" 
            placeholder={placeholder}
            onChange = {handlechange}/>
        </div>
    )
}
