import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { saveNewQuote } from "../books/booksSlice";
import { setStatus } from "../status/statusSlice";

import BookDescription from "../books/BookDescription";
import Button from "../../ui/Button";

function EditQuoteForm() {
  const dispatch = useDispatch();

  //Getting the selected book and the id of the quote that should be edited
  const selectedBook = useSelector((state) => state.books.selectedBook);
  const editQuoteId = useSelector((state) => state.books.editQuoteId);

  //Getting the current selected book's quotes
  const quotes = selectedBook.quotes;

  //Finding the quote that should be edited
  const editQuote =
    editQuoteId.length !== 0
      ? quotes.filter((q) => q.id === editQuoteId)[0]
      : {};

  //Setting the state for the controlled elements
  const [page, setPage] = useState(editQuote.page);
  const [editedQuote, setEditedQuote] = useState(editQuote.quote);

  //Handler for submitting the form
  function handleSubmit(e) {
    e.preventDefault();
    //Declaring the updated quote object
    const editedQuoteObject = { id: editQuoteId, page, quote: editedQuote };
    //Updating the quotes array
    const updatedQuotes = [
      editedQuoteObject,
      ...quotes.filter((q) => q.id !== editQuoteId),
    ];

    dispatch(saveNewQuote(updatedQuotes, selectedBook.id));
    dispatch(setStatus("selectedBook"));
  }
  return (
    <>
      <BookDescription />
      <form
        onSubmit={(e) => handleSubmit(e, page, editQuote)}
        className="flex flex-col p-6 gap-2 shadow-md rounded-sm mx-5 my-1 h-64 overflow-clip bg-indigo-50 text-sm lg:text-md lg:my-10 lg:h-80 xl:mx-40"
      >
        <label className="block text-blue-900 font-bold">Page:</label>
        <input
          className="shadow-md py-2 px-5 appearance-none border rounded w-full text-blue-800 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Page number"
          value={page}
          onChange={(e) => setPage(e.target.value)}
        ></input>
        <label className="block text-blue-900 text-md font-bold">Quote:</label>
        <input
          type="text"
          className="shadow-md py-2 px-5 appearance-none border rounded w-full text-blue-800 leading-tight focus:outline-none focus:shadow-outline h-20"
          placeholder="Quote"
          value={editedQuote}
          onChange={(e) => setEditedQuote(e.target.value)}
        ></input>
        <Button type="action">Save changes</Button>
      </form>
    </>
  );
}

export default EditQuoteForm;
