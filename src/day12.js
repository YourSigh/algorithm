/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let val = [1,...nums, 1];
    let dp = new Array(val.length).fill(0).map(() => new Array(val.length).fill(0));
    for(let i = val.length - 3; i >= 0; i--) {
        for(let j = i + 2; j < val.length; j++) {
            for(let k = i + 1; k < j; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + val[i] * val[k] * val[j]);
            }
        }
    }
    return dp[0][val.length - 1];
};

// 首先，动态规划是一个自底向上的过程，我们有了之前的状态，就可以计算出更大的状态，并且更大的状态不会影响到之前的状态
// 假设，我们已经得到了之前所有区间的最大硬币数，那我们现在要扩大一个区间，是不是就要添加一个气球，然后计算这个区间的最大硬币数
// 所以我们要看这个气球放到哪里才是最大的
// 这道题dp[i][j]的含义是从i到j的最大硬币数量(不包括i，j)，然后k是i到j之间的一个气球，他是这个区间里面最后被戳破的那个，也就是放进去的那个
// 所以我们要计算dp[i][j]，就要计算dp[i][k] + dp[k][j] + val[i] * val[k] * val[j]
// 因为我们是自底向上的，所以之前的dp[i][k]和dp[k][j]都已经计算过了，所以我们可以直接使用，所以状态转移方程也就是
// dp[i][j] = max(dp[i][j], dp[i][k] + dp[k][j] + val[i] * val[k] * val[j])

console.log(maxCoins([3,1,5,8]));