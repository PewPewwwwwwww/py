#entry widget = textbox that accepts a single line of user input

from tkinter import *
import tkinter as tk

def submit():
    username = entry.get()
    message_label.config(text='Hello ' + username)

def delete():
    entry.delete(0, END) #delete the line of text

def backspace():
    entry.delete(len(entry.get())-1,END) #delete last Character


window = tk.Tk()

message_label = Label(window, text="", font=('Arial', 25))
message_label.pack()

tk.Button(window, text='Submit', command=submit).pack(side = RIGHT)


tk.Button(window, text='Delete', command=delete).pack(side = RIGHT)


tk.Button(window, text='backspace', command=backspace).pack(side = RIGHT)


entry = Entry(window)
entry.config(font=('Arial', 50))
entry.config(bg='grey')
entry.config(fg='#00FF00')
# entry.insert(0, 'Erick')
entry.config(width=10)
# entry.config(show='$')
entry.pack()



window.mainloop()