var ul = document.createElement('ul');
var li1 = document.createElement('li');
var li2 = document.createElement('li');

ul.className = 'list-group';
li1.className = 'list-group-item';
li2.className = 'list-group-item';

li1.textContent = 'item one';
var liTextNode = document.createTextNode("item two");
li2.appendChild(liTextNode);

ul.appendChild(li1);
ul.appendChild(li2);


var row = document.getElementsByClassName('row');
row[0].children[0].appendChild(ul);
row[0].children[1].appendChild(ul);


var col = document.getElementsByClassName('col-md-12')[1];
console.log(col);
var a = document.createElement('a');
a.id = 'roo';


a.setAttribute('href', 'http://roocket.ir');
a.textContent = 'please click me to show fucking roocket site ';
col.insertBefore(a, col.childNodes[1]);
var roocket = document.getElementById('roo');
roocket.addEventListener('click', function (event) {
    event.preventDefault()
});

