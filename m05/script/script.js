var table = prompt("Please input a value");            // Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';              // Message

if (table < 1 || table > 10){
  table =0;
}
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
