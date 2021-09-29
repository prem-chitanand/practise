console.log("hey");


setInterval(() => {
    let date= Date();
    console.log(date);
     document.getElementById('date1').innerHTML=date;

}, 1000);

    document.getElementById('stop').onclick=()=>{
       
    document.getElementById('date1').innerHTML="";


    }
let person={
    name:"prem",
    age:22,
    street:"22 venkatesh nagar"
}
console.log(person.name);
console.log(person.age);
let number=document.getElementById('numberValue')
let html="";
html+=` name:${person.name} <br>
age: ${person.age}<br>
street: ${person.street}`
document.getElementById('date').innerHTML=html;