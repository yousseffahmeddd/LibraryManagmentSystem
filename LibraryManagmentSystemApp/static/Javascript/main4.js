let arr=[]
if(localStorage.getItem('item')!=null){
    arr= JSON.parse(localStorage.getItem('item'))
    display1()
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
          <button class="bt">borrow</button>
      </div>
      </div> 
      `
  }
  document.getElementById('bod1').innerHTML=cartona
}
 function display2(index){
  let num=localStorage.setItem('num' ,JSON.stringify(index));
 }