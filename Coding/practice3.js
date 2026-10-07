class Product {
    constructor(id, name, category, prices, stock) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.prices = prices;
        this.stock = stock;
        this.rank = 0;
    }

    getLowerPrice() {
        return Math.min(...this.prices);
    }

    getAverage () {
        let total = 0;

        for(let price of this.prices) {
            total += price;
        }

        return total / this.prices.length;
    }

     getStockStatus() {
        if(this.stock >= 10 ) {
            return "IN STOCK";
        } else if (this.stock >= 1 && this.stock <= 9 ) {
            return "LOW STOCK";
        } else if (this.stock === 0) {
            return "OUT OF STOCK";
        }
        
     }

    //  displayStatus() {
    //     return `ID: ${this.id} Name: ${this.name} Price: ${this.getAverage().toFixed(2)} lowest Price: ${this.getLowerPrice()} Stock: ${this.stock} Status: ${this.getStockStatus()}`
    //  }
}

class PremiumProduct extends Product {
    getStockStatus() {
        
        if(this.stock >= 5) {
            return "PREMIUM STOCK";
        } else if (this.stock >= 1 && this.stock <= 4) {
            return "PREMIUM LOW STOCK";
        } else if (this.stock === 0) {
            return "OUT OF STOCK";
        };
    }

}



const products = [
    
    new Product (1, "keybord", "Äccessories", [800, 850, 900], 15),
    new Product (2, "Mouse", "Äccessories", [500, 550, 600], 7),
    new Product (3, "Monitor", "Discplay", [7500, 7800, 8000], 3),
    new PremiumProduct (4, "Gaming Chair", "Furniture", [6500, 7000, 7200], 8),
    new Product (5, "USB Cable", "Accessories", [150, 180, 200], 0)
];


function generateReport (products) {

    products.sort((a, b) => b.getAverage() - a.getAverage());

    products.forEach((product, index) => {
    product.rank = index + 1;
    });

    const Expensive = products.find(product => product.name === "Monitor");
    const Cheapest = products.find(product => product.name === "USB Cable");
    
    const LowOutOfStuck = products.filter(product => {
        const status = product.getStockStatus();
        return status.includes("LOW") || status.includes("OUT");
    });

    const qualifiedProducts = products.filter(product => {
        const status = product.getStockStatus();
        return status.includes("PREMIUM") || status.includes("IN") || status.includes("LOW");
    });


    const StoreAverage = products.reduce((sum, product) => sum + product.getAverage(), 0) / products.length

    
    

    console.log("===== PRODUCT INVENTORY REPORT =====");

    console.log("Rank\tProduct\t\tAverage Price\tLowest Price \tStock \tStatus");

    products.forEach(Product => {
        console.log(
            `${Product.rank}\t` + 
            `${Product.name}\t\t` + 
            `${Product.getAverage().toFixed(2)}\t\t` + 
            `${Product.getLowerPrice()}\t\t` + 
            `${Product.stock}\t` + 
            `${Product.getStockStatus()}`);
}); 


console.log("\n===== STORE STATISTICS =====");

console.log(`\nStore Average Price: ${StoreAverage.toFixed(2)}`);

console.log(`\nMost Expensive: ${Expensive.name}`);

console.log(`\nCheapest: ${Cheapest.name}`);

console.log(`\nLow/Out-of-Stock Products: ${LowOutOfStuck.length}`)


console.log("\n===== QUALIFIED PRODUCTS =====");


qualifiedProducts.forEach(Product => {
    console.log(`${Product.name} - ${Product.getAverage().toFixed(2)}`)
});

return {
    products,
    StoreAverage,
    Expensive,
    Cheapest,
    LowOutOfStuck,
    qualifiedProducts
}

}


const report = generateReport(products);


