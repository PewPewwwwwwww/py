// /users/1
// /posts/1/comments

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => response.json())
//   .then((data) => {
//     const {
//       name,
//       username,
//       email,
//       address: { street, suite, city, zipcode },
//     } = data;

//     console.log("Name: ", name);
//     console.log("Username: ", username);
//     console.log("Email: ", email);
//     console.log("Street: ", street);
//     console.log("Suite: ", suite);
//     console.log("City: ", city);
//     console.log("Zipcode: ", zipcode);
//   })
//   .catch((error) => {
//     console.log("Errooooor: ", error);
//   });

// class Vehicle {
//   // parent class
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }

//   start() {
//     console.log(${this.brand} from parent class);
//   }
// }

// class Car extends Vehicle {
//   // child class
//   start() {
//     console.log(${this.brand} from child class);
//   }
// }

// class Motorcycle extends Vehicle {
//   // child class
//   start() {
//     console.log(${this.brand} from child class);
//   }
// }

// const car = new Car("Toyota", "Red");
// const motorcycle = new Motorcycle("Honda", "Beat");

// const vehicles = [car, motorcycle];

// for (const vehicle of vehicles) {
//   vehicle.start();
// }

// console.log("Start");

// const request = fetch("https://jsonplaceholder.typicode.com/posts/1");

// console.log(request); // Promise { <pending> }

// request
//   .then((response) => {
//     console.log("FULFILLED");
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Data:", data);
//   })
//   .catch((error) => {
//     console.log("REJECTED");
//     console.log("Error:", error);
//   });

// console.log("End");

// async function getPosts() {
//   let status = "PENDING";

//   console.log("Status:", status);
//   setTimeout(() => {
//     status;
//   }, 3000);

//   try {
//     const responseasd = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1",
//     );

//     const data = await response.json();

//     status = "FULFILLED";
//     console.log("Status:", status);
//     console.log("Data:", data);
//   } catch (error) {
//     status = "REJECTED";
//     console.log("Status:", status);
//     console.log("Error:", error);
//   }
// }

// getPosts();

// async function getUsers() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1/comments",
//     );
//     console.log("PENDING...");
//     const data = await response.json();
//     console.log("FULFILLED");
//     data.forEach((item) => {
//       const { name, email, body } = item;

//       console.log("Name: ", name);
//       console.log("Email: ", email);
//       console.log("Body: ", body);
//       console.log("==========================");
//     });
//   } catch (error) {
//     console.log("Error:", error);
//     console.log("REJECTED");
//   }
// }

// getUsers();


// async function LogginUser() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

//         console.log("PENDING....")
//         const data = await response.json();
//         console.log("FULLFILLED....")

//         data.forEach((item) => {
//             const {username, email,  address} = item

//             console.log("username", username);
//             console.log("email", email);
//             console.log("address", address.city);
//         });
        
//     } catch (error) {
//         console.log("Error: ", error)
//         console.log("REJECTED...")
//     }
    
// }

// LogginUser()

// console.log("Logging in");
// setTimeout(() => {
//   console.log("Logged In");
//   fetch("https://jsonplaceholder.typicode.com/users/1");
// }, 3000);
// console.log("Waiting for the server to login...");

// async function LogginUser() {
//   try {
//     console.log("Logging in...");

//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

//     console.log("PENDING....");
//     const data = await response.json();
//     console.log("FULLFILLED....");

//     const { username, email, address } = data;

//     console.log("Waiting for the server to login...");

//     await new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Logged IN...");
//         resolve();
//       }, 3000);
//     });

//     await new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("=======================");
//         console.log("username: ", username);
//         console.log("email: ", email);
//         console.log("address: ", address.city);
//         console.log("=======================");
//         resolve();
//       }, 1000);
//     });
//   } catch (error) {
//     console.log("Error: ", error);
//     console.log("REJECTED...");
//   }
// }

// LogginUser();


async function LogginUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        console.log("PENDING....");
        const data = await response.json();
        console.log("FULLFILLED....");

        const {username, email,  address} = data

        console.log("Loging in....");
        setTimeout(() => {
        console.log("Logged IN...");
        }, 3000);

        setTimeout(() => {
        console.log("=======================")
        console.log("username: ", username);
        console.log("email: ", email);
        console.log("address: ", address.city);
        console.log("=======================")

        }, 4000)

        console.log("Waiting for the server to login...");
        
        
    } catch (error) {
        console.log("Error: ", error);
        console.log("REJECTED...");
    }
    
}

LogginUser()
