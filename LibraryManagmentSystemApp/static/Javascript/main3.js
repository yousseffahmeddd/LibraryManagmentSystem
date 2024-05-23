let arr2 = JSON.parse(localStorage.getItem('item'))
let num1 = JSON.parse(localStorage.getItem('num'))
display3(num1)


function display3(n){
    let cartona2 = `
    <a href="">${arr2[n].author}</a>
    `
    document.getElementById('by').innerHTML=cartona2
    let cartona3 =`
    ${arr2[n].descripsion}
    `
    document.getElementById('desc').innerHTML=cartona3
    let cartona4 =`
    ${arr2[n].book}
    `
    document.getElementById('ma').innerHTML=cartona4
    let cartona5 =`
    Publisher: ${arr2[n].author}
    `
    document.getElementById('pub').innerHTML=cartona5
    let cartona6 = `<img src="${arr2[n].Ima}" alt="">`
    document.getElementById('pre').innerHTML = cartona6
   }