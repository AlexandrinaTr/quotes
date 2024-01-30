import { useDispatch, useSelector } from "react-redux";
import { MdModeEditOutline } from "react-icons/md";

import { deleteQuote, setEditQuoteId } from "../books/booksSlice";
import { setStatus } from "../status/statusSlice";

function Quote({ quote }) {
  const dispatch = useDispatch();

  //Getting the current selected book
  const book = useSelector((state) => state.books.selectedBook);

  //Handler for deleting the quote. Future update: asking the user if he is sure about deleting the quote
  function handleDeleteQuote(id) {
    const updatedQuotes = book.quotes.filter((quote) => quote.id !== id);
    dispatch(deleteQuote(updatedQuotes, book.id));
  }

  //Handler for editting the quote
  function handleEdit(id) {
    dispatch(setEditQuoteId(id));
    dispatch(setStatus("editingQuote"));
  }
  return (
    <div className="group bg-indigo-100 flex justify-between gap-8 items-center mx-2 px-3 py-2 rounded-sm cursor-pointer hover:bg-indigo-50 shadow-lg">
      <span className="bg-indigo-50 p-2 text-blue-900 font-bold min-w-10 text-center shadow-md ">
        {quote.page}
      </span>
      <p className="text-blue-900 font-medium grow text-md">{quote.quote}</p>
      <div className=" font-extrabold  shrink-0 text-center group-hover:text-red-600 transition-all duration-300 ease-out group-hover:scale-[1.1]">
        <MdModeEditOutline
          onClick={() => handleEdit(quote.id)}
          style={{ color: "#1e3a8a", fontSize: "1rem" }}
        />
      </div>

      <span
        className=" text-blue-900 font-extrabold text-xl pr-2 shrink-0 text-center group-hover:text-red-600 transition-all duration-300 ease-out group-hover:scale-[1.2]"
        onClick={() => handleDeleteQuote(quote.id)}
      >
        &times;
      </span>
    </div>
  );
}

export default Quote;
