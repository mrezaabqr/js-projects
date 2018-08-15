document.getElementById('button').addEventListener('click',loadData);


function loadData() {
  // Create an XHR Object
  
  const xhr = new XMLHttpRequest();
  

  console.log('Ready state' , xhr.readyState)
  // Open
  xhr.open('GET', 'data.txt', true);
  
  console.log('Ready state' , xhr.readyState)

  xhr.onload = function () {
    console.log('Ready state' , xhr.readyState)
    if(this.status === 200 ){
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }


  xhr.onerror = function () {
    console.log('something goes wrong')
  }


  xhr.onprogress = function(){
    console.log('Ready state - onprogress' , xhr.readyState)
  }
  
  
  // xhr.onreadystatechange = function () {
  //   console.log('Ready state' , xhr.readyState)
  
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText)
  //   }
  // }
  
  xhr.send();
  
  
  
  // Ready state Values
  // 0 : request not initialized
  // 1 : server connection established
  // 2 : request received
  // 3 : processing request 
  // 4 : request finished and response is ready
  
  
  // HTTP Statuses
  // 200 : OK
  // 403 : Forbidden
  // 404 : Not Found
  
  
}