import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IoSearchSharp } from "react-icons/io5";

import { setQuery } from "../features/books/booksSlice";

function Searchbar() {
  const dispatch = useDispatch();

  //Setting the state for the query user could type in the search bar
  const [search, setSearch] = useState("");

  //Setting the query state depending on what user types in
  useEffect(
    function () {
      dispatch(setQuery(search));
    },
    [search, dispatch]
  );

  return (
    <div className="relative flex items-center mx-5 my-3 shadow-md xl:mx-3">
      <input
        className="text-blue-900 py-2 px-5 placeholder-indigo-300 rounded-sm border-none ring-2 ring-blue-100 focus:ring-blue-600 focus:ring-2 focus:border-blue-900 focus:outline-none basis-full pl-10"
        type="text"
        placeholder="Title you are searching for..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
      <IoSearchSharp
        className="absolute rounded-sm ml-3 cursor-pointer"
        style={{ color: "#1e3a8a", fontSize: "1.25rem" }}
      />
    </div>
  );
}

export default Searchbar;
