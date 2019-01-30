console.log('from main.js');
function start(ths){
var tt=0;    
if(ths.innerHTML==="Start"){
    ths.innerHTML="Restart";
    var  t=setInterval(
        ()=>{document.getElementById('time').innerHTML= ""+ tt++ ; }
            ,1000);
 
}else{
    console.log('from else')
}
}
    