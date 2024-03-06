import random

# temperature in North America
def get_random_temp(month):
    match (month):
        case month if (month == 5 or month == 6):
            return random.uniform(32,40)
        case month if (month == 11 or month == 12 or month == 1 or month == 2):
            return random.uniform(-10,0)
        case month if (month == 7 or month == 8 or month == 9 or month == 10):
            return random.uniform(16,23)
        case month if (month == 3 or month == 4):
            return random.uniform(24,32)
        case _:
            pass

def main():
    month = int(input("Enter the month (1-12) : "))
    random_temp = get_random_temp(month)
    print(f"The temperature right now is {random_temp} degrees Celsius.")
    match (random_temp):
        case random_temp if (random_temp < 0):
            print("Brrr, that’s freezing! Wear some extra layers today")
        case random_temp if (random_temp > 0 and random_temp < 16):
            print("Quite chilly! Don’t forget your coat")
        case random_temp if (random_temp >= 16 and random_temp <= 23):
            print("This is a nice temperature for people living in cold countries")
        case random_temp if (random_temp >= 24 and random_temp < 32):
            print("The temperature is ok for people living in warm countries")
        case random_temp if (random_temp >= 32 and random_temp <= 40):
            print("Fouf now thats what we call in an oven")
        case _:
            pass
        
main()