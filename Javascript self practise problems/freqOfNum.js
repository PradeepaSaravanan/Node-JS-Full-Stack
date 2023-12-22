var arr=[0,5,5,5,2]
let count=0;
let k=5;
for (let x = 0; x < arr.length; x++) {
    if(arr[x]==k){
        count=count+1;
    }
    
}
console.log(count);