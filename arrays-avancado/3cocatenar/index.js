const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
//const nums3 = nums1.concat(nums2, [7, 8, 9], "Luiz")
// ... rest -> ... spread
const nums3 = [...nums1, ...nums2, ...[7, 8, 9], "São legais"]
console.log(nums3)