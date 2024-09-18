// 原题链接：https://leetcode.cn/problems/course-schedule/description/?envType=problem-list-v2&envId=2cktkvj

/**
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
 * 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
 * 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
 * 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
 */

/**
 * 判断是否可以完成所有课程
 * @param {number} numCourses - 课程数量
 * @param {number[][]} prerequisites - 课程的先修关系
 * @return {boolean} - 是否可以完成所有课程
 */
var canFinish = function(numCourses, prerequisites) {
    // 创建一个图，用于表示课程之间的依赖关系
    let graph = new Array(numCourses).fill(0).map(() => new Array());
    // 创建一个数组，用于记录每个课程的入度（被依赖的次数）
    let indegree = new Array(numCourses).fill(0);

    // 构建图和入度数组
    for (let [a, b] of prerequisites) {
        graph[b].push(a); // 课程 b 是课程 a 的先修课程
        indegree[a]++;    // 课程 a 的入度加 1
    }

    // 创建一个队列，用于存储入度为 0 的课程
    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] == 0) {
            queue.push(i); // 将所有入度为 0 的课程入队
        }
    }

    // 记录已经完成的课程数量
    let count = 0;
    // 进行拓扑排序
    while (queue.length) {
        let selected = queue.shift(); // 从队列中取出一个课程
        count++; // 已完成课程数量加 1
        // 遍历当前课程的所有后续课程
        for (let to of graph[selected]) {
            indegree[to]--; // 后续课程的入度减 1
            if (indegree[to] == 0) {
                queue.push(to); // 如果后续课程的入度为 0，则将其入队
            }
        }
    }

    // 如果已完成的课程数量等于课程总数，则说明可以完成所有课程
    return count == numCourses;
};
