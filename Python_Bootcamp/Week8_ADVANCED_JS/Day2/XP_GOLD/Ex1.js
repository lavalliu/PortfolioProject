// let landscape = function() {

//     let result = "";
   
//     let flat = function(x) {
//       for(let count = 0; count<x; count++){
//         result = result + "_";
//       }
//     }
   
//     let mountain = function(x) {
//       result = result + "/"
//       for(let counter = 0; counter<x; counter++){
//         result = result + "'"
//       }
//       result = result + "\\"
//     }
   
//     flat(4);
//     mountain(4);
//     flat(4)
   
//     console.log(result);
//    }
   
//    landscape()

   // it is drawing a landscape of a mountain using the parameters in flat and mountain functions

let landscape = function() {

let result = "";

let flat = (x) => {
  for(let count = 0; count<x; count++){
    result = result + "_";
  }
}

let mountain = (x) => {
  result = result + "/"
  for(let counter = 0; counter<x; counter++){
    result = result + "'"
  }
  result = result + "\\"
}

flat(4);
mountain(4);
flat(4)

console.log(result);
}

landscape()