import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/books/booksSlice";
import statusSlice from "./features/status/statusSlice";
// import thunk from "redux-thunk";
const store = configureStore({
  reducer: {
    books: booksReducer,
    status: statusSlice,
  },
});
export default store;
