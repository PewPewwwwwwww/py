import tkinter as tk
from tkinter import messagebox

# ==========================
# OOP CLASS
# ==========================
class Student:
    def __init__(self, name, midterm, final):
        self.name = name
        self.midterm = midterm
        self.final = final

    def average(self):
        return (self.midterm + self.final) / 2

    def remarks(self):
        if self.average() >= 75:
            return "PASSED"
        else:
            return "FAILED"


# ==========================
# FUNCTION
# ==========================
def calculate():
    try:
        name = entry_name.get()
        midterm = float(entry_midterm.get())
        final = float(entry_final.get())

        student = Student(name, midterm, final)

        lbl_average.config(text=f"Average: {student.average():.2f}")
        lbl_remarks.config(text=f"Remarks: {student.remarks()}")

    except ValueError:
        messagebox.showerror("Error", "Please enter valid grades.")


def clear():
    entry_name.delete(0, tk.END)
    entry_midterm.delete(0, tk.END)
    entry_final.delete(0, tk.END)

    lbl_average.config(text="Average:")
    lbl_remarks.config(text="Remarks:")


# ==========================
# TKINTER WINDOW
# ==========================
window = tk.Tk()
window.title("Student Grade Calculator")
window.geometry("350x300")
window.resizable(False, False)

# ==========================
# LABELS
# ==========================
tk.Label(window, text="Student Grade Calculator",
         font=("Arial", 16, "bold")).pack(pady=10)

tk.Label(window, text="Student Name").pack()

entry_name = tk.Entry(window, width=30)
entry_name.pack()

tk.Label(window, text="Midterm Grade").pack()

entry_midterm = tk.Entry(window, width=30)
entry_midterm.pack()

tk.Label(window, text="Final Grade").pack()

entry_final = tk.Entry(window, width=30)
entry_final.pack(pady=5)

# ==========================
# BUTTONS
# ==========================
tk.Button(window,
          text="Calculate",
          command=calculate,
          bg="green",
          fg="white",
          width=15).pack(pady=5)

tk.Button(window,
          text="Clear",
          command=clear,
          bg="red",
          fg="white",
          width=15).pack()

# ==========================
# OUTPUT
# ==========================
lbl_average = tk.Label(window,
                       text="Average:",
                       font=("Arial", 12))
lbl_average.pack(pady=10)

lbl_remarks = tk.Label(window,
                       text="Remarks:",
                       font=("Arial", 12, "bold"))
lbl_remarks.pack()

window.mainloop()