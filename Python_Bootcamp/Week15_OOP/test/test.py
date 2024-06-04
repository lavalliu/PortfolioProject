import requests

def get_quote():
    try:
        response = requests.get('https://api.quotable.io/random')
        data = response.json()
        quote = data['content']
        author = data['author']
        return f"Quote: '{quote}' - Author: {author}"
    except requests.exceptions.RequestException as e:
        return f"Error: {e}"