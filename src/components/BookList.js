import BookShow from "./BookShow";
import './BookList.css';

function BookList({ isLibrary, books = [] }) {
    if (!books.length) {
        return (
            <div className="library_placeholder">
                <img 
                src={require('../placeholders/no_books_placeholder.jpeg')}
                alt="No books to display"
                className="no_books_placeholder"
                />
                <div class="placeholder-text">No books in library, get adding!</div>
          </div>
        )
    };

    const renderBooks = () => books.map((book, i) => {
        return <BookShow isInLibrary={isLibrary} key={i} book={book}/>
    });
    
    return (
        <div className="book_list_container">
            {renderBooks()}
        </div>
    );
};

export default BookList;

// const BookList = ({ books = [] }) => books.length && (
//     <div className="tbd">
//         {books.map((book, i) => {
//             return <BookShow key={i} book={book}/>
//         })}
//     </div>
// );