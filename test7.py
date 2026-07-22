import tkinter as tk

class cars:
    def __init__(self, brand, model, year, color):
        self.brand = brand
        self.model = model
        self.year = year
        self.color = color

    def info(self):
        return f'Brand of the car {self.brand} \nModel of the car: {self.model} \nwhat year is the car: {self.year} \nColor of the car: {self.color}'



def show_info():
    brand = brand_input.get()
    model = model_input.get()
    year = int(year_input.get())
    color = color_input.get()

    car = cars (brand, model, year, color)

    result_label.config(text=car.info())

window = tk.Tk()
window.title('Show car Result')
window.geometry('1000x1000')


tk.Label(window, text='Enter the model of the car: ').pack()
model_input = tk.Entry(window)
model_input.pack()

tk.Label(window, text='Enter the brand of the car: ').pack()
brand_input = tk.Entry(window)
brand_input.pack()

tk.Label(window, text='Enter the year of the car: ').pack()
year_input = tk.Entry(window)
year_input.pack()

tk.Label(window, text='Enter the model of the car: ').pack()
color_input = tk.Entry(window)
color_input.pack()


tk.Button(window, text='Submit', command=show_info).pack()


result_label = tk.Label(window, text='')
result_label.pack()

window.mainloop()
