import tkinter as tk

def generate_receipt():
    product = input_product.get()
    quantity = int(input_quantity.get())
    price = float(input_price.get())
    discount = float(input_discount.get())

    total = quantity * price
    discount_amount = total * (discount / 100)
    amount_to_pay = total - discount_amount

    receipt_label.config(
        text="------GROCERY RECEIPT-----"
        "\nProduct: " + product +
        "\nQuantity: " + str(quantity) +
        "\nPrice: " + str(price) +
        "\nTotal: " + str(total) +
        "\nDiscount: " + str(discount) + "%" +
        "\nDiscount Amount: " + str(discount_amount) +
        "\nAmount to Pay: " + str(amount_to_pay)
    )

window = tk.Tk()
window.title("Grocery Receipt")
window.geometry("500x500")

tk.Label(window, text="Product Name").pack()
input_product = tk.Entry(window)
input_product.pack()

tk.Label(window, text="Quantity").pack()
input_quantity = tk.Entry(window)
input_quantity.pack()

tk.Label(window, text="Price").pack()
input_price = tk.Entry(window)
input_price.pack()

tk.Label(window, text="Discount").pack()
input_discount = tk.Entry(window)
input_discount.pack()

tk.Button(window, text="Generate Receipt", command=generate_receipt).pack(pady=20)

receipt_label = tk.Label(window, text="",font=('Arial', 50))
receipt_label.pack()

window.mainloop()