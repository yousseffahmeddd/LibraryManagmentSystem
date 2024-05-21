var bookName = document.getElementById('book_name').value;
var author = document.getElementById('author').value;
var category = document.getElementById('category').value;
var description = document.getElementById('description').value;

// Create new book object
var newBook = {
    Book_name: bookName,
    Author: author,
    Category: category,
    Description: description
};
var new_book=JSON.stringify(newBook);
localStorage.setItem('newBook', new_book);