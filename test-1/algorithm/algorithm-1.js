/**
 * 1.两数之和
 * 给定一个整数数组和一个目标值， 找出数组中和为目标值的两个数。
 * 你可以假设每个输入只对应一种答案， 且同样的元素不能被重复利用。
 *  示例:
 *  给定 nums = [2, 7, 11, 15], target = 9
 *  因为 nums[0] + nums[1] = 2 + 7 = 9
 *  所以返回[0, 1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                let child = nums[j];
                if (target - item == child) {
                    arr.push(i)
                    arr.push(j)
                    return arr
                }
            }
        }
    }
};
console.log(twoSum([3, 2, 4], 6))



/**
 * 2.三数之和
 * 
 * 给定一个包含 n 个整数的数组 nums， 判断 nums 中是否存在三个元素 a， b， c， 
 * 使得 a + b + c = 0？ 找出所有满足条件且不重复的三元组。
 * 注意： 答案中不可以包含重复的三元组。
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 满足要求的三元组集合为：
 * [[-1, 0, 1], [-1, -1, 2]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let z = j + 1; z < nums.length; z++) {
                if (nums[i] + nums[j] + nums[z] === 0) {
                    if (arr.length > 0) {
                        arr.map(item => {
                            if (item.indexOf(nums[i]) < 1 && item.indexOf(j) < 1 && item.indexOf(z) < 1) {
                                arr.push([nums[i], nums[j], nums[z]])
                            }
                        })
                    } else {
                        arr.push([nums[i], nums[j], nums[z]])
                    }
                }
            }
        }
    }
    return arr
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]))