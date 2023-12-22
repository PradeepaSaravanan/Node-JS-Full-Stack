var arr=[1,2,3,4,3,3,3,6,7];

var birthdate=8;
var count=0;
for(var i=0;i<arr.length;i++){
 if(arr[i]==birthdate){
    count++;
 }
}
console.log(count);