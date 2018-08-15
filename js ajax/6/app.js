document.getElementById('button1').addEventListener('click'
,getText);

document.getElementById('button2').addEventListener('click'
,getJson);

document.getElementById('button3').addEventListener('click'
,getExternal);


function getText() {
  fetch('test.txt').then(function(res){
    return res.text()
  }).then(function(data){
    console.log(data)
    document.getElementById('output').innerHTML = data;
  }).catch(function (err) {
    console.log(err)
  })
}

function getJson() {
  fetch('posts.json').then(function (res) {
    return res.json()
  }).then(function (data) {
    let output = ''
    data.forEach(element => {
      output += `<p>${element.title}</p>
      <p>${element.body}</p>
      `
    });
    document.getElementById('output').innerHTML = output;
  })
}

function getExternal() {
  fetch('https://api.github.com/users').then(function (res) {
    return res.json()
  }).then(function (data) {
    let output = ''
    data.forEach(element => {
      output += `<p>${element.login}</p>
      <p>${element.id}</p>
      `
    });
    document.getElementById('output').innerHTML = output;
  })
}

