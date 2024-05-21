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
localStorage.setItem('books_links', JSON.stringify(books_links));

function Search(event) {

    if (event.key === 'Enter'){
        event.preventDefault();
        let txt = document.getElementById('Search').value;

        // Get the list of books from local storage
        let list_book = JSON.parse(localStorage.getItem('books_links')) || [];

        for (let i = 0; i < list_book.length; i++) {
            if (list_book[i].Book_name === txt) {
                window.open(list_book[i].link,"_self");
                return;
            }
        }
        alert("Book not found!");
    }
}
