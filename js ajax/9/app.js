// async function myFucn() {
//   const promise = new Promise((reslove, reject)=>{
//     setTimeout(()=>reslove('hello'),1000);
//   });
  
//   const error = true;
  
//   if(!error){
//     const res = await promise //wait until promise is resloved
//     return res
//   }else{
//     await Promise.reject(new Error('something went wrong'))
//   };
  
  
// }
// myFucn()
// .then(res => console.log(res))
// .catch(err => console.log(err))

async function getUsers() {
  // await response of the fetch call
  const respoone = await fetch('https://jsonplaceholder.typicode.com/users');


  // only proceed once its resolved
  const data = await respoone.json();

  // only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users))