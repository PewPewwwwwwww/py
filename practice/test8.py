import tkinter as tk

window = tk.Tk()
window.title('Employee Payroll System')
window.geometry('1000x1000')


def EmployeInfo():
    Employe = Employe_input.get()
    Department = Department_input.get()
    Positon = Positon_input.get()
    Days = float(Days_input.get())
    Daily = float(Daily_input.get())
    Overtime = float(Overtime_input.get())
    OverRate = float(OverRate_input.get())

    Salary = Days * Daily
    overtime = Overtime * OverRate 
    pay = Salary + overtime
    vat = pay * 0.12
    ss = pay * 0.5
    phil = pay * 0.2
    pagibig = pay * 0.1

    total = vat + ss + phil + pagibig

    NetSalary = pay - total

   

    result_label.config(text=f'Employe Name: {Employe} \nDepartment: {Department} \nPositon {Positon} \nDays Work: {Days} \nDaily Rate: {Daily} \nOvertime: {overtime} \nOverRate: {OverRate} \nTotal of Salry: {NetSalary}')



tk.Label(window, text='Enter Your Name: ').pack()
Employe_input = tk.Entry(window)
Employe_input.pack()

tk.Label(window, text='Enter Your Department: ').pack()
Department_input = tk.Entry(window)
Department_input.pack()

tk.Label(window, text='Enter Your Positon: ').pack()
Positon_input = tk.Entry(window)
Positon_input.pack()

tk.Label(window, text='Enter Your Daily Days: ').pack()
Days_input = tk.Entry(window)
Days_input.pack()

tk.Label(window, text='Enter Your Daily: ').pack()
Daily_input = tk.Entry(window)
Daily_input.pack()

tk.Label(window, text='Enter DailyOvertime: ').pack()
Overtime_input = tk.Entry(window)
Overtime_input.pack()

tk.Label(window, text='Enter Your DailyRate: ').pack()
OverRate_input = tk.Entry(window)
OverRate_input.pack()

tk.Button(window, text='Sumbit', command=EmployeInfo).pack()

result_label = tk.Label(window, text='')
result_label.pack()

window.mainloop()
