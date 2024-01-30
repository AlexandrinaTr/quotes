import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { saveNewBook } from "./booksSlice";
import { setStatus } from "../status/statusSlice";

import Button from "../../ui/Button";

function AddBookForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  //Handler for submitting the form
  function onSubmit(newBook) {
    //Assigning a unique id and an empty quotes array
    newBook.id = Math.ceil(Math.random() * 10000000000).toString();
    newBook.quotes = [];
    //Calling an async function to POST the new book object on JSON server
    dispatch(saveNewBook(newBook));
    //Updating the app's status
    dispatch(setStatus("savedNewBook"));
  }

  //Handler for closing button
  function handleClose() {
    dispatch(setStatus("start"));
  }
  return (
    <>
      <button
        onClick={handleClose}
        className="text-2xl font-extrabold absolute top-6 right-10 text-blue-900 transition-all duration-75 ease-out hover:text-red-600 hover:scale-150 lg:top-12 xl:right-44"
      >
        &times;
      </button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-8 gap-2 shadow-md rounded-sm mx-5 my-3 h-80 bg-indigo-50 text-sm lg:text-md lg:my-10 lg:h-96 xl:mx-40"
      >
        <label className="block text-blue-900 font-bold">Title:</label>
        <input
          {...register("title")}
          placeholder="Book's title"
          required
          type="text"
          className="shadow-md py-2 px-5 appearance-none border rounded w-full text-blue-800 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
        <label className="block font-bold text-blue-900 ">Author:</label>
        <input
          {...register("author")}
          placeholder="Book's author"
          type="text"
          className="shadow-md py-2 px-5 appearance-none border rounded w-full lg:py-2 lg:px-3 text-blue-800 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
        <label className="block text-blue-900 font-bold ">Your rating:</label>
        <select
          {...register("rating")}
          placeholder="5 stars"
          className="shadow-md py-2 px-5  border rounded w-full lg:py-2 lg:px-3 text-blue-800 leading-tight focus:outline-none focus:shadow-outline mb-5"
        >
          {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>{`${num} stars`}</option>
          ))}
        </select>
        <Button type="action">Save book</Button>
      </form>
    </>
  );
}

export default AddBookForm;
