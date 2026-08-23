from tkinter import *
import tkinter as tk


window = tk.Tk()

def Callform():
    operator = str(input1.get())
    num1 = float(input2.get())
    num2 = float(input3.get())

    if operator == '+':
        result = num1 + num2
    elif operator == '-':
        result = num1 - num2
    elif operator == '*':
        result = num1 * num2
    elif operator == '/':
        result = num1 / num2
    else:
        result = f'{operator} is not a valid operator'

    result_label.config(text=f'''Your First Number Is: {num1} \nYour Second Number Is: {num2} \nYour Result Is: {result}''')



window.title('CalladdNumber')
window.geometry('520x300')

tk.Label(window, text='Enter Your operator: ').pack()
input1 = tk.Entry()
input1.pack()

tk.Label(window, text='Enter Your First Number: ').pack()
input2 = tk.Entry()
input2.pack()

tk.Label(window, text='Enter Your Second Number: ').pack()
input3 = tk.Entry()
input3.pack()

tk.Button(window, text='ADD', command=Callform).pack()

result_label = tk.Label(window, text='')
result_label.pack()

window.mainloop()