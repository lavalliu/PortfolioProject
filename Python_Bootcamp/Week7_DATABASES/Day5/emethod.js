function isCanine(element, index, arr) {
  console.log("Checking if " + arr[index] + " is a canine.")
  return (element == "dog" || element == "doggo")
}

let arr = ["dog", "cat", "doggo"]
console.log(arr.every(isCanine)); 