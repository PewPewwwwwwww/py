import tkinter as tk

window = tk.Tk()
window.title('Grocery Cashier System')

def GroceryCashier ():
    custumer = input11.get()
    Milk = float(input1.get())
    Bread = float(input2.get())
    Eggs = float(input3.get())
    cash = float(input4.get())

    Subtotal = Milk + Bread + Eggs
    vat = Subtotal * 0.12
    total = Subtotal + vat
    Change = cash - total

    result_label.config(text=f'\nCustomer Name: {custumer} \nPrice of milk: {Milk} \nPrice of Bread: {Bread} \nPrice of Eggs: {Eggs} \ntotal of the Product: {Subtotal} \nVat: {vat}% \nCash: {cash} \nChange: {Change}')


tk.Label(window, text='Enter The Customer Name: ').pack()
input11 = tk.Entry(window)
input11.pack()

tk.Label(window, text='Enter The Price of the Milk: ').pack()
input1 = tk.Entry(window)
input1.pack()

tk.Label(window, text='Enter The Price of the Bread: ').pack()
input2 = tk.Entry(window)
input2.pack()

tk.Label(window, text='Enter The Price of the Eggs: ').pack()
input3 = tk.Entry(window)
input3.pack()

tk.Label(window, text='Enter Your cash: ').pack()
input4 = tk.Entry(window)
input4.pack()

tk.Button(window, text='Submit', command=GroceryCashier).pack()

result_label = tk.Label(window, text='')
result_label.pack()

window.mainloop()