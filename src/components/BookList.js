import BookShow from "./BookShow";
import './BookList.css';
import no_books_placeholder from "../placeholders";

function BookList({ isLibrary, books = [] }) {
    if (!books.length) {
        return (
            <div className="book_list_container">
            <img
              src={no_books_placeholder}
              alt="No books to display"
              className="placeholder_image"
            />
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