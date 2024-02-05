import { useContext } from "react"
import { createBook } from '../api';
import AuthContext from "../context/authContext";
import './BookShow.css';

function BookShow({isInLibrary, book}) {
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
            <img className="image" src={coverUrl.replace('http', 'https')} alt="book cover" />
            
            {!isInLibrary && (
                <button className="add-book-btn" onClick={handleClick}>
                    Add to Library
                </button>
            )}
        </div>
    )
}

export default BookShow;