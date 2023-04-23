// import React, { useContext, useEffect, useState } from "react";
// import SearchContext from "../context/searchContext"
// import axios from "axios";
import BookShow from "./BookShow";

function BookList({cityImages}) {
        const renderedImages = cityImages.map((cityImage) => {
            return <BookShow key={cityImage.id} cityImage={cityImage}/>
        });

        return (
            <div className="tbd">
                {renderedImages}
            </div>
        );
    };

export default BookList;