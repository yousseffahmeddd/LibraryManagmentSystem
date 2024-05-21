let btn = document.getElementById('arrow');
window.onscroll = function() {
  if (window.scrollY >= 500) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}


btn.onclick= function(){
  scroll({
    left:0,
    top:0,
    behavior:"smooth"
  })
}
// let addbtn=document.getElementById('addbtn');
//  let add=document.getElementById('add');
//  addbtn.onclick=function(){
//    add.style.display='block';
// }
// document.addEventListener('DOMContentLoaded', function() {
//   var addLink = document.getElementById('addLink');
//   var addDiv = document.getElementById('add');

//   addLink.addEventListener('click', function(event) {
//       event.preventDefault(); // Prevent the default behavior of the link
//       addDiv.style.display = 'block'; // Display the 'add' div
//   });
// });

let add=document.getElementById('add');
function toggle(){
  if (add.style.display=='none') {
    add.style.display='block';
  } else {
    add.style.display='none';

  }
}
let view=document.getElementById('view_book');
function show(){
  if (view.style.display=='none') {
    view.style.display='block';
  } else {
    view.style.display='none';

  }
}

let borrow=document.getElementById('borrow');
function show_borrow(){
  if (view.style.display=='none') {
    view.style.display='block';
  } else {
    view.style.display='none';

  }
}