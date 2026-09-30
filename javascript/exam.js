// async function Getdata() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");

//         const data = await response.json();

//         const filterData = data.filter(datas => datas.id === 1)

//         // const update = data.map(data => ({
//         //     id: data.id,
//         //     name: data.name,
//         //     email: data.email
//         // }));

//         filterData.forEach(datas => {
//             const {id, name, email} = datas;
            
//             console.log("====================");
//             console.log("id: ", id);
//             console.log("Name: ", name);
//             console.log("email", email);
//         });



//     } catch (error) {
//         console.log("Error", error);
//     }
// }

// Getdata()


// const Students = [
//     {
//         name: "Erick Gozo",
//         Age: 20,
//         Course: "BSIT",
//         Enrolled: true,
//         YearLevel: 4,
//     },

//     {
//         name: "Artemis Morada",
//         Age: 22,
//         Course: "BSN",
//         Enrolled: true,
//         YearLevel: 3,
//     },

//     {
//         name: "PrinceAj Orais",
//         Age: 29,
//         Course: "FPST",
//         Enrolled: true,
//         YearLevel: 2,
//     },

//     {
//         name: "Kyle Basco",
//         Age: 25,
//         Course: "BSIT",
//         Enrolled: true,
//         YearLevel: 4,
//     },

//     {
//         name: "Mheryk Ivan Benal",
//         Age: 19,
//         Course: "BSBA",
//         Enrolled: false,
//         YearLevel: 2,
//     },
// ];

// Students.push (
//     {
//         name: "Ryan Relos",
//         Age: 33,
//         Course: "BSA",
//         Enrolled: false,
//         YearLevel: 2,
//     }
// );

// Students.unshift (
//     {
//         name: "Lebron James",
//         Age: 33,
//         Course: "BSA",
//         Enrolled: false,
//         YearLevel: 2,
//     }
// );


// let StudentData = Students.filter(Student => Student.name);

// let YesEnrolled = Students.filter(Student => Student.Enrolled === true).length;
// let NotEnrolled = Students.filter(Student => Student.Enrolled === false).length;
// StudentData.forEach(Strudet => {
//     const {name, Age, Course, Enrolled, YearLevel} = Strudet;
    
//     console.log("")

//     console.log("name: ", name);
//     console.log("Age: ", Age);
//     console.log("Course: ", Course);
//     console.log("Enrolled", Enrolled);
//     console.log("YearLevel", YearLevel);
// });

// console.log("")

// console.log("Enrolled: ", YesEnrolled);
// console.log("NotEnrolled: ", NotEnrolled);


async function GetInfo() {
    const CitizenInfo = [
        {
            id: 1,
            Name: "Erick",
            Age: 20,
            Enrolled: true,
            YearLevel: 4,
        },

        {
            id: 2,
            Name: "Erick",
            Age: 20,
            Enrolled: true,
            YearLevel: 4,
        },

        {
            id: 3,
            Name: "Erick",
            Age: 20,
            Enrolled: true,
            YearLevel: 4,
        },

        {
            id: 4,
            Name: "Erick",
            Age: 20,
            Enrolled: true,
            YearLevel: 4,
        },
    ];

    let filterInfo = CitizenInfo.filter(CitizenInfo => CitizenInfo.id === 1);

    filterInfo.forEach(CitizenInfo => {
        const {id, Name, Age, Enrolled, YearLevel} = CitizenInfo
        console.log("")
        console.log(`id: ${id}`);
        console.log(`Name: ${Name}`);
        console.log(`Age: ${Age}`);
        console.log("Enrolled: ", Enrolled);
        console.log(`YearLevel: ${YearLevel}`);

    });
}

GetInfo()