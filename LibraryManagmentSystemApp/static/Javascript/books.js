var books=[
{
    Book_name:"You Shouldn't Be Here",
    Author: "Lauren Thoman",
    Category:"Crime",
    Description:"crime book",

},
{
    Book_name:"Middle of The Night",
    Author:"Riley Sager",
    Category:"Crime",
    Description:"crime book"
},
{
    Book_name:"The British Empire: An Enthralling Guide to the Rise and Fall of the World’s Largest Superpower in History",
    Author:"Billy Wellman",
    Category:"History",
    Description:"history book"
},
{
    Book_name:"DK Smithsonian: American History: A Visual Encyclopedi",
    Author:"DK",
    Category:"History",
    Description:"history book"
},
{
    Book_name:"Germany in the World: A Global History, 1500-2000",
    Author:"David Blackbourn",
    Category:"Novels ",
    Description:"novels book"
},
{
    Book_name:"In the Lonely Hours",
    Author:"Shannon Morgan",
    Category:"Novels",
    Description:"novels book"
},
{
    Book_name:"Good Bye Russia",
    Author:"Fiona Maddocks",
    Category:"New Novels",
    Description:"novels book"
},
{
    Book_name:"Forteen Days",
    Author:"The Authors Guild",
    Category:"New Novels",
    Description:"novels book"
}
];
var books_links=[
    {
        Book_name:"You Shouldn't Be Here",
        link :"YSBH.html"
    },
    {
        Book_name:"Middle of The Night",
        link:"MOTN.html"
    },
    {
        Book_name:"The British Empire: An Enthralling Guide to the Rise and Fall of the World’s Largest Superpower in History",
        link:"British-Empire.html"
    },
    {
        Book_name:"DK Smithsonian: American History: A Visual Encyclopedi",
        link:"American-history.html"
    },
    {
        Book_name:"Germany in the World: A Global History, 1500-2000",
        link:"Germany-in-the-world.html"
    },
    {
        Book_name:"In the Lonely Hours",
        link:"In-the-lonely-hours.html"
    },
    {
        Book_name:"Good Bye Russia",
        link:"goodbyerussia.html"
    },
    {
        Book_name:"Forteen Days",
        link:"40days.html"
    }
];

var books_links = JSON.parse(localStorage.getItem('books_links')) || [] ;
var books = JSON.parse(localStorage.getItem('books')) || [];


function add_book(event) {
    event.preventDefault();
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
    
    // Append the new book to the existing books array
    books.push(newBook);

    // Store the updated books array in local storage
    localStorage.setItem('books', JSON.stringify(books));
}
