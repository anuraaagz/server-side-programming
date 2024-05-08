var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function displayReadingStatus(library) {
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    const readingStatus = book.readingStatus ? "already read" : "not read yet";
    console.log(
      `Title: ${book.title}, Author: ${book.author}, Reading Status: ${readingStatus}`
    );
  }
}
displayReadingStatus(library);
