class libray  {
    constructor(Borrwer_name, Book_name, Book_id, book_date) {
        this.Borrwer_name = Borrwer_name;
        this.Book_name = Book_name;
        this.Book_id = Book_id;
        this.book_date = book_date;
    }

    borrowed () {
        console.log("Name: " + this.Borrwer_name);
        console.log("Book Name: " + this.Book_name);
    }

    book () {
        console.log("Book id: " + this.Book_id);
        console.log("Borrowed book: " + this.book_date);
    }
}

const student = new libray("Erick", "Marvel", 99, "16/08/2026");

student.borrowed()
student.book()

const student1 = new libray("Dodong", "Marvel", 99, "16/08/2026");

student1.borrowed()
student1.book()

