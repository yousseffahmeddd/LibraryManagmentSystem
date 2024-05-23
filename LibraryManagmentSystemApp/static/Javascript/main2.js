let bookin = document.getElementById('bookName')
let authorin = document.getElementById('Author')
let catin = document.getElementById('Category')
let desin = document.getElementById('Description')
let ad  =  document.getElementById('addbook')
let up = document.getElementById('updateBook')
let arr=[]
let im = document.getElementById('imgs')
let upIn;
if(localStorage.getItem('item')!=null){
    arr= JSON.parse(localStorage.getItem('item'))
    display1()
}
function setValues(){
let l={
  book: bookin.value,
  author: authorin.value,
  category: catin.value,
  descripsion: desin.value,
  Ima :  `images/${im.files[0].name}`
}
  arr.push(l)
  display1();
  localStorage.setItem('item' , JSON.stringify(arr))
  clearV()
}
function display1(){
  let cartona = ""
  for(let i = 0 ; i<arr.length ;i++ ){
      cartona+=`
      <div class="books">
      <h4>${arr[i].book}</h4>
      <img src="${arr[i].Ima}" alt="">
      <div class="btn">
          <a href="book.html" onclick="display2(${i})" class="bt">View</a>
          <button class="bt" onclick="deleteI(${i})">delete</button>
          <button class="bt" onclick="setUpdate(${i})">Update</button>
      </div>
      </div> 
      `
  }
  document.getElementById('bod').innerHTML=cartona
}
function deleteI(index){
  arr.splice(index,1)
  display1();
  localStorage.setItem('item' , JSON.stringify(arr))
}
function clearV(){
  bookin.value=""
  authorin.value=""
  catin.value=""
  desin.value=""
}
 function display2(index){
  let num=localStorage.setItem('num' ,JSON.stringify(index));
 }

 function setUpdate(indexup){
  upIn = indexup
  ad.classList.add('d-none')
  up.classList.remove('d-none')
  bookin.value = arr[indexup].book
  authorin.value = arr[indexup].author
  catin.value = arr[indexup].category
  desin.value = arr[indexup].descripsion
 }
 function updateBooks(){
  up.classList.add('d-none')
  ad.classList.remove('d-none')
  arr[upIn].book = bookin.value
  arr[upIn].author = authorin.value
  arr[upIn].category = catin.value
  arr[upIn].descripsion = desin.value
  arr[upIn].Ima = `images/${im.files[0].name}`
  display1();
  localStorage.setItem('item' , JSON.stringify(arr))
  clearV();
 }















// document.addEventListener("DOMContentLoaded", () => {
//     var bookin = document.getElementById('book_name');
//     var authorin = document.getElementById('author');
//     var catin = document.getElementById('category');
//     var desin = document.getElementById('description');
//     var form = document.getElementById('book_form'); // Assuming the form has an id 'book_form'
//     var arr = [];
    
//     if (localStorage.getItem('item') != null) {
//       arr = JSON.parse(localStorage.getItem('item'));
//       display();
//     }
  
//     form.addEventListener('submit', setValues);
  
//     function setValues(event) {
//       event.preventDefault(); // Corrected method name
//       let list = {
//         book: bookin.value.trim(),
//         author: authorin.value.trim(),
//         category: catin.value.trim(),
//         description: desin.value.trim() // Fixed typo: 'descripsion' to 'description'
//       };
  
//       if (list.book && list.author && list.category && list.description) { // Check for non-empty values
//         arr.push(list);
//         display();
//         localStorage.setItem('item', JSON.stringify(arr));
//       }
//     }
  
//     function display() {
//       let cartona = "";
//       for (let i = 0; i < arr.length; i++) {
//         cartona += `
//         <div class="books">
//           <img src="images/British-Empire.jpg" alt="">
//           <div class="btn">
//             <a href="" class="bt">View</a>
//             <a href="" class="bt">Borrow</a>
//           </div>
//         </div>`;
//       }
//       document.getElementById('bod').innerHTML = cartona;
//     }
//   });
  