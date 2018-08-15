document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e){
  const ul = document.querySelector('.jokes');
  const number =  document.querySelector('input[type="number"]').value;  
  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  
  xhr.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      
      let output = '';
      
      if(response.type ==='success'){
        response.value.forEach(element => {
          output += `<li> ${element.joke} </li>`;
        });
      }else{
        output += '<li>Some thing went wrong</li>'
      }
      ul.innerHTML = output;
    };
  }
  
  xhr.send();
  e.preventDefault();
};