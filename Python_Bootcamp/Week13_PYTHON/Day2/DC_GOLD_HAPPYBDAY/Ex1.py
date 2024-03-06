from datetime import date

current_date = date.today()

bday = input("Enter your birthdate in format dd/mm/yyy : ")
xdate = bday.rsplit("/")
birth_year=int(xdate[2])
# birth_month=int(xdate[1])
# birth_day=int(xdate[0])
current_year=current_date.year
# current_month=current_date.month
# current_day=current_date.day
year=str(current_year-birth_year)
# month=current_month-birth_month
# day=current_day-birth_day
# print([*year])
candle = int(year[-1])
remain = (11-candle)/2
i = 0
if candle %2 == 0:
    i = 1
# print(month)
# print(day)
print("    "+"_"*(int(remain))+"i"*(candle)+"_"*(int(remain+i))+"    ")
print("   |:H:a:p:p:y:|   ")
print("___|___________|___")
print("|^^^^^^^^^^^^^^^^^|")
print("|:B:i:r:t:h:d:a:y:|")
print("|                 |")
print("~~~~~~~~~~~~~~~~~~~")