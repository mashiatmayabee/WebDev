

// const fetchData = callback => {
//   setTimeout(() => {
//     callback('done');
//   }, 1500);
// };
// setTimeout(() => {
//  console.log('timer is done!');
//  fetchData(text => {
//    console.log(text);
//  });

// }, 2000);

const fetchData= () => {
  const promise = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
      resolve('Done');
    }, 1500);
  });
  return promise;
};
setTimeout(()=>{
  console.log('Timer is done');
  fetchData()
  .then(text=>{
    return fetchData();
  })
  .then(text2 => {
    console.log(text2);
  });
}, 2000);

console.log('hello');
console.log('hello');