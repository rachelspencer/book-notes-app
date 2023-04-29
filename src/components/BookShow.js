import { useContext } from "react"
import { createBook } from '../api';
import AuthContext from "../context/authContext";

function BookShow({book}) {
    const { userId } = useContext(AuthContext);
    const coverUrl = book.coverUrl || book?.thumbnails?.small;
    if (!coverUrl) {
        return null;
    }

    const handleClick = (event) => {
        console.log("coverURL:", coverUrl)
        createBook( { userId, coverUrl, ...book } )
    };

    return (
        <div>
            <img src={coverUrl.replace('http', 'https')} alt="book cover" />
            <button className="tbd" onClick={handleClick} >Add to Library</button>
        </div>
    )
}

export default BookShow;