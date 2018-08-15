document.getElementById('button1').addEventListener('click', loadCustomer);
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'customer.json', true);
  
  xhr.onload = function () {
    if(this.status === 200 ){
      const customer = JSON.parse(this.responseText);
      // console.log(customer)
      const output = `
      <ul>
      <li>ID: ${customer.id}</li>
      <li>Name: ${customer.name}</li>
      <li>Company: ${customer.company}</li>
      <li>Phone: ${customer.phone}</li>
      </ul>
      `
      
      document.getElementById('customer').innerHTML = output
    }
  }
  
  xhr.send();
};


document.getElementById('button2').addEventListener('click', loadCustomers);
function loadCustomers(e){
  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'customers.json', true);
  
  xhr.onload = function () {
    if(this.status === 200){
      const customers = JSON.parse(this.responseText);
      let output = '';
      customers.forEach(element => {
        output += `
        <ul>
        <li>ID: ${element.id}</li>
        <li>Name: ${element.name}</li>
        <li>Company: ${element.company}</li>
        <li>Phone: ${element.phone}</li>
        </ul>
        `        
      });
      document.getElementById('customers').innerHTML += output;
    };
  }
  
  xhr.send();
}