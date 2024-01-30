//API for GETing the data from the JSON server. It is called on mount in the booksSlice
export async function getBooks() {
  const response = await fetch("http://localhost:8000/books");
  const data = await response.json();
  return data;
}
