from tkinter import *
import tkinter as tk


window = tk.Tk()

def Studentform():
    username = str(input1.get())
    age = str(input2.get())
    course = str(input3.get())
    midterm = float(input4.get())
    final = float(input5.get())

    total = (midterm + final) / 2

    if (total >= 90):
        remark = 'Exellent'
    elif total >= 80:
        remark = 'Very Good'
    else:
        remark = 'failed'

    result_label.config(text=f'''\nName:  {username} \nAge:  {age} \nCourse:  {course} \nÁverage:  {total} \nRemark {remark}''')
 

window.title('ADDING NUMBER')
window.geometry('420x200')


tk.Label(window, text='Enter Your name: ').pack()
input1 = tk.Entry(window)
input1.config(font=('Arial', 20), bg='grey', fg='green', width=10)
input1.pack()

tk.Label(window, text='Enter Your Age: ').pack()
input2 = tk.Entry(window)
input2.config(font=('Arial', 20), bg='grey', fg='green', width=10)
input2.pack()

tk.Label(window, text='Enter Your course: ').pack()
input3 = tk.Entry(window)
input3.config(font=('Arial', 20), bg='grey', fg='green', width=10)
input3.pack()

tk.Label(window, text='Enter Your Midterm Exam: ').pack()
input4 = tk.Entry(window)
input4.config(font=('Arial', 20), bg='grey', fg='green', width=10)
input4.pack()

tk.Label(window, text='Enter Your Final Grade: ').pack()
input5 = tk.Entry(window)
input5.config(font=('Arial', 20), bg='grey', fg='green', width=10)
input5.pack()

tk.Button(window, text='Submit', command=Studentform).pack()

result_label = tk.Label(window, text=' ', font=('Arial', 50))
result_label.pack()


window.mainloop()


