// function hello() {
//     setTimeout(function () {
//         console.log("Hello")
//     }, 3000);
// }


// function hello(callback) {
//     console.log("hello");
//     callback();
// }

// function wait () {
//     console.log("wait")
// }

// function leave() {
//     console.log("Leave")
// }
// function goodbay() {
//     console.log("goodbay");
// }

// hello(leave);


// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }

// function display(result) {
//     console.log(result)
// }

// function displayPage(result) {
//     document.getElementById("myH1").textContent = result;
// }

// sum(displayPage, 1, 5);

// function showStudent(name, course) {
//     console.log("Name: " + name)
//     console.log("Course: " + course)
// }

// function getStudent(callback) {
//     let name = "Erick"
//     let course = "BSIT"
//     callback(name, course)
// }

// getStudent(showStudent)


// function barrwer (name, callback) {
//     console.log("Erick Gozo Barrow the book" + name);
//     callback(name);
// }

// function bookbarrowed (name){
//     console.log("You successfully borrowed " + name);
// }

// barrwer("Harry Potter", bookbarrowed);`

// function borrowed (bookname) {
//     console.log("Borrowing: " + bookname);
// }

// function bookbarrowed(bookname, callback) {
//     console.log("You successfully borrowed the book: " + bookname);
//     callback();
// }

// function thankyou(){
//     console.log("Enjoy Reading")
// }

// borrowed("Marvel");
// bookbarrowed("Marvel", thankyou);

// function car (name, car_name, callback) {
//     console.log(name + " using the car " + car_name);
//     callback(name, car_name)
// }

// function usecar(name, car_name){
//     console.log(name + " is Succesfully use the car " + car_name);
// }

// car("Erick", "Honda", usecar);

// function house (name, callback) {
//     console.log(name + " is inside the House");
//     callback(name)
// }

// function out (name) {
//     console.log(name + " is going out the House");
// }


// house("Erick", out)


// function car (name, car_name, callback) {
//     console.log(name + " is using his car " + car_name);
//     callback(name, car_name, injoy)
// }

// function start (name, car_name, callback) {
//     console.log(name + " is strating his " + car_name + "vehicle")
//     callback()
// }

// function injoy () {
//     console.log("Enjoy the ride");
// }

// car("Erick", "Hoda", start)

function car (name, car_name) {
    console.log(name + " is using his car " + car_name);
}

function start (name, car_name, callback) {
    console.log(name + " is strating his " + car_name + "vehicle")
    callback()
}

function injoy () {
    console.log("Enjoy the ride");
}

car("Erick", "Hoda");
start("Erick", "Honda", injoy)