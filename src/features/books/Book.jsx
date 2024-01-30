import { useDispatch, useSelector } from "react-redux";

import { setStatus } from "../status/statusSlice";

import Button from "../../ui/Button";
import Quote from "../quotes/Quote";
import NoQuote from "../quotes/NoQuote";
import BookDescription from "./BookDescription";

function Book() {
  const selectedBook = useSelector((state) => state.books.selectedBook);
  const dispatch = useDispatch();

  //Handler for Add new quote button
  function handleAddQuote() {
    dispatch(setStatus("addingQuote"));
  }
  //Checking if the selected book has saved quotes
  const noQuotes = selectedBook?.quotes?.length === 0;

  return (
    <div className="flex flex-col h-full shadow-md">
      <BookDescription selectedBook={selectedBook} />
      <div className="flex flex-col gap-2 overflow-y-auto overflow-x-hidden max-h-80">
        {/* If selected book does not have any saved quotes, a message will appear on the screen encouraging the user to start collecting quotes */}
        {/* If selected book does have saved quotes, a list of them will be rendered */}
        {noQuotes ? (
          <NoQuote />
        ) : (
          selectedBook?.quotes?.map((q) => (
            <Quote quote={q} key={Math.ceil(Math.random() * 1000000000)} />
          ))
        )}
      </div>
      <Button type="action" onClick={handleAddQuote}>
        Add new quote
      </Button>
    </div>
  );
}

export default Book;
