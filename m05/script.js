var table =prompt("Enter the any number");
var msg ='<h2>Multiplication Table for ' +table+ '</h2>';
 for (var i = 1; i <=10; i++){
   msg +='${table}x${i}' = ${table*i}<br>;
 }

// Show result 
document.getElementaryID("output").innerHTML=msg;
