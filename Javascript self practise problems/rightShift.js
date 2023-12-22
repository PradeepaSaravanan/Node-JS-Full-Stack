let arr=[10,20,30,40,50,60,70]
let k=2;
let temapArr=[];
let n=arr.length;
let i=n-1;
let p=0;
while(i>(n-k-1)){
    temapArr[p]=arr[i];
    p++;
    i--;
}

//console.log(temapArr);
let e=n-k-1;

while(e>=0){
    arr[e+k]=arr[e];
    e--;
}
//console.log(arr);
let z=k-1;
let x=0;
while(z>=0){
    arr[z]=temapArr[x];
    z--;
    x++;
}


console.log(arr);

