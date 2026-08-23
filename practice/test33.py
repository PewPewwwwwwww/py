import tkinter as tk
from tkinter import messagebox

# ---------------- Parent Class ----------------
class Vehicle:
    def __init__(self, customer_name, vehicle_name):
        self.customer_name = customer_name
        self.vehicle_name = vehicle_name

    def display_info(self):
        return f"Customer: {self.customer_name}\nVehicle: {self.vehicle_name}"


# ---------------- Child Class: Car ----------------
class Car(Vehicle):
    def __init__(self, customer_name, vehicle_name, rental_days, price_per_day):
        super().__init__(customer_name, vehicle_name)
        self.rental_days = rental_days
        self.price_per_day = price_per_day

    def calculate_rental(self):
        return self.rental_days * self.price_per_day


# ---------------- Child Class: Motorcycle ----------------
class Motorcycle(Vehicle):
    def __init__(self, customer_name, vehicle_name, rental_hours, price_per_hour):
        super().__init__(customer_name, vehicle_name)
        self.rental_hours = rental_hours
        self.price_per_hour = price_per_hour

    def calculate_rental(self):
        return self.rental_hours * self.price_per_hour


# ---------------- Tkinter Function ----------------
def compute():
    try:
        customer = entry_customer.get()
        vehicle = entry_vehicle.get()
        vehicle_type = vehicle_var.get()

        if vehicle_type == "Car":
            days = float(entry_time.get())
            rate = float(entry_rate.get())

            car = Car(customer, vehicle, days, rate)
            total = car.calculate_rental()

            result.config(
                text=f"{car.display_info()}\n"
                     f"Vehicle Type: Car\n"
                     f"Rental Days: {days}\n"
                     f"Total Rental Fee: ₱{total:.2f}"
            )

        elif vehicle_type == "Motorcycle":
            hours = float(entry_time.get())
            rate = float(entry_rate.get())

            motor = Motorcycle(customer, vehicle, hours, rate)
            total = motor.calculate_rental()

            result.config(
                text=f"{motor.display_info()}\n"
                     f"Vehicle Type: Motorcycle\n"
                     f"Rental Hours: {hours}\n"
                     f"Total Rental Fee: ₱{total:.2f}"
            )

    except ValueError:
        messagebox.showerror("Error", "Please enter valid numbers.")


def clear():
    entry_customer.delete(0, tk.END)
    entry_vehicle.delete(0, tk.END)
    entry_time.delete(0, tk.END)
    entry_rate.delete(0, tk.END)
    vehicle_var.set("Car")
    result.config(text="")


# ---------------- GUI ----------------
window = tk.Tk()
window.title("Vehicle Rental System")
window.geometry("400x420")

vehicle_var = tk.StringVar(value="Car")

tk.Label(window, text="Customer Name").pack()
entry_customer = tk.Entry(window, width=30)
entry_customer.pack()

tk.Label(window, text="Vehicle Name").pack()
entry_vehicle = tk.Entry(window, width=30)
entry_vehicle.pack()

tk.Label(window, text="Vehicle Type").pack()
tk.OptionMenu(window, vehicle_var, "Car", "Motorcycle").pack()

tk.Label(window, text="Rental Days / Hours").pack()
entry_time = tk.Entry(window, width=30)
entry_time.pack()

tk.Label(window, text="Price Per Day / Hour").pack()
entry_rate = tk.Entry(window, width=30)
entry_rate.pack()

tk.Button(window, text="Compute Rental", command=compute).pack(pady=10)
tk.Button(window, text="Clear", command=clear).pack()

result = tk.Label(window, text="", justify="left")
result.pack(pady=15)

window.mainloop()