let promise = new Promise((resolve, reject) => { 
    // Code to perform the promised task
    let task_performed = true;
    if(task_performed) { 
      resolve('The promised task was performed successfully.'); 
    } else { 
      reject('The promised task was not performed.'); 
    } 
  });  
  promise.then((fromRes) => console.log(fromRes)). 
    catch((fromRej) => console.log(fromRej));