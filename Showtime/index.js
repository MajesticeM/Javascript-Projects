var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var display=document.getElementById('show');
display.innerHTML=time;
console.log(time);