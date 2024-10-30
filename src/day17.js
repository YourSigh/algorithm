// 原题链接：https://leetcode.cn/problems/container-with-most-water/description/?envType=problem-list-v2&envId=2cktkvj

/**
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 * 说明：你不能倾斜容器。
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let max = 0;
    while(left < right) {
        let water = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, water);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};