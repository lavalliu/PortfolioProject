para = "In Python, you can split a string into a list of characters using the itertools module. You need to convert the string into an iterable sequence (e.g., a list, tuple, or string itself) of individual characters"
i = 0
for char in para:
    i +=1
print(f"Number of characters in the paragraph : {i}")
para2 = para.split(".")
print(f"Number of sentences : {len(para2)}")
para3 = para.split(" ")
print(f"Number of words : {len(para3)+1}")
para4 = set(para3)
print(f"Number of unique words : {len(para4)+1}")
x = para.count(" ")
y = len(para)
print(f"There are {y-x} non white space characters in this paragraph")
z = para.count(".")
print(f"The average number of words per sentence in this paragraph is {(len(para3)+1)/z}")
print(f"Amount of non unique words : {(len(para3)+1) - (len(para4)+1)}")