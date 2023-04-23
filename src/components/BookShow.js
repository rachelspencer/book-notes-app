import React from "react";
// import BookEdit from "./BookEdit ";

function BookShow({cityImage}) {

    return (
        <div>
            <img src={cityImage.urls.small} alt={cityImage.alt_description}/>
        </div>
    )
}

export default BookShow;