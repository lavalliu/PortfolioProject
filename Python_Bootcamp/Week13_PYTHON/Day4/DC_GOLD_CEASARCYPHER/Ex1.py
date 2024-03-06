cypher_text = ""

def encrypt(text):
    global cypher_text
    for letter in text:
        cypher_text += chr(ord(letter) - 3)
    print(f"Your encrypted message is : {cypher_text}")
    
def decrypt(msg):
    text = ""
    for letter in msg:
        text += chr(ord(letter) + 3)
    print(f"Your decrypted message is : {text}")

encrypt(text = input("Enter your message : "))
decrypt(cypher_text)

