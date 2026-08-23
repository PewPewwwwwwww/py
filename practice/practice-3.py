from tkinter import *

count = 0

# button = you click it, them it does stuff
def click():
    global count
    count += 1
    label.config(text=count)


window= Tk() 

button = Button(window, text='click me!!')
button.config(command=click)
button.config(font=('Ink free', 50 , 'bold'))
button.config(bg='red')
button.config(fg='yellow')
button.config(activebackground='blue')
button.config(activeforeground='white')
image = PhotoImage(file='user.png')
button.config(image=image)
button.config(compound='top')
# button.config(state=DISABLED)
label = Label(window, text=count)
label.config(font=('Monospace', 50))
label.pack()
button.pack()


window.mainloop()