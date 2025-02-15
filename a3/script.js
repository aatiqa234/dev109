// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
upRight(pHeight, pColorEven, pColorOdd, pSymbol);
downRight(pHeight, pColorEven, pColorOdd, pSymbol);
upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
}
let rhombus="";
for (let i=0; i<height; i++){
  let line="";
  line +="". repeat (height-i-1);
  for (let j=0; j<2 *i+1; j++){
    let color=j%2 ===0? colorEven: colorOdd; 
    line += <span style="color:"></span>;
  }
  rhombus +=line +"\n";
  for (let i=height -2; i>=0; i-- ){
  let line="";
  line +="". repeat (height-i-1);
  for (let j=0; j<2 *i+1; j++){
    let color=j%2 ===0? colorEven: colorOdd; 
    line += <span style="color:"></span>;
  }
  rhombus +=line +"\n";
  }
  document get.ElementByID("rhombusDisplay").innerHTML = rhombus;
}
function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=0;i<pHeight;i++){
rLine +="<p>";
//Create each line on the Rhombus
for(j=0;j<=i;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";
// console.log(rLine);

}

document.getElementById("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=pHeight;i > 0;i--){
rLine +="<p>";
//Create each line on the Rhombus
for(j=0;j<i;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";
// console.log(rLine);

}

document.getElementById("downRight").innerHTML = rLine;
}

function upLeft(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=1;i<=pHeight;i++){
rLine +="<p>";
//Create each line on the Rhombus
for(j=0;j<pHeight;j++){
if (j< pHeight-i){
  rLine +="<span style='color:white;'>"+ pSymbol +"</span>";
}
//Is the position even or odd so we change the color
else if (j%2==0)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";
// console.log(rLine);

}

document.getElementById("upLeft").innerHTML = rLine;
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=1;i<=pHeight;i++){
rLine +="<p>";
//Create each line on the Rhombus
for(j=0;j<pHeight;j++){
if (j< pHeight-i){
  rLine +="<span style='color:white;'>"+ pSymbol +"</span>";
}
//Is the position even or odd so we change the color
else if (j%2==0)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";
// console.log(rLine);

}

document.getElementById("downLeft").innerHTML = rLine;
}
