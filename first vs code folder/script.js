// let x = 6
// let y = 5
// z = x+y
// y+=x
// x+=y
// console.log(y);

// let x = 6
// let y = 5

// z = (x+y)/5
// console.log(z);

// let car = ""
// console.log(car);

// let logName = 1
// let see = logName == 1 ? "login" : "logout"
// console.log(see);

// let user 
// alert(user ?? "jitender sharma")

// let counter = 1
// while (counter <= 10) {
//     document.write(" right ")
//     counter++
// }


// let counter = 10
// while (counter >= 1) {
//     document.write(" right ")
//     counter = counter - 2 
// }


// let counter = 1
// let sum = 0  
// while (counter<=10) {
//     if (counter % 2 == 0) {
//         sum = sum + counter  // counter is 0 and sum is 2
//     }
//     counter++  
// }
// document.write(sum)  
// // document.write(counter)
// // console.log(counter);


// let sum = 0     
// for (let i = 1; i <= 10; i++) {         // I develop this code i self
// if (i%2==0) {
//     sum = sum + i   
//     // console.log(i);
// }
// }     
// console.log(sum);     


// let type = 4
// console.log(type);
// console.log(typeof type);

// let convert = String(type)
// console.log(typeof convert);

// let name1 = "Jitender"
// let name2 = " sharma"
// // console.log(name1 +  name2);
// console.log(name1.concat(name2));

// let name1 = ["jitender" , "sharma" , "jeetu" , "sharma"]
// name1.forEach(myfunc)
// function myfunc(firstfunc) {
//     console.log(firstfunc);
// }

// Table 2 by forloop


// for (let i = 1; i <= 10; i++) {  
//     console.log(`2 x ${i} = ${2*i}`);
// }


// function multiple(num) {
//     for (let i = 1; i <= 10; i++) {
//         document.write(`${num} x ${i} = ${num*i}`);
//         document.write("<br>")
//     }
// }
// multiple(2)
// document.write("<br>")
// multiple(3)

// let add = 5+6
// document.write(add)

// function add(a,b) {
//     document.write(a+b)
// } 
// add(5,6)

// function add(a,b) {
//     return a+b
// } 
// let c = add(5,6)
// document.write(c)


// local or Global variable

// function add() {
//      let result = 33

//      console.log(result);
     
// }
    
// add()

// function add() {
//     console.log("heelo");
// }

// setTimeout(add,3000)


// let add = function () {
//     console.log("heelo");
// }

// setTimeout(add,3000)


// setTimeout(function () {
//     console.log("heelo");
// },3000)

// let name = {
//     firstName : "Jitender",
//     LastName : "sharma"
// }
// delete name.firstName 
// console.log(name);

// let type = Math.round(4.7)     // give the around number 
// console.log(Math.round(4.6));  // give the around number 
// console.log(Math.round(5.5));  // give the around number 
// console.log(Math.round(5.6));  // give the around number 
// console.log(Math.pow(5,2));    // give the power number 
// console.log(Math.sqrt(100));   // give the square number 
// console.log(Math.floor(5.6));  // give the lowest number 
// console.log(Math.ceil(5.2));   // give the highest number
// console.log(Math.min(5,7,8,2,0,0,1,6,8,7,9));   // give the minimum number
// console.log(Math.max(5,7,8,2,0,0,1,6,8,7,9));   // give the maximum number

//Random number

// let x = Math.floor(Math.random() * 10)
// console.log(x);

// let x = Math.floor(Math.random() * 10) +1
// console.log(x);

// let x = Math.floor(Math.random() * (25-15)) +15
// console.log(x);

// function name(min,max) {
//     let x = Math.floor(Math.random() * (max-min)) + min
//     return x 
// }
// console.log(name(10,20));  

// function name(min,max) {
//     let x = Math.floor(Math.random() * (max-min) + 1) + min
//     return x 
// }
// console.log(name(10,20));  

