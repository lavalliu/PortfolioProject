//creating an array
var my_array = [1, 3, 5, 2, 4];

//map calls a function which has "item" passed as parameter
//map will pass each element of my_array as "item" in this function
//the function will double each element passed to it and return it
result = my_array.map(function(item) {
  return item*2;
});

//prints new list containing the doubled values
console.log(result); 

// result would be [2, 6, 10, 4, 8]

