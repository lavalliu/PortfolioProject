import re
 
# Make a regular expression
# for validating an Email
regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'

list = [
]

invalid = []

# Define a function for
# for validating an Email
def check(email):
    # pass the regular expression
    # and the string into the fullmatch() method
    for email in list:
      if(re.fullmatch(regex, email)):
          pass
      else:
          invalid.append(email)
    invalid.sort()
    for email in invalid:
        print(email)

check('laval_liu;@hotmail.com')