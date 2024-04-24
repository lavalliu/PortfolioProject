let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve(2), 100);
  });
  let promise2 = new Promise((resolve, reject) => {
    resolve(1);
  });
  Promise.race([promise1, promise2]).then((fromRes) => {
    console.log(fromRes);
  });