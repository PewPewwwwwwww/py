const StudentInfo = [
    {
        id: 1,
        name: "Erick Gozo",
        age: 20,
        address: "Lib-og Maasin City",
        enrolled: true,
        yearlevel: 3,
    },

    {
        id: 2,
        name: "PrinceAj Orias",
        age: 25,
        address: "Lib-og Maasin City",
        enrolled: true,
        yearlevel: 3,
    },

    {
        id: 3,
        name: "Artemis Morada",
        age: 22,
        address: "Lib-og Maasin City",
        enrolled: true,
        yearlevel: 3,
    },

    {
        id: 4,
        name: "Kyle Basco",
        age: 23,
        address: "Lib-og Maasin City",
        enrolled: true,
        yearlevel: 3,
    },
]

let filterEach = StudentInfo.filter(StudentInfo => StudentInfo.id === 1)

filterEach.forEach(filterEach => {
    const {name, age, address, enrolled, yearlevel} = filterEach

    console.log("name: ",name);
    console.log("age: ",age);
    console.log("address: ",address);
    console.log("enrolled: ",enrolled);
    console.log("YearLevel: ",yearlevel);
});