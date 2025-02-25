var newEl = document.createElement('li');

var newText = document.createTextNode('quinoa');

newEl.appendChild(newText);
var position = document.getElementById('todo');

position.appendChild(newEl);

function addItem() {
  var nextItemText = document.getElementById('new-item').value;
  
    if (nextItemText) {
        var newEl = document.createElement('li');
    
        var newText = document.createTextNode(nextItemText);

        newEl.appendChild(newText);

        var position = document.getElementById('todo');

    
    position.appendChild(newEl);

        document.getElementById('new-item').value = '';
  }
}
