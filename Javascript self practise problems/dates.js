var arr =[12,3,4,5,1,12,3,]
let n=arr.length;


let map = new Map();
for(let i=0;i<n;i++)
{
 if(map.has(arr[i])){
    let val=map.get(arr[i]);
    map.set(arr[i],val+1);
 }
 else{
    map.set(arr[i],1);
 }
}
 let maxShared=0;
 
for(let [key,value] of map.entries()){
    if(value>maxShared){
      maxShared=value;
      var  maximum=key;
    }
 }
console.log("Most Shared date", maximum);

console.log(findByValue(map,maximum));

let maxValue=Math.max(...map.values());
console.log("maximum value",maxValue)
// let maxKey=Math.max(...map.key());
// console.log("maximum key",maxKey)

function findByValue( map,value){
    const [key]=map.entries(map).find(([key,val]) => val==value)
    return key ||null;
}
let sharedBday=[];
for(let [key,val] of map.entries()){
    if(val>1){
        sharedBday.push(key);
    }
}
console.log(sharedBday)