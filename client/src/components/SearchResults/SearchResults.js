import React from "react";
import "./SearchResult.css"

const SearchResult = (props)=>(
    <div>
    <h1 className="mt-5 pt-5">Book Results</h1>
    {rendorResult(props)}
    </div>
    

)

function rendorResult(props){

    console.log(props.results)

    return(
        props.results.map((elem,i) =>{
            return(
                
                <div key={i} className="card">
                    <div className="card-header">
                    <h4 className="mt-2"><a href={elem.volumeInfo.infoLink}>{elem.volumeInfo.title}</a></h4></div>
                    <h5 className="mt-4">Author: {elem.volumeInfo.authors[0]}</h5>
                    <p><img src={elem.volumeInfo.imageLinks.thumbnail} alt="book" className="pr-3 float-left"/>{elem.volumeInfo.description}</p>
                    <button className="btn btn-save float-right col-sm-1" onClick=
                    {()=>props.handleBookSave({
                        title:elem.volumeInfo.title,
                        author:elem.volumeInfo.authors[0],
                        description:elem.volumeInfo.description,
                        link:elem.volumeInfo.infoLink,
                        thumbnail:elem.volumeInfo.imageLinks.thumbnail})}
                        >Save</button>
                </div>
                
                
            )
        })
        
    )

}

export default SearchResult