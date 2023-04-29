import BookShow from "./BookShow";
// props = {
//     books: [{ title: 'Rachel Book' }]
// }

function BookList({ isLibrary, books = [] }) {
    if (!books.length) {
        return null;
    };

    const renderBooks = () => books.map((book, i) => {
        return <BookShow isInLibrary={isLibrary} key={i} book={book}/>
    });

    return (
        <div className="tbd">
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