function selectionSort(arr){
    var min, sort,
        len = arr.length;
    for(var x = 0; x < len; x++){
        min = x;
        for(var  y = x+1; y<len; y++){
            if(arr[y]<arr[min]){
                min = y;
            }
        }
        sort = arr[x];
        arr[x] = arr[min];
        arr[min] = sort;
    }
    return arr;
}

alert(selectionSort([43,67,2435,89,90]));