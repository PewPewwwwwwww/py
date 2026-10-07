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


    getAverage() {

        let total = 0;

        for (let price of this.prices) {
            total += price;
        }

        return total / this.prices.length;
    }


    getStockStatus() {

        if (this.stock >= 10) {

            return "IN STOCK";

        } else if (this.stock > 0) {

            return "LOW STOCK";

        } else {

            return "OUT OF STOCK";
        }
    }
}


// ==============================
// PREMIUM PRODUCT
// ==============================

class PremiumProduct extends Product {

    getStockStatus() {

        if (this.stock >= 5) {

            return "PREMIUM STOCK";

        } else if (this.stock > 0) {

            return "PREMIUM LOW STOCK";

        } else {

            return "OUT OF STOCK";
        }
    }
}


// ==============================
// PRODUCTS
// ==============================

const products = [

    new Product(
        1,
        "Keyboard",
        "Accessories",
        [800, 850, 900],
        15
    ),

    new Product(
        2,
        "Mouse",
        "Accessories",
        [500, 550, 600],
        7
    ),

    new Product(
        3,
        "Monitor",
        "Display",
        [7500, 7800, 8000],
        3
    ),

    new PremiumProduct(
        4,
        "Gaming Chair",
        "Furniture",
        [6500, 7000, 7200],
        8
    ),

    new Product(
        5,
        "USB Cable",
        "Accessories",
        [150, 180, 200],
        0
    )
];


// ==============================
// GENERATE REPORT
// ==============================

function generateReport(products) {


    // ==============================
    // 1. VALIDATE PRODUCTS
    // ==============================

    for (let product of products) {

        if (
            product.name === "" ||
            product.prices.length === 0 ||
            product.stock < 0
        ) {

            console.log(
                "Invalid product: " + product.name
            );

            return;
        }


        for (let price of product.prices) {

            if (price < 1 || price > 100000) {

                console.log(
                    "Invalid price for: " + product.name
                );

                return;
            }
        }
    }


    // ==============================
    // 2. SORT PRODUCTS
    // ==============================

    products.sort((a, b) => {

        return b.getAverage() - a.getAverage();

    });


    // ==============================
    // 3. ASSIGN RANK
    // ==============================

    products.forEach((product, index) => {

        product.rank = index + 1;

    });


    // ==============================
    // 4. MOST EXPENSIVE
    // ==============================

    const Expensive = products[0];


    // ==============================
    // 5. CHEAPEST
    // ==============================

    const Cheapest =
        products[products.length - 1];


    // ==============================
    // 6. LOW / OUT OF STOCK
    // ==============================

    const LowOutOfStock = products.filter(product => {

        const status = product.getStockStatus();

        return (
            status.includes("LOW") ||
            status.includes("OUT")
        );

    });


    // ==============================
    // 7. QUALIFIED PRODUCTS
    // ==============================

    const qualifiedProducts = products.filter(product => {

        return (
            product.getAverage() >= 800 &&
            product.stock > 0
        );

    });


    // ==============================
    // 8. STORE AVERAGE
    // ==============================

    const StoreAverage =
        products.reduce(
            (sum, product) =>
                sum + product.getAverage(),
            0
        ) / products.length;


    // ==============================
    // 9. DISPLAY REPORT
    // ==============================

    console.log(
        "===== PRODUCT INVENTORY REPORT ====="
    );

    console.log(
        "Rank\tProduct\t\tAverage Price\tLowest Price\tStock\tStatus"
    );

    console.log(
        "--------------------------------------------------------------"
    );


    products.forEach(product => {

        console.log(

            product.rank +
            "\t" +

            product.name +
            "\t\t" +

            product.getAverage().toFixed(2) +
            "\t\t" +

            product.getLowerPrice() +
            "\t\t" +

            product.stock +
            "\t" +

            product.getStockStatus()
        );

    });


    // ==============================
    // 10. STORE STATISTICS
    // ==============================

    console.log(
        "\n===== STORE STATISTICS ====="
    );

    console.log(
        "Store Average Price: " +
        StoreAverage.toFixed(2)
    );

    console.log(
        "Most Expensive: " +
        Expensive.name
    );

    console.log(
        "Cheapest: " +
        Cheapest.name
    );

    console.log(
        "Low/Out-of-Stock Products: " +
        LowOutOfStock.length
    );


    // ==============================
    // 11. QUALIFIED PRODUCTS
    // ==============================

    console.log(
        "\n===== QUALIFIED PRODUCTS ====="
    );


    qualifiedProducts.forEach(product => {

        console.log(
            product.name +
            " - " +
            product.getAverage().toFixed(2)
        );

    });


    // ==============================
    // 12. RETURN OBJECT
    // ==============================

    return {

        products: products,

        storeAverage: StoreAverage,

        mostExpensive: Expensive,

        cheapest: Cheapest,

        lowStockCount: LowOutOfStock.length,

        qualifiedProducts: qualifiedProducts
    };
}


// ==============================
// RUN PROGRAM
// ==============================

const report = generateReport(products);