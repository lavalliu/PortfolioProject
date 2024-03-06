brand = {}
brand['name'] = 'Zara'
brand['creation_date'] = 1975
brand['creator_name'] = 'Amancio Ortega Gaona'
brand['type_of_clothes'] = ['men', 'women', 'children', 'home']
brand['international_competitors'] = ['Gap', 'H&M', 'Benetton']
brand['number_stores'] = 7000
brand['major_color'] ={ 
        'France': 'blue', 
        'Spain': 'red', 
        'US': 'pink, green'
    }

# 2
print(brand)

# 3 & 5
brand['number_stores'] = 2
brand['country_creation'] = 'Spain'
print(f"Updated with STORES and COUNTRY OF CREATION: {brand}")

# 4
print(f"Zara clients are {brand['type_of_clothes'][0]}, {brand['type_of_clothes'][1]} and {brand['type_of_clothes'][2]}")

# 8
print(f"Last international competitor in the list is : {brand['international_competitors'][-1]}")

# 6
if 'international_competitors' in brand.keys():
    brand['international_competitors'].append("Desigual")
print(f"International Competitors 'Desigual' inserted : {brand}")

# 7
brand.pop("creation_date")
print(f"Creation Date removed : {brand}")

# 9
print("Major colors are : ")
for color in brand['major_color'].values():
    print(color)

# 10
print(f"Length of Keys of the dictionary : {len(brand)}")

# 11
print(f"List of keys : {brand.keys()}")

# 12
more_on_zara = {}
more_on_zara['creation_date'] = 1975
more_on_zara['number_stores'] = 10000
print(f"Dictionary 'more_on_zara' : {more_on_zara}")

def Merge(brand, more_on_zara):
    final = brand | more_on_zara
    return final

# 13
combined = Merge(brand, more_on_zara)
print(f"Combined dictionaries : {combined}")

# 14
print(combined['number_stores'])