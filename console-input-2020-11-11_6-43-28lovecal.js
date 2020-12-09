prompt("Input your name");
prompt("Input the partner's name");
var b = Math.random();
b = b * 100;
if(b <= 30){
alert("Your love compatibility is very low, at " + Math.round(b) +"%");
}
if(30<= b <= 60){
  alert("Your love compatibility is hopeful, at " + Math.round(b) +"%");
}
else{
  alert("This love is going places, with a score of " + Math.round(b) +"%")
}
