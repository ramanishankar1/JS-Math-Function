
var sub=document.getElementById('submit');
var box=document.querySelector('p')
console.log(box);
 //console.log(sub);
function  submit(){

    let red=Math.floor(Math.random()*256)
    let blue=Math.floor(Math.random()*256)
    let green=Math.floor(Math.random()*256)
let displayColor="RGB("+red+","+green+","+blue+")"
// console.log(displayColor);
box.innerText=displayColor;


}



sub.addEventListener('click',submit)


// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG2E);
// console.log(Math.LOG10E);
// var x = 4.8;
// console.log(Math.round(x));
// var x1 = 4.8;
// console.log(Math.ceil(x1));
// var x = 4.8;
// console.log(Math.floor(x));
// var x = 4.8;
// console.log(Math.trunc(x));
// console.log(Math.pow(7, 8));
// console.log(Math.sign(-2));
// console.log(Math.abs(-1));
// console.log(Math.sin(90 * Math.PI / 180));
// console.log(Math.cos(0));
// console.log(Math.min(2, 50, 85, 400, 120, -8));
// console.log(Math.max(2, 50, 85, 400, 120, -8));
// console.log(Math.sqrt(729));
// console.log(Math.cbrt(125));
// console.log(Math.random());
// console.log(Math.log(1));
// console.log(Math.log(2));
// console.log(Math.log(10));
// console.log(Math.log2(3));
// console.log(Math.log10(2));
// console.log(Math.acos(-1));
// console.log(Math.acosh(1));
// console.log(Math.asin(1));
 var n="Ramani"
 console.log("Hi" +n +"How are you");