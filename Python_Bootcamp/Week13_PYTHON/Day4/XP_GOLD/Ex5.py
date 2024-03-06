import datetime

year = datetime.date.today().year
month = datetime.date.today().month
day = datetime.date.today().day
bdarray = []

def get_age(year, month, day):
    date = input("Enter your date of birth YYY/MM/DD : ")
    bdarray = date.split('/')
    print(bdarray)

get_age()