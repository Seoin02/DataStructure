function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    console.log(`start ${start} mid: ${mid} end: ${end}`);

    if (arr[mid] == target) {
      return mid;
    }

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
}

let target = 5;

let arr = [1, 3, 5, 6];
let idx = binarySearch(arr, target);
console.log(idx);
