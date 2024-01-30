import { useDispatch, useSelector } from "react-redux";

import { setStatus } from "./features/status/statusSlice";

import BookList from "./features/books/BookList";
import AddBookForm from "./features/books/AddBookForm";
import Book from "./features/books/Book";
import AddQuoteForm from "./features/quotes/AddQuoteForm";
import EditQuoteForm from "./features/quotes/EditQuoteForm";

import Actionbar from "./ui/Actionbar";
import Searchbar from "./ui/Searchbar";
import Sidebar from "./ui/Sidebar";
import StartActionBar from "./ui/StartActionBar";
import Button from "./ui/Button";

function App() {
  const { status } = useSelector((state) => state.status);
  const dispatch = useDispatch();

  //Handler for 'Add new book' button. On click will open the AddNewBook form.
  function handleAddBook() {
    dispatch(setStatus("addingBook"));
  }

  return (
    <main className="bg-sky-50 font-text h-screen flex flex-col g-0 p-0 items-center overflow-hidden max-h-screen lg:flex-row lg:gap-10 lg:px-10 lg:items-start lg:py-20 xl:gap-20 xl:px-40 xl:py-28">
      <Sidebar>
        <Searchbar />

        <BookList />
        <Button type="action" onClick={handleAddBook}>
          Add new book
        </Button>
      </Sidebar>
      <Actionbar>
        {(status === "start" || status === "searchedBook") && (
          <StartActionBar />
        )}
        {/* Content of the Actionbar depends on the app's status */}
        {status === "addingBook" && <AddBookForm />}
        {status === "addingQuote" && <AddQuoteForm />}
        {status === "savedNewBook" && <Book />}
        {status === "selectedBook" && <Book />}
        {status === "savedNewQuote" && <Book />}
        {status === "editingQuote" && <EditQuoteForm />}
      </Actionbar>
    </main>
  );
}

export default App;
