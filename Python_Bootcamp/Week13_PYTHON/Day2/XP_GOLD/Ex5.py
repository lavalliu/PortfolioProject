import string
lower = list(string.ascii_lowercase)  
print(lower)
for alpha in lower:
    if (alpha == 'a' or alpha == 'e' or alpha == 'i' or alpha == 'o' or alpha == 'u'):
        print(f"{alpha} is a vowel")
    else:
        print(f"{alpha} is a consonant")

    