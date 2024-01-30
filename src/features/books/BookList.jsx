import { useSelector } from "react-redux";

import { getBooks } from "./booksSlice";

import NoBooksMessage from "./NoBooksMessage";
import BookItem from "./BookItem";

function BookList() {
  const query = useSelector((state) => state.books.query);
  const books = useSelector(getBooks);

  //Checking if user typed a specific query in search bar
  //If there is a query, in the Book list will be shown only those books which title contains the query user typed
  //If there is no query, all books will be rendered
  const renderBooks =
    query === ""
      ? books.books
      : books.books.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        );

  //Checking if there are any books saved
  if (renderBooks.length === 0 && query === "")
    return (
      <NoBooksMessage>
        No books yet. Add a new book and start collecting inspiring quotes!
      </NoBooksMessage>
    );

  //Checking if the user-typed-query corresponds to any saved book's title
  if (renderBooks.length === 0 && query !== "")
    return (
      <NoBooksMessage>
        There is no book with this title. You can add a new book and start
        collecting inspiring quotes!
      </NoBooksMessage>
    );
  return (
    <div className="flex flex-col gap-1 pt-1 px-5 max-h-52 lg:max-h-96 overflow-auto overflow-x-hidden lg:px-3 ">
      {renderBooks.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </div>
  );
}

export default BookList;
