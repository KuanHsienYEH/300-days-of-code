let maxSum = function(arr,size){
   if(size > arr.length){
       return null;
   }
   let maxValue = 0;
   for(let i=0; i<size; i++){
    maxValue += arr[i];
   }
   let tmpValue = maxValue;
   for(let j=size; j<arr.length; j++){
    tmpValue = tmpValue + arr[j] - arr[j-size];
    if(tmpValue>maxValue){
        maxValue = tmpValue;
    }
   }
   console.log(maxValue);
   return maxValue;
}
maxSum([2,7,3,0,6,1,-5,-12,-11],3)



