from tkinter import *
# wingets = GUI elemets: buttons, textboxes, labels, images
# windows= serves as a container to hold or contain these widgets

window = Tk()#intantiate an instance of a windor
window.geometry("420x420")
window.title("Erick first Ui Program")



image = PhotoImage(file='user.png')
window.iconphoto(True, image)
window.config(background="grey")


window.mainloop()