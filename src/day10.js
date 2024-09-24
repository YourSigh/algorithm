// 原题链接：https://leetcode.cn/problems/move-zeroes/description/

/**
 * 将数组中的所有 0 移动到末尾，同时保持非零元素的相对顺序
 * 
 * @param {number[]} nums - 一个整数数组
 * @return {void} - 不返回任何值，直接在原数组上进行修改
 */
var moveZeroes = function(nums) {
    // 初始化 left 指针，指向数组的起始位置
    let left = 0;
    
    // 遍历数组中的每个元素
    for (let right = 0; right < nums.length; right++) {
        // 如果当前元素不是零
        if (nums[right] !== 0) {
            // 交换 left 指针和 right 指针指向的元素
            [nums[left], nums[right]] = [nums[right], nums[left]];
            // left 指针向右移动一位
            left++;
        }
    }
    
    // 返回修改后的数组（虽然函数声明为 void，但返回数组有助于调试）
    return nums;
};
