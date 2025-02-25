// Create a new element and store it in a variable.
var newEl = document.createElement('li');

// Create a text node and store it in a variable.
var newText = document.createTextNode('quinoa');

// Attach the new text node to the new element.
newEl.appendChild(newText);
function addItem(){
  var nextItemText = document.getElementById('new-item').value;
  if (nextItemText){
    var newEl = document.createElement('li');
    var newText=document.createTextNode(newItemText);
    

// Find the position where the new element should be added.
var position = document.getElementsByTagName('todo')[0];

// Insert the new element into its position.
position.appendChild(newEl);
document.getElementById('new-item').value='';
  }
}
    
