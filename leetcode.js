// ! 35. Search Insert Position
/* function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    console.log(left);
}
console.log(binarySearch([1,2,4,5], 6)); */

// ! 69. Sqrt(x)
/* function mySqrt(x) {
    let left = 0;
    let right = x;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right;
}
console.log(mySqrt(25)); */