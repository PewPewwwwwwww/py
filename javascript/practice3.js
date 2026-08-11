class Car {

    constructor(customer, car, days, price, cash) {

        this.customer = customer;
        this.car = car;
        this.days = days;
        this.price = price;
        this.cash = cash;

    }


    Rental() {

        this.total = this.days * this.price;

        console.log("Customer: " + this.customer);
        console.log("Car: " + this.car);
        console.log("Days: " + this.days);
        console.log("Price per day: " + this.price);
        console.log("Rental Cost: " + this.total);

    }


    Discount() {

        this.discount = this.total * 0.10;

        this.subtotal = this.total - this.discount;

        console.log("Discount: " + this.discount);
        console.log("Final Total: " + this.subtotal);

    }


    Change() {

        this.change = this.cash - this.subtotal;

        console.log("Cash: " + this.cash);
        console.log("Change: " + this.change);

    }

}


function print(Car) {

    console.log("========= Car Rental Receipt =========");

    console.log("Customer: " + Car.customer);
    console.log("Car: " + Car.car);
    console.log("Days Rented: " + Car.days);
    console.log("Price Per Day: " + Car.price);

    console.log("Rental Cost: " + Car.total);
    console.log("Discount: " + Car.discount);
    console.log("Final Total: " + Car.subtotal);
    console.log("Cash: " + Car.cash);
    console.log("Change: " + Car.change);

    console.log("Status: Rented");

    console.log("======================================");

}


const customer = new Car("Erick", "Toyota Vios", 3, 800, 3000);


customer.Rental();

customer.Discount();

customer.Change();

print(customer);