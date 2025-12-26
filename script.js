//     const city = "Mathura";
//     let age = 21;




//     let x= 10;
//      x =15;

//     //console.log(y);
//     let y=5;

//     const ob= {1:"ram", 2:"shyam"};
    

// console.log(null + 1); //1
// console.log("5" + 3); //53
// console.log("5" - 3); // 2
// console.log(true); //true


// console.log(typeof []);
// console.log(typeof null);
// console.log(typeof 123n);

// console.log(isEmpty("undefined"));


// function isEmpty(value)
// {
//     if(value==null || value == undefined || value =="") return true ;
//     else return false;
// }

// console.log("10" + 1); // 101
// console.log("10" - 1);  //9
// console.log(true + false);  // 1
// console.log(!!"Sheryians"); // true


// console.log(Calc(10,5,"+"));

// //building a Calc 

// function Calc(a , b, c )
// {
//     if(c==="+") return a+b;
//     else if (c==="-") return a-b;
//     else if (c==="*") return a*b;
//     else if (c==="/") return a/b;
//     else if (c==="%") return a%b;    
// }


// for (let char of "Sheryians") {
// console.log(char);
// if(char==="y") break;
// }


// let user = { name: "Harsh", age: 26 };
// for (let x in user) {
// console.log(x, user[x]);
// }


// let nums = [10, 20, 30];
// nums.forEach((num) => {
// console.log(num);
// });




// let s = "String";
// //Print 1 to 10 using for
// for(let i=5; i>=0;i--)
// {
//     console.log(s[i]);
// }



// function outer()
// {
//     let count = 0;
//     return function ()
//     {
//         count++;
//         console.log(count);
//     };
// }
// let c=outer();
// c();
// c();


// let b = document.querySelector("body");
// b.style.color="red";
// b.style.backgroundColor="black";


// let a=document.createElement("a");
// a.textContent="Google";
// a.setAttribute("href","https://www.google.com");
// a.style.color="red";
// document.body.prepend(a);








// let ut=document.createElement("ul");
// let li1=document.createElement("li");
// let li2=document.createElement("li");
// let li3=document.createElement("li");
// let li4=document.createElement("li");
// let li5=document.createElement("li");

// li1.textContent="1poke";
// li2.textContent="2poke";
// li3.textContent="3poke";
// li4.textContent="4poke";
// li5.textContent="5poke";

// document.body.append(ut);

// document.querySelector("ul").append(li1);
// document.querySelector("ul").append(li2);
// document.querySelector("ul").append(li3);
// document.querySelector("ul").append(li4);
// document.querySelector("ul").append(li5);


// let x=document.querySelectorAll("li");
// for(let i=0; i<=x.length; i+=2)
// {
//     x[i].style.color="red";
// }







// let s =document.querySelectorAll("li");

// // for(let x in s)
// // {
// //     console.log(x);
// // }

// s.forEach(val=>console.log(val.textContent));



// let p = document.querySelector("p").innerHTML="<b>updated</b> by javaScript";

// let i=document.querySelector("img").getAttribute("src");
// console.log(i);




// let x = document.querySelectorAll("p");
// x.forEach(val=>val.style.fontSize="18px");



// EVENT AND EVENT HANDLING 

// let h = document.querySelector("h1");

// h.addEventListener("click", funcetion(){
//     h.style.color="black"});
// h.addEventListener("dblclick", ChangeColor);


// function ChangeColor() {
//     h.classList.add("Ccolor");
// }



// let inp = document.querySelector("select");
// let h1= document.querySelector("h3");
// inp.addEventListener("change",function(data)
// {
//     h1.textContent=`${data.target.value} Selected`;
//     console.log(data.target.value);
// });

let inputs = document.querySelectorAll("form input[type='text']");
let button = document.querySelector("#button");

button.addEventListener("click", function (e) {
    e.preventDefault();
    toba();
});

function toba() {
    let body = document.body;

    let main = document.createElement("div");
    main.id="main";

    let Profile = document.createElement("div");
    Profile.id="Profile";

    let img = document.createElement("img");
    img.src = inputs[0].value;

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;

    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;

    let p = document.createElement("p");
    p.textContent = inputs[3].value;

    Profile.appendChild(img);
    main.append(Profile, h3, h5, p);
    body.appendChild(main);
}
