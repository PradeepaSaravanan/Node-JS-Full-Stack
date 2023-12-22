let arr=[1,2,3,-4,-1,4]
let temp1=[];
let temp2=[];
let p=0;
let q=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
       temp1[p++]=arr[i]
    }
    else
    temp2[q++]=arr[i]
}
console.log(temp1,temp2)
var ans=[];
let a=0;
let m;

for(let i=0;i<temp1.length && temp2.length;i++){
          ans[a++]=temp1[i];
          ans[a++]=temp2[i];
          m=i;
}
m=m+1
while(m<temp2.length){
    ans[a++]=temp2[m++]
}
while(m<temp1.length){
    ans[a++]=temp1[m++]
}
console.log(ans)
