let searchtitle = document.getElementById('searchtitle')
let searchcategory = document.getElementById('searchcategory')
let searchauthor = document.getElementById('searchauthor')

let arr3 = JSON.parse(localStorage.getItem('item'))

// function Searchtitle(){
//     var x = searchtitle.value
//     var cartone = ``
//     for(var i = 0;i<arr3.length;i++){
//         if(arr3[i].book.toLowerCase().includes(x.toLowerCase())){
//             cartone+=`
//             <div class="books">
//             <h4>${arr3[i].book}</h4>
//             <img src="${arr3[i].Ima}" alt="">
//             <div class="btn">
//                 <a href="book.html" onclick="display2(${i})" class="bt">View</a>
//                 <button class="bt" onclick="deleteI(${i})">delete</button>
//                 <button class="bt" onclick="setUpdate(${i})">Update</button>
//             </div>
//             </div>
//             `
//         }
//     }
//     document.getElementById('bod').innerHTML = cartone
// }



function Searchauthor() {
    var x = searchauthor.value// Assuming searchauthor is the ID of your input field
    var cartone = ``;

    // $.ajax({
    //     url: '/book-view/',
    //     type: 'GET',
    //     success: function(data) {
    //         for(var i = 0; i < data.length; i++) {
    //             if(data[i].author.toLowerCase().includes(x.toLowerCase())) {
    //                 cartone += `
    //                 <div class="books">
    //                     <h4>${data[i].title}</h4>
    //                     <img src="${data[i].cover}" alt="">
    //                     <div class="btn">
    //                         <a href="book.html" onclick="display2(${i})" class="bt">View</a>
    //                         <button class="bt" onclick="deleteI(${i})">Delete</button>
    //                         <button class="bt" onclick="setUpdate(${i})">Update</button>
    //                     </div>
    //                 </div>`;
    //             }
    //         }
    //         document.getElementById('bod').innerHTML = cartone;
    //     },
    //     error: function(xhr, status, error) {
    //         console.error('Error:', status, error);
    //     }
    // });
}


function Searchcategory(){
    var x = searchcategory.value
    var cartone = ``
    for(var i = 0;i<arr3.length;i++){
        if(arr3[i].category.toLowerCase().includes(x.toLowerCase())){
            cartone+=`
            <div class="books">
            <h4>${arr3[i].book}</h4>
            <img src="${arr3[i].Ima}" alt="">
            <div class="btn">
                <a href="book.html" onclick="display2(${i})" class="bt">View</a>
                <button class="bt" onclick="deleteI(${i})">delete</button>
                <button class="bt" onclick="setUpdate(${i})">Update</button>
            </div>
            </div> 
            `
        }
    }
    document.getElementById('bod').innerHTML = cartone
}

function Searchtitle() {
    var x = searchtitle.value;
    var cartone = ``;
    // Send AJAX request to Django backend
    $.ajax({
        url: '/search-title/',  // URL to your Django endpoint for searching books by title
        type: 'GET',
        data: { title: x },
        success: function(data) {
            alert("dadddd")
            // Handle success response
            data.forEach(function(book, i) {
                // Build HTML content
                cartone += `
                <div class="books">
                    <h4>${book.title}</h4>
                    <img src="${book.cover}" alt="">
                    <div class="btn">
                        <a href="book.html" onclick="display2(${i})" class="bt">View</a>
                        <button class="bt" onclick="deleteI(${i})">Delete</button>
                        <button class="bt" onclick="setUpdate(${i})">Update</button>
                    </div>
                </div>`;
            });
            // Update the HTML content
            document.getElementById('bod').innerHTML = cartone;
        },
        error: function(xhr, status, error) {
            // Handle error response
            alert("error")
        }
    });
}

