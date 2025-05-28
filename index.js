// let table = document.body.firstElementChild;

// // Красим главную диагональ
// for (let i = 0; i < table.rows.length; i++) {
//     let row = table.rows[i];
//     row.cells[i].style.backgroundColor = 'red';
// }

// // Красим обратную диагональ
// for (let i = 0; i < table.rows.length; i++) {
//     let row = table.rows[i];
//     row.cells[row.cells.length - 1 - i].style.backgroundColor = 'blue';
// }

// // Красим нижнюю строку
// let lastRow = table.rows[table.rows.length - 1];
// for (let i = 0; i < lastRow.cells.length; i++) {
//     lastRow.cells[i].style.backgroundColor = 'green';
// }


// let a=document.getElementById("smth")
// a.style.color="red"

// let b=document.querySelector(".qwerty")
// b.style.color="green"

// let c=document.querySelectorAll("li")
// console.log(c);


// let tab=document.getElementById("age-table")
// tab.getElementsByTagName("label")
// tab.querySelector("td")

// let a=document.getElementsByTagName("li")
// for(let li of a){
//     let title=li.textContent
//     console.log(title);
    
// }



let input=document.getElementById("myInput")
console.log(input.getAttribute("type"))
input.setAttribute("value",'hush')
console.log(input.getAttribute('value'));




