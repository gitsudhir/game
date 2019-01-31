console.log('from main.js');
function start(ths){ //////---mainfunction------////////
var tt=0;    
if(ths.innerHTML==="Start"){
    deleteAll()
   // random()
    start1()
    ths.innerHTML="Restart";
    
    var  t=setInterval(
        ()=>{document.getElementById('time').innerHTML= ""+ tt++ ; }
            ,1000);

 
}else{
    window.location.reload();
    console.log('from else')
}
}
    function start1(){ /////---- if space is empty then click event will work ------//////////
       
   var A=document.getElementsByClassName('flex-main')
   for(var a of A){
     for(var aa of a.children){
        
        aa.addEventListener('click',(aaa)=>{
           // console.log(aaa.target.innerHTML) ;
           if( parseInt(aaa.target.innerHTML) >0 ){
               console.log('you clicked on wrong box')
           }else{
           
           if( parseInt(Math.random()*10)>=8){ ///////////////------red block-----////////
               console.log('you Lost')
             if(aaa.target.hasAttribute('class')){aaa.target.removeAttribute('class')}
             aaa.target.className='red'
               document.getElementById('left').innerHTML= parseInt(document.getElementById('left').innerHTML) -1
               if(parseInt(document.getElementById('left').innerHTML)==0){
                   alert('your score is '+document.getElementById('time').innerHTML )
                   document.getElementById('left').innerHTML ="<strong>Score : "+ document.getElementById('time').innerHTML +"</strong>"
               }
            }else{
                random()
            }
        
        }
         },false)
         
     }   
   }
    }

    function deleteAll(){ /////////--------for empty all blocks --------///////////
        var A=document.getElementsByClassName('flex-main')
        for(var a of A){
          for(var aa of a.children){
             aa.innerHTML=" " 
          }   
        }
       
      
         }
    function random(){
        var A=document.getElementsByClassName('flex-main')
        for(var a of A){
          for(var aa of a.children){
            if( parseInt(Math.random()*10)===1){
                aa.innerHTML=""+(1+parseInt(Math.random()*10))
                if(aa.hasAttribute('class')){aa.removeAttribute('class')}
            }else{
                aa.innerHTML=" " 
                aa.className='change'
          }
          
        }   
        }
       
         }

        