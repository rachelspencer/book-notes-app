import { useContext } from "react"
import { createBook } from '../api';
import AuthContext from "../context/authContext";

function BookShow({book}) {
    // console.log('url', book);
    // console.log("sml url string:", book?.thumbnails?.small)
    const newUrl = (book?.thumbnails?.small || '').replace('http', 'https');
    console.log(newUrl)

    const { userId } = useContext(AuthContext);
    const handleClick = (event) => {
        createBook( { userId, newUrl, ...book } )
    };

    return (
        <div>
            <img src={newUrl} alt="book cover" />
            <button className="tbd" onClick={handleClick} >Add to Library</button>
        </div>
    )
}

export default BookShow;