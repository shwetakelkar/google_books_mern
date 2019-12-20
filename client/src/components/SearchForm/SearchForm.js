import React from "react"


export const SearchForm =(props)=>(

    <div className = "form-group">
        <label>Book Title</label>
        <input className ="col-sm-12 form-control" {...props} label="Book Title" />     
    </div>

)