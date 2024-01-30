import { useDispatch, useSelector } from "react-redux";

import { closeBook } from "./booksSlice";
import { setStatus } from "../status/statusSlice";

function BookDescription() {
  const selectedBook = useSelector((state) => state.books.selectedBook);
  const dispatch = useDispatch();

  //Handler for closing button
  function handleClose() {
    dispatch(closeBook());
    dispatch(setStatus("start"));
  }
  return (
    <div className="bg-indigo-50 shadow-xl group text-blue-900 text-2xl flex gap-4 items-end py-4 px-8 mb-3 lg:text-xl">
      <h2 className="font-semibold ">{selectedBook?.title}</h2>
      <h3 className="italic text-xl grow md:text-sm ">
        by {selectedBook?.author}
      </h3>
      <span
        className="font-extrabold text-2xl text-blue-900 group-hover:text-red-600 transition-all duration-75 ease-out group-hover:scale-150 cursor-pointer md:absolute md:top-1 md:right-4 xl:top-2"
        onClick={handleClose}
      >
        &times;
      </span>
    </div>
  );
}

export default BookDescription;
