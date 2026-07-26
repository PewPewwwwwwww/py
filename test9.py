import tkinter as tk

class Vehicle:
    def __init__(self, customer, vehicle):
        self.Customer = customer
        self.Vehicle = vehicle

    
    def display_info(self):
        return f'Customer: {self.Customer} \nVehicle: {self.Vehicle}'


class Car(Vehicle):
    def __init__(self, customer, vehicle, rental_days, price_per_day):
        super().__init__(customer, vehicle)
        self.rental_days = rental_days
        self.price_per_day = price_per_day

    
    def calculate_rental(self):
        return self.rental_days * self.price_per_day


class Motorcycle(Vehicle):
    def __init__(self, customer, vehicle, rental_days, price_per_day):
        super().__init__(customer, vehicle)
        self.rental_days = rental_days
        self.price_per_day = price_per_day

    def calculate_rental(self):
        return self.rental_days * self.price_per_day


def cumpute():
    customer = customer_input.get()
    vehicle = vehicle_input.get()
    vehicle_type = type_input.get()

    if vehicle_type == 'Car':
        days = float(time_input.get())
        rate = float(rate_input.get())

        car = Car(customer, vehicle, days, rate)
        total = car.calculate_rental()

        result_label.config(text=f'{car.display_info()} \nVehicle Tyle: Car \nRental Days: {days} \nTotal Rental Fee: {total}')
    

    elif vehicle_type == 'Motorcycle':
        hours = float(time_input.get())
        rate = float(rate_input.get())

        motor = Motorcycle(customer, vehicle, hours, rate)
        total = motor.calculate_rental()

        result_label.config(text=f'{car.display_info()} \nVehicle Tyle: Motor \nRental Days: {hours} \nTotal Rental Fee: {total}')


window = tk.Tk()
window.title('Vehicle Rental System')
window.geometry('400x420')

vehicle_var = tk.StringVar(value='Çar')

tk.Label(window, text='Customer Name: ').pack()
customer_input = tk.Entry()
customer_input.pack()

tk.Label(window, text='vehicle Name: ').pack()
vehicle_input = tk.Entry()
vehicle_input.pack()

tk.Label(window, text='type of Vehicle: ').pack()
type_input = tk.Entry()
type_input.pack()

tk.Label(window, text='Rental Days / Hours: ').pack()
time_input = tk.Entry()
time_input.pack()

tk.Label(window, text='Price Per day / Hour: ').pack()
rate_input = tk.Entry()
rate_input.pack()

tk.Button(window, text='Compute Rental' , command=cumpute).pack()

result_label = tk.Label(window, text='')
result_label.pack()


window.mainloop()