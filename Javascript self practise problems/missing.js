let arr=[ 4, 1, 3]

let n=5;
let x=1
//let miss=[];
let j=0;
while(x<=n){
    let present=false;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==x)
        { 
          present=true;
        } 
    }
    if(present==false){
        console.log(x);
        break;
    }
    /*
    if the missing number is more than one
   if(flag==false){
     miss[j++]=x;
   
   }*/
   
x++;
}
//console.log(miss);
