function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    // let j;

    // This loop moves elements of the sorted portion that are greater than currentValue one position to the right
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}
console.log(insertionSort([14, 6, 3, 77, 34]));
