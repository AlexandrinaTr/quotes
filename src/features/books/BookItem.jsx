import { useDispatch } from "react-redux";

import { deleteBook, selectBook } from "./booksSlice";
import { setStatus } from "../status/statusSlice";

function BookItem({ book }) {
  const dispatch = useDispatch();

  //Handler for clicking on a certain book. A book description and a list of saved quotes will be shown in the ActionBar
  function handleSelect() {
    dispatch(selectBook(book));
    dispatch(setStatus("selectedBook"));
  }

  //Handler for deleting a book. Future update: to ask user if he is sure about deleting the book
  function handleDelete(id) {
    dispatch(deleteBook(id));
    dispatch(setStatus("start"));
  }

  return (
    <div className="group text-blue-900 flex basis-full text-lg py-2 px-4 transition-all duration-75 ease-in rounded-sm focus:outline-none focus:bg-blue-100 shadow-md bg-indigo-50 cursor-pointer hover:bg-blue-800 hover:text-indigo-50 lg:py-1 lg:px-4 lg:text-md">
      <button
        className="focus:outline-none block grow active:bg-blue-800 text-left active:text-indigo-50 md:text-sm  active:italic"
        onClick={handleSelect}
      >
        {book.title}
      </button>
      <button
        onClick={() => handleDelete(book.id)}
        className="font-bold focus:outline-none shrink-0 transition-all duration-75 ease-out group-hover:scale-150"
      >
        &times;
      </button>
    </div>
  );
}

export default BookItem;
