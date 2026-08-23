import tkinter as tk


window = tk.Tk()
window.title('Grocery Receipt')
window.geometry('500x500')


def GroceryReceipt():
    username = user_input.get()
    Product = input_Product.get()
    Quantity = int(input_Quantity.get())
    price = float(input_price.get())
    discount = float(input_discount.get())

    total = Quantity * price
    now_discount = total * (discount / 100)
    amount_to_pay = total - discount

    result_label.config(text=f'----------Grocery Receipt---------\nName: {username} \nProduct: {Product} \nQuantity: {Quantity} \nPrice: {price} \nDiscount: {discount} \nDiscount Amount: {now_discount} \nTotal: {amount_to_pay}')



tk.Label(window, text='Enter Your Name: ').pack()
user_input = tk.Entry(window)
user_input.pack()


tk.Label(window, text='Enter Your Product: ').pack()
input_Product = tk.Entry(window)
input_Product.pack()

tk.Label(window, text='How Many Product Do you want: ').pack()
input_Quantity = tk.Entry(window)
input_Quantity.pack()

tk.Label(window, text='Enter the Price: ').pack()
input_price = tk.Entry(window)
input_price.pack()

tk.Label(window, text='Entet The Discount: ').pack()
input_discount = tk.Entry(window)
input_discount.pack()

tk.Button(window, text='SUBMIT', command=GroceryReceipt).pack(pady=20)

result_label = tk.Label(window, text='')
result_label.pack()

window.mainloop()