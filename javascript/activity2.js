const PersonInfo = [
    {
        id: 1,
        Location: "Maasin City",
        Name: "Erick Gozo",
        PhoneNumber: 9922450732,
        Email: "gozoerick@gamil.com",
        registered: true,
    },

    {
        id: 2,
        Location: "Maasin City",
        Name: "Carlos Mendoza",
        PhoneNumber: 9922450732,
        Email: "gozoerick@gamil.com",
        registered: false,
    },

    {
        id: 3,
        Location: "Maasin City",
        Name: "Angela Reyes",
        PhoneNumber: 9922450732,
        Email: "gozoerick@gamil.com",
        registered: true,
    },

    {
        id: 4,
        Location: "Maasin City",
        Name: "Joshua Ramirez",
        PhoneNumber: 9922450732,
        Email: "gozoerick@gamil.com",
        registered: false,
    },

    {
        id: 5,
        Location: "Maasin City",
        Name: "Dodong",
        PhoneNumber: 9922450732,
        Email: "gozoerick@gamil.com",
        registered: false,
    },
]

let filterEach = PersonInfo.filter(PersonInfo => PersonInfo.Name === 1)

let filtercount = filterEach.length;

let registeredStudent = PersonInfo.filter(PersonInfo => PersonInfo.registered === true).length;
let NotregisteredStudent = PersonInfo.filter(PersonInfo => PersonInfo.registered === false).length;

filterEach.forEach(PersonInfo => {
    const {id, Location, Name, PhoneNumber, Email} = PersonInfo

    console.log("ID: ", id);
    console.log("Location: ", Location);
    console.log("Name: ", Name);
    console.log("PhoneNumber: ", PhoneNumber);
    console.log("Email: ", Email);
    console.log("============================");
});

console.log("");

console.log("All of them: ", filtercount);

console.log("Registered Student: ", registeredStudent);
console.log("Not Registered Student: ", NotregisteredStudent);

console.log("");


async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        let eachUser = data.filter(user => user.id === 1 || user.id === 2);


        eachUser.forEach(user => {
            const {name, email, address} = user;

            console.log("Name: ", name);
            console.log("email: ", email);
            console.log("address: ", address.city);
            console.log("============================")
        });
        
    } catch (error) {
        console.log("Error: ", Error);
    }
}

getUser()


