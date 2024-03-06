import random

def get_random_temp():
    return random.randint(-10,40)

def main():
    random_temp = get_random_temp()
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