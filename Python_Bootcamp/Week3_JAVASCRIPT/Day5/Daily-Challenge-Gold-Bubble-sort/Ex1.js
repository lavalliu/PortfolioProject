// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

//bubble sort

// const numbers = [5,0,9,1,7,4,2,6,3,8];

// let text=numbers.toString();

// console.log(text);

// let text1=numbers.join();

// console.log(text1);

// let x=0;
// let y=0;

// for (let i = 0; i < 10; i++) {
//   console.log("i"+i);
//   let a=numbers[i]
//   let b=numbers[i+1]
//   switch (a>b) {
//     case true:
//         console.log("a"+a)
//         console.log("b"+b)
//         numbers.splice(i+1,1,a);
//         console.log(numbers);
//         numbers.splice(i,1,b);
//         console.log(numbers);
//     default:
//     }


//   }
//   if (i=9) {
//     let i=1;
//   }
//   for (let i = 1; i < 10; i++) {
//     console.log("i"+i);
//     let a=numbers[i]
//     let b=numbers[i+1]
//     switch (a>b) {
//       case true:
//           console.log("a"+a)
//           console.log("b"+b)
//           numbers.splice(i+1,1,a);
//           console.log(numbers);
//           numbers.splice(i,1,b);
//           console.log(numbers);
//       default:
//       }
// }
// if (i=8) {
//   let i=1;
// }
// for (let i = 1; i < 10; i++) {
//   console.log("i"+i);
//   let a=numbers[i]
//   let b=numbers[i+1]
//   switch (a>b) {
//     case true:
//         console.log("a"+a)
//         console.log("b"+b)
//         numbers.splice(i+1,1,a);
//         console.log(numbers);
//         numbers.splice(i,1,b);
//         console.log(numbers);
//     default:
//     }
//   }
//   if (i=7) {
//     let i=1;
//   }
//   for (let i = 1; i < 10; i++) {
//     console.log("i"+i);
//     let a=numbers[i]
//     let b=numbers[i+1]
//     switch (a>b) {
//       case true:
//           console.log("a"+a)
//           console.log("b"+b)
//           numbers.splice(i+1,1,a);
//           console.log(numbers);
//           numbers.splice(i,1,b);
//           console.log(numbers);
//       default:
//       }
//     }
//     if (i=6) {
//       let i=1;
//     }
//     for (let i = 1; i < 10; i++) {
//       console.log("i"+i);
//       let a=numbers[i]
//       let b=numbers[i+1]
//       switch (a>b) {
//         case true:
//             console.log("a"+a)
//             console.log("b"+b)
//             numbers.splice(i+1,1,a);
//             console.log(numbers);
//             numbers.splice(i,1,b);
//             console.log(numbers);
//         default:
//         }
//       }


      //from nirmal
var nums=[5,0,9,1,7,4,2,6,3,8];
j=0;
do  {
swapped=false;

  swapped=false;
  for (let i=0; i<nums.lenght;i++){
    if (nums[i]>nums[i+1]){
      temp=nums[i];
      nums[i]=nums[i+1];
      nums[i+1]=temp;
      swapped=true;
    }
  }
    j=j+1;
    console.log('Pass '+j.tostring()+' \t'+nums.tostring());
} while (swapped==true);

console.log(nums);

