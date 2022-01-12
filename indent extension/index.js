loadevents();
function loadevents(){
    document.getElementById('beautify').addEventListener("click",format);
}
function format(e)
{
    let c=document.querySelector('textarea');
    console.log(c.value);
    var  a=c.value;
    var  b="";
    let count=0;
    for(let i=0;i<a.length;i++)
        {
            if(a[i]=='{')
                count++;
            else if(a[i]=='}')
                count--;
            
            if(a[i]==')' && a[i+1]=='{')
            {    b+=a[i];
                 b+="\n";
                for(let j=0;j<count-1;j++)
                     b+="  ";
                 continue;
            }
            if(a[i]=='{' && a[i+1]=='}')
            {    for(let j=0;j<count-1;j++)
                     b+="  "; 
                b+=a[i];
                 b+="\n";
              for(let j=0;j<count-1;j++)
                     b+="  ";
               
                 continue;
            }
             if(a[i]=='}' && a[i+1]=='}')
            {    for(let j=0;j<count-1;j++)
                     b+="\n  "; 
                b+=a[i];
                 b+="\n";
              for(let j=0;j<count-1;j++)
                     b+="  ";
               
                 continue;
            }
            
            
            b+=a[i];
           
        }
     console.log(b);
     c.value=b;
//      document.querySelector('#text').innerText=" "+b;
}