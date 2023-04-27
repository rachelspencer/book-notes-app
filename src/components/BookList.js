// import React, { useContext, useEffect, useState } from "react";
// import SearchContext from "../context/searchContext"
// import axios from "axios";
import BookShow from "./BookShow";

function BookList({book}) {
        // const renderedImages = cityImages.map((cityImage, i) => {
        //     return <BookShow key={i} cityImage={cityImage}/>
        // });

        return (
            <div className="tbd">
                <BookShow book={book}/>
            </div>
        );
    };

export default BookList;