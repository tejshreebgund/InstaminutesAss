const schedule = require('node-schedule')
function Trigger(str) {
  let len = str.length;
  let t= len* 1000;

  //
  setTimeout(() => {
    console.log(reverse(str));
  }, t);
}


// this function take argument string reverse it return it
function reverse(str) {
  return str.split("").reverse().join("").toLowerCase();
}
 
 
let i = 1
 const task = schedule.scheduleJob('*/2 * * * * *', () => { 
  
     if(i >=10) {
        schedule.cancelJob(task)
     }
    console.log(`"text":${i} ksat`)
    i++
    console.log(`"date":`, new Date())

})

