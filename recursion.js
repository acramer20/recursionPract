/** product: calculate the product of an array of numbers. */

function product(nums, idx=0) {
if(idx === nums.length) return 1;
return nums[idx] * product(nums, idx + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, currLongest = 0) {
if(idx === words.length) return currLongest;
if(words[idx].length > currLongest){
  currLongest = words[idx].length;
}
return longest(words, idx + 1, currLongest)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, newStr="") {
if(idx >= str.length) return newStr;
newStr += str[idx]
return everyOther(str, idx +2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
let left = idx;
let right = str.length - 1 - idx;
if(left >= right) return true;
if(str[left] !== str[right]) return false;
return isPalindrome(str, idx + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
if(idx === arr.length) return -1;
if(arr[idx] === val) return idx;
return findIndex(arr, val, idx + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, newStr = "", idx = 0) {
if(newStr.length === str.length) return newStr;
newStr += str[str.length - 1 - idx];
return revString( str, newStr, idx + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
let arr = [];
for (let key in obj){
  if(typeof obj[key] === "string") arr.push(obj[key]);
  if(typeof obj[key] === "object") arr.push(...gatherStrings(obj[key]));
}
return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
if(val > arr[arr.length - 1] || val < arr[0]) return -1;
if(left > right) return -1;
let middle = Math.floor((right + left)/2);
if(arr[middle] === val){
  return middle;
}
if(arr[middle] > val){
  return binarySearch(arr, val, left, middle-1);
}
return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
