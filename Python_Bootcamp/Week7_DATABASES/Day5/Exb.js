// let message='';
// function checkAge(age) {
//     if (age < 18) {
//       const message = "Sorry, you're too young.";
//     } else {
//       const message = "Yay! You're old enough!";
//     }
//     return message;
//   }
//   console.log(checkAge(21));


// function numbers() {
//     for (let i = 0; i < 5; i += 1) {
//       console.log(i);
//     }
//       console.log(i);
//   }
//   numbers();


  function multiply(a, b = 1) {
    return a * b;
  }
  console.log(multiply(5, 2));
  //expected output: 10
  console.log(multiply(5));
  //expected output: 5


//   function getFee(isMember) {
//     return (isMember ? "$2.00" : "$10.00");
//   }
//     console.log(getFee(true));
//   // expected output: "$2.00"
//     console.log(getFee(false));
//   // expected output: "$10.00"
//     console.log(getFee(1));
//   // expected output: "$2.00"
//   // because Boolean(1) is true