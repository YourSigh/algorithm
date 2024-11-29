// 原题链接：https://leetcode.cn/problems/merge-intervals/
/**
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let arr = intervals.sort((a, b) => a[0] - b[0]);
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (ans.length && ans[ans.length - 1][1] >= arr[i][0]) {
            ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], arr[i][1]);
        } else {
            ans.push(arr[i]);
        }
    }
    return ans;
};