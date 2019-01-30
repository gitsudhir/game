console.log('from main.js');
var tt=0;
let t=setInterval(
()=>{document.getElementById('time').innerHTML= ""+ tt++ ; }
    ,1000);