import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { setStatus } from "../status/statusSlice";
import { saveNewQuote } from "../books/booksSlice";

import Button from "../../ui/Button";
import BookDescription from "../books/BookDescription";

function AddQuoteForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  //Getting the current selected book from the state
  const selectedBook = useSelector((state) => state.books.selectedBook);
  const quotes = selectedBook.quotes;

  //Handler for submitting the form
  function onSubmit(newQuote) {
    //Getting the current selected book's id
    const id = selectedBook.id;
    //Assigning a new id for the quote
    newQuote.id = Math.ceil(Math.random() * 10000000000).toString();
    //Determining the updated quotes array by placing the new quote on top
    const updatedQuotes = [newQuote, ...quotes];

    dispatch(saveNewQuote(updatedQuotes, id));
    dispatch(setStatus("savedNewQuote"));
  }
  return (
    <>
      <BookDescription />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-6 gap-2 shadow-md rounded-sm mx-5 my-1 h-64 bg-indigo-50 text-sm lg:text-md lg:my-10 lg:h-80 xl:mx-40"
      >
        <label className="block text-blue-900 font-bold">Page:</label>
        <input
          {...register("page")}
          className="shadow-md py-2 px-5 appearance-none border rounded w-full text-blue-800 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Page number"
        ></input>
        <label className="block text-blue-900 font-bold">Quote:</label>
        <input
          {...register("quote")}
          type="text"
          className="shadow-md py-2 px-5 appearance-none border rounded w-full lg:py-2 lg:px-3 text-blue-800 leading-tight focus:outline-none focus:shadow-outline h-20"
          placeholder="Quote"
        ></input>
        <Button type="action">Save</Button>
      </form>
    </>
  );
}

export default AddQuoteForm;
