import { useContext, useState } from "react"
import { createBook } from '../api';
import AuthContext from "../context/authContext";
import Modal from './Modal';
import { toast } from 'react-toastify';
import './BookShow.css';

function BookShow({isInLibrary, book}) {
    const { userId } = useContext(AuthContext);
    const [ showModal, setShowModal ] = useState(false);
    const coverUrl = book.coverUrl || book?.thumbnails?.small;
    if (!coverUrl) {
        return null;
    }

    const handleClick = (event) => {
        createBook({ coverUrl, ...book }, userId)
        toast.success(`Book added to the library! 👍`);
        // setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <button onClick={closeModal}>Go to Library</button>
            <button onClick={closeModal}>Add More books</button>
        </div>
    );

    const modal = <Modal onClose={closeModal} actionBar={actionBar}>
        <p>Book has been added to your library!</p>
    </ Modal>

    return (
        <div className="book-show">
            <img className="image" src={coverUrl.replace('http', 'https')} alt="book cover" />
            
            {!isInLibrary && (
                <>
                    <button className="add-book-btn" onClick={handleClick}>
                        Add to Library
                    </button>
                    {showModal && modal}
                </>
            )}
        </div>
    )
}

export default BookShow;