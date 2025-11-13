import React, { useState } from "react";
import Book from "./Book";

function BooksList() {
  const booksarr = [
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "1984", author: "George Orwell" },
    { title: "The Little Prince", author: "Antoine de Saint-Exupéry" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
  ];

  const [arr, SetArr] = useState(booksarr);


  //del function:
  const delbook = (title) => {
    SetArr(arr.filter((item) => item.title != title));
  };

  
  return (
    <div>
      {arr.map((item, index) => {
        return (
          <Book
            key={index}
            title={item.title}
            author={item.author}
            delfunction={delbook}
          />
        );
      })}
    </div>
  );
}

export default BooksList;
