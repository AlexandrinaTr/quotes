import { createSlice } from "@reduxjs/toolkit";

import { getBooks as getBooksAPI } from "../../services/booksAPI";

const initialState = {
  books: await getBooksAPI(),
  selectedBook: null,
  query: "",
  editQuoteId: "",
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    saveNewBook(state, action) {
      state.books = [action.payload, ...state.books];
      state.selectedBook = { ...action.payload };
      state.query = "";
      state.editQuoteId = "";
    },
    selectBook(state, action) {
      state.selectedBook = action.payload;
      state.query = "";
      state.editQuoteId = "";
    },
    saveNewQuote(state, action) {
      state.books = [
        action.payload,
        ...state.books.filter((book) => book.id !== action.payload.id),
      ];
      state.selectedBook = state.books
        .filter((book) => book.id === action.payload.id)
        .at(0);
      state.editQuoteId = "";
      state.query = "";
    },
    deleteBook(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
      state.selectedBook = null;
      state.query = "";
      state.editQuoteId = "";
    },
    closeBook(state, action) {
      state.selectedBook = null;
      state.query = "";
      state.editQuoteId = "";
    },
    deleteQuote(state, action) {
      state.books = [
        action.payload,
        ...state.books.filter((book) => book.id !== action.payload.id),
      ];
      state.selectedBook = state.books
        .filter((book) => book.id === action.payload.id)
        .at(0);
      state.editQuoteId = "";
      state.query = "";
    },
    setQuery(state, action) {
      state.query = "";
      state.query = action.payload;
      state.editQuoteId = "";
    },
    setEditQuoteId(state, action) {
      state.editQuoteId = action.payload;
      state.query = "";
    },
  },
});

export function saveNewBook(newBook) {
  if (!newBook) return;
  return async function (dispatch) {
    const res = await fetch("http://localhost:8000/books", {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    dispatch({ type: "books/saveNewBook", payload: data });
  };
}

export function saveNewQuote(updatedQuotes, id) {
  if (!updatedQuotes) return;
  return async function (dispatch) {
    const res = await fetch(`http://localhost:8000/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        quotes: updatedQuotes,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await res.json();
    dispatch({ type: "books/saveNewQuote", payload: data });
  };
}

export function deleteBook(id) {
  if (!id) return;
  return async function (dispatch) {
    const res = await fetch(`http://localhost:8000/books/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    dispatch({ type: "books/deleteBook", payload: data });
  };
}

export function deleteQuote(updatedQuotes, id) {
  if (!updatedQuotes || !id) return;
  return async function (dispatch) {
    const res = await fetch(`http://localhost:8000/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        quotes: updatedQuotes,
      }),
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    dispatch({ type: "books/deleteQuote", payload: data });
  };
}

export const getBooks = (state) => state.books;
export const { selectBook, closeBook, setQuery, setEditQuoteId } =
  booksSlice.actions;

export default booksSlice.reducer;
