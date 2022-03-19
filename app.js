const schedule = require('node-schedule')
let i = 1
function trigger(s) {
    let t= len* 1000;

  //
  setTimeout(() => {
    console.log(reverse(s));
  }, t);
}


// this function take argument string reverse it return it
function reverse(s) {
  return s.split("").reverse().join("").toLowerCase();
}
 
 

 const task = schedule.scheduleJob('*/2 * * * * *', () => { 
  
     if(i >=10) {
        schedule.cancelJob(task);
     }
    console.log(`"text":${i} ksat`);
    i++;
    console.log(`"date":`, new Date());

})

