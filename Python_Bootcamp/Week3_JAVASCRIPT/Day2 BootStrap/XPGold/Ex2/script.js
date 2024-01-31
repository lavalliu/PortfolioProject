let str1 = "mix";
let str2 = "pod";

console.log (str2.substr(0,2)+str1.substr(2,1));
console.log (str1.substr(0,2)+str2.substr(2,1));

let str3 = (str2.substr(0,2)+str1.substr(2,1)) + " " +(str1.substr(0,2)+str2.substr(2,1))

console.log (str3);