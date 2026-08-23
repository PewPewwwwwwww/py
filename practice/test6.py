import tkinter as tk

window = tk.Tk()
window.title('Grade System with have a oop')
window.geometry('500x500')

class AllStudent:
    def __init__(self, name, curse, midterm, final):
        self.name = name
        self.curse = curse
        self.midterm = midterm
        self.final = final


    def average(self):
        return (self.midterm + self.final) / 2

    def remarks(self):
        if self.average() >= 90:
            return 'Exellent'
        elif self.average() >= 85:
            return 'Very Good'
        elif self.average() >= 75:
            return 'Passed'
        else:
            return 'Failed'


def calculate():
    name = user_input.get()
    curse = curse_input.get()
    midterm = float(midterm_input.get())
    final = float(final_input.get())

    student = AllStudent (name, curse, midterm, final)

    result_label.config(text=f'\nYour Name is: {name} \nYour Curse is: {curse} \nYour midterm Score is: {student.average()} \nYour Final Exam if: {student.average()} \nRemark: {student.remarks()}')


tk.Label(window, text='Enter Your name: ').pack()
user_input = tk.Entry()
user_input.pack()

tk.Label(window, text='Enter Your curse: ').pack()
curse_input = tk.Entry()
curse_input.pack()

tk.Label(window, text='Enter Your name: ').pack()
midterm_input = tk.Entry()
midterm_input.pack()

tk.Label(window, text='Enter Your name: ').pack()
final_input = tk.Entry()
final_input.pack()

tk.Button(window, text='Submit', command=calculate).pack()

result_label = tk.Label(text='')
result_label.pack()

window.mainloop()