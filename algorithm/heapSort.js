let heapSize;
let a=[15, 3, 17, 18, 20, 2, 1, 666];
heapSort()
console.log(a)

function buildMaxHeap(){
    heapSize = a.length-1;
    for(let i = Math.floor(heapSize/2); i>=0 ; i--){
        maxHeapify(i)
    }
}
function maxHeapify(i){
    let largest;
    let l = i*2+1;
    let r = i*2+2;
    if(heapSize >= l && a[l]>a[i]){
        largest = l
    }else{
        largest = i
    }
    if(heapSize >= r && a[r]>a[largest]){
        largest = r
    }
    if(largest != i){
        let temp = a[i];
        a[i] = a[largest];
        a[largest] = temp;
        maxHeapify(largest);
    }
}
function heapSort(){
    buildMaxHeap();
    for(let i = a.length-1 ; i>=0 ; i--){
        let temp = a[0];
        a[0] = a[i];
        a[i] = temp;
        heapSize --;
        maxHeapify(0)
    }
    return a;
}