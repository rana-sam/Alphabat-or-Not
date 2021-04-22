let lo=0;

let uper='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let check= prompt("Enter any Charcter: ");
for(var x=0;x<uper.length; x++)
{
    if(check.indexOf(uper[x])!== -1)
    {
        lo=1
        break;
    }

    
}
if(lo==1){

    console.log(check+" Is alphabat")
}
else {
    console.log(check+" Is not alphabat")
}
