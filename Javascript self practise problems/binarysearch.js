console.log("my first Javascript");
var arr=[12,57,18,48,50,23,19];
/*
function binarySearch(arr,target){
    var start=0;
    var end=arr.length-1;
    //var mid=0;
    while(start<=end){
      var mid=Math.floor((start+end)/2);
        if(arr[mid]==target) 
        {
            return mid;}
        else if(arr[mid]<target){
        start=mid+1;
    }
        else {
        end=mid-1;
    }

        
    }
    return -1;
}
console.log(binarySearch(arr,19));
 */
function binarySearch(arr,target){
    var start=0;
    var end=arr.length-1;
    while(start<=end){
        var mid= Math.floor((start+end)/2);
        if(arr[mid]==target) {
            return mid;
        }
        else if(arr[mid]>target){
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
    return -1;

}
console.log(binarySearch(arr,23));