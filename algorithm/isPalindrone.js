let isPalindrone = (letter) => {
    let arr = letter.split('');
    let right = arr.length -1;
    let left = 0;
    
    while(right > left){
        if(arr[right] === arr[left]){
            right--;
            left++;
        }else{
            return false;
        }
    }
    return true
}

console.log(isPalindrone('wwwawawww'))
console.log(isPalindrone('wwwa00awww'))
console.log(isPalindrone('wwwawaw1ww'))

