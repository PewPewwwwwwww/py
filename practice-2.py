from tkinter import *

#Label = an area widget thay holds text and/or an image within a window

window = Tk() #intantiate an instance of a windor

photo = PhotoImage(file='user.png')

label = Label(window, text="Hello World Erick", font=("Arial", 40 , 'bold'), fg='green', bg='black', relief=RAISED, bd=10, padx=20, pady=20, image=photo, compound='bottom')
label.pack() #pack is a geometry manager that organizes widgets in blocks before placing them in the parent widget
# label.place(x=0, y=0)


window.mainloop()