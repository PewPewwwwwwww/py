// ==========================================
// ROOM CLASS
// ==========================================

class Room {

    constructor(id, roomNumber, type, prices, capacity, status, rating) {

        this.id = id;
        this.roomNumber = roomNumber;
        this.type = type;
        this.prices = prices;
        this.capacity = capacity;
        this.status = status;
        this.rating = rating;
        this.rank = 0;
    }


    // ==========================================
    // GET AVERAGE PRICE
    // ==========================================

    getAveragePrice() {

        let total = 0;

        for (let price of this.prices) {
            total += price;
        }

        return total / this.prices.length;
    }


    // ==========================================
    // GET LOWEST PRICE
    // ==========================================

    getLowestPrice() {

        return Math.min(...this.prices);
    }


    // ==========================================
    // GET ROOM STATUS
    // ==========================================

    getRoomStatus() {

        if (this.status === "Available") {
            return "AVAILABLE";
        }

        if (this.status === "Booked") {
            return "BOOKED";
        }

        if (this.status === "Maintenance") {
            return "MAINTENANCE";
        }

        return "UNKNOWN";
    }


    // ==========================================
    // VALIDATE DATA
    // ==========================================

    validateData() {

        if (this.id <= 0)
            return "Invalid ID";

        if (this.roomNumber <= 0)
            return "Invalid room number";

        if (this.type === "")
            return "Room type is empty";

        if (this.prices.length === 0)
            return "No prices available";

        if (this.capacity <= 0)
            return "Capacity must be greater than 0";

        if (this.rating < 0 || this.rating > 5)
            return "Rating must be between 0 and 5";

        // Validate every price
        for (let price of this.prices) {

            if (price < 500 || price > 100000)
                return "Invalid price for Room " + this.roomNumber;
        }

        return null;
    }
}


// ==========================================
// LUXURY ROOM CLASS
// ==========================================

class LuxuryRoom extends Room {

    // Method overriding
    getRoomStatus() {

        if (this.status === "Available") {

            if (this.capacity > 4) {
                return "LUXURY AVAILABLE";
            }

            return "LUXURY ROOM";
        }

        if (this.status === "Booked") {
            return "LUXURY BOOKED";
        }

        if (this.status === "Maintenance") {
            return "LUXURY MAINTENANCE";
        }

        return "UNKNOWN";
    }
}


// ==========================================
// ROOMS
// ==========================================

const rooms = [

    new Room(
        1,
        101,
        "Standard",
        [1500, 1600, 1700],
        2,
        "Available",
        3.9
    ),

    new Room(
        2,
        102,
        "Standard",
        [1800, 1900, 2000],
        2,
        "Available",
        4.1
    ),

    new Room(
        3,
        201,
        "Deluxe",
        [3000, 3200, 3400],
        3,
        "Booked",
        4.3
    ),

    new Room(
        4,
        202,
        "Deluxe",
        [3300, 3500, 3700],
        3,
        "Available",
        4.5
    ),

    new Room(
        5,
        301,
        "Suite",
        [4800, 5000, 5200],
        4,
        "Available",
        4.7
    ),

    new LuxuryRoom(
        6,
        401,
        "Luxury",
        [6200, 6500, 6800],
        5,
        "Available",
        4.9
    )
];


// ==========================================
// VALIDATION
// ==========================================

for (let room of rooms) {

    let error = room.validateData();

    if (error) {

        console.log(error);

        return;
    }
}

console.log("All room data is valid.");


// ==========================================
// SORT BY RATING
// HIGHEST RATING FIRST
// ==========================================

rooms.sort((a, b) => b.rating - a.rating);


// ==========================================
// RANKING
// ==========================================

for (let i = 0; i < rooms.length; i++) {

    rooms[i].rank = i + 1;
}


// ==========================================
// HOTEL ROOM REPORT
// ==========================================

console.log("\n===== HOTEL ROOM REPORT =====");

for (let room of rooms) {

    console.log(
        room.rank +
        ". Room " +
        room.roomNumber +
        " | " +
        room.type +
        " | ₱" +
        room.getAveragePrice().toFixed(2) +
        " | Rating: " +
        room.rating
    );
}


// ==========================================
// AVAILABLE ROOMS
// ==========================================

const availableRooms = rooms.filter(room =>
    room.status === "Available" &&
    room.rating >= 4.0
);

console.log("\n===== AVAILABLE ROOMS =====");

for (let room of availableRooms) {

    console.log(
        "Room " + room.roomNumber
    );
}


// ==========================================
// CHEAPEST ROOM
// ==========================================

// Sort by lowest price
const cheapestRoom = [...rooms].sort(
    (a, b) => a.getLowestPrice() - b.getLowestPrice()
)[0];

console.log(
    "\nCheapest Room: Room " +
    cheapestRoom.roomNumber
);

console.log(
    "Price: ₱" +
    cheapestRoom.getLowestPrice()
);


// ==========================================
// HIGHEST RATED ROOM
// ==========================================

const highestRatedRoom = rooms[0];

console.log(
    "\nHighest Rated Room: Room " +
    highestRatedRoom.roomNumber
);

console.log(
    "Rating: " +
    highestRatedRoom.rating
);


// ==========================================
// HOTEL AVERAGE PRICE
// ==========================================

let totalAverage = 0;

for (let room of rooms) {

    totalAverage += room.getAveragePrice();
}

let hotelAverage =
    totalAverage / rooms.length;

console.log(
    "\nHotel Average Price: ₱" +
    hotelAverage.toFixed(2)
);


// ==========================================
// COUNT ROOM STATUS
// ==========================================

let availableCount = 0;
let bookedCount = 0;
let maintenanceCount = 0;


for (let room of rooms) {

    if (room.status === "Available") {

        availableCount++;

    } else if (room.status === "Booked") {

        bookedCount++;

    } else if (room.status === "Maintenance") {

        maintenanceCount++;
    }
}


console.log("\n===== ROOM STATISTICS =====");

console.log(
    "Available Rooms: " +
    availableCount
);

console.log(
    "Booked Rooms: " +
    bookedCount
);

console.log(
    "Maintenance Rooms: " +
    maintenanceCount
);


// ==========================================
// FIND ROOM FUNCTION
// ==========================================

function findRoom(roomNumber) {

    const room = rooms.find(
        room => room.roomNumber === roomNumber
    );

    if (room) {

        console.log("\n===== ROOM FOUND =====");

        console.log(
            "Room Number: " +
            room.roomNumber
        );

        console.log(
            "Type: " +
            room.type
        );

        console.log(
            "Rating: " +
            room.rating
        );

        console.log(
            "Status: " +
            room.getRoomStatus()
        );

    } else {

        console.log("\nRoom not found.");
    }
}


// ==========================================
// TEST FIND ROOM
// ==========================================

findRoom(301);



// Classes and Objects
// Constructor
// Properties and Methods
// Inheritance
// Method Overriding
// Arrays of Objects
// for loops
// while loop
// Conditional statements
// Functions
// Array methods (filter, map, sort, find)
// Basic computations
// Input validation
// Ranking logic
// Debugging