class Grocery {
    constructor(customer, milk, bread, egg, cash) {
        this.customer = customer;
        this.milk = milk;
        this.bread = bread;
        this.egg = egg;
        this.cash = cash
    }

    product() {
        console.log("Customer name: " + this.customer);

        console.log("Milk: " + this.milk);
        console.log("bread: " + this.bread);
        console.log("egg: " + this.egg);
    }

    Add_Product (callback) {
       this.total = this.milk + this.bread + this.egg;
       this.vat = this.total * 0.12;
       this.subtotal = this.total - this.vat
       this.change = this.cash - this.subtotal
       callback()
    }
}

function checkoutEvent (Grocery) {
    
    console.log("=========Grocery Receip===========");
    console.log("Customer: " + Grocery.customer);
    console.log("Total: " + Grocery.total);
    console.log("vat: " + Grocery.vat)
    console.log("Subtotal: " + Grocery.subtotal);
    console.log("Cash: " + Grocery.cash);
    console.log("Change: " + Grocery.change);
    console.log("=================================")

    
}

const customer1 = new Grocery("Erick", 100, 200, 300, 1000);

// customer1.product()
// customer1.Add_Product()
// checkoutEvent(customer1)

customer1.Add_Product(function () {
    customer1.product()
    checkoutEvent(customer1);
});
