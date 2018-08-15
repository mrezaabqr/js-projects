class EasyHTTP{
  // Make http get request
  get(url){
    return new Promise((reslove, reject)=>{
      fetch(url)
      .then(res => res.json())
      .then(data => reslove(data))
      .catch(err => reject(err))  
    })
    
  }
  
  // Make http post request
  post(url, data){
    return new Promise((reslove, reject)=>{
      fetch(url, {
        method : 'POST',
        headers :{
          'Content-type' : 'application/json'
        },
        body : JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => reslove(data))
      .catch(err => reject(err))  
    }) 
  }
  
  // Make http put request
  put(url, data){
    return new Promise((reslove, reject)=>{
      fetch(url, {
        method : 'PUT',
        headers :{
          'Content-type' : 'application/json'
        },
        body : JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => reslove(data))
      .catch(err => reject(err))  
    }) 
  }
  delete(url, data){
    return new Promise((reslove, reject)=>{
      fetch(url, {
        method : 'DELETE',
        headers :{
          'Content-type' : 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => reslove('Resource deleted'))
      .catch(err => reject(err))  
    }) 
  }
  
}