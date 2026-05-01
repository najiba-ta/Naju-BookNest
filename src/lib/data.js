export async function getBooks() {
  const res = await fetch("http://localhost:3000/book.json", {
    cache: "no-store",
  });

  return res.json();
}
export async function getAllBooks() {
  const res = await fetch("http://localhost:3000/book.json", {
    cache: "no-store",
  });

  return res.json();
}

export async function getBookById(id) {
  const res = await fetch("http://localhost:3000/book.json", {
    cache: "no-store",
  });

  const data = await res.json();

  return data.find((book) => String(book.id) === String(id));
}