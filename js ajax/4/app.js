
const http = new easyHTTP;

// ----------------------

// Get posts

// http.get('https://jsonplaceholder.typicode.com/posts', function(response){
//   console.log(response); 
// })

// ----------------------

// // Create Data


// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err, response){
//   if (err){
//     console.log(err)
//   }else{
//     console.log(response)
//   }
// })

// ----------------------

// // update Post
// const data = {
//   title : 'Custom Post',
//   body  : 'this is a custom post'
// };

// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function (err, response) {
// if(err){
//   console.log(err)
// }else{
//   console.log(response)
// }
// })


// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err,response){
if(err){
  console.log(err)
}else{
  console.log(response)
}
})