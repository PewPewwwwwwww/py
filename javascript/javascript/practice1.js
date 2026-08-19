class Library {
    constructor (name, book, status) {
        this.name = name;
        this.book = book;
        this.status = status;
    }

    borrower () {
        console.log("Name: " + this.name);
    }

    borrowed () {
        console.log("Book: " + this.book);
    }

    Recording () {
        console.log("Recording.....");
        
    }

    Printing (callback) {
        console.log("Printing.......");
        callback()
        
    }
}

function output(Library) {
    console.log("========= Library Receipt =========")
    console.log("Student: " + Library.name);
    console.log("Book: " + Library.book);
    console.log("Status: " + Library.status);
    console.log("===================================")
}


const account = new Library ("Erick", "JavaScript Book", "Barrowed");

account.borrower()
account.borrowed()
account.Recording()
account.Printing(function () {
    output(account);
});
