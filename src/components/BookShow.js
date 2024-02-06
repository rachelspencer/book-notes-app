import { useContext, useState } from "react"
import { createBook } from '../api';
import AuthContext from "../context/authContext";
import Modal from './Modal';
import './BookShow.css';

function BookShow({isInLibrary, book}) {
    const { userId } = useContext(AuthContext);
    const [ showModal, setShowModal ] = useState(false);
    const coverUrl = book.coverUrl || book?.thumbnails?.small;
    if (!coverUrl) {
        return null;
    }

    const handleClick = (event) => {
        console.log("coverURL:", coverUrl)
        createBook( { userId, coverUrl, ...book } )
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="book-show">
            <img className="image" src={coverUrl.replace('http', 'https')} alt="book cover" />
            
            {!isInLibrary && (
                <>
                    <button className="add-book-btn" onClick={handleClick}>
                        Add to Library
                    </button>
                    {showModal && (
                        <Modal onClose={closeModal} message="Book has been added to your library!"/>
                    )}
                </>
            )}
        </div>
    )
}

export default BookShow;