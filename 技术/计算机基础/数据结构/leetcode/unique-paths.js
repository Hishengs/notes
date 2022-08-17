// https://leetcode.com/problems/unique-paths/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    let count = 0;
    function startWalkFrom (x, y) {
        if (x == m-1 && y == n-1) {
            count++;
            return;
        }
        // possible nodes
        const nextNodes = [[x, y+1], [x+1, y]].filter(([i, j]) => {
            if (i>m-1 || j>n-1) return false;
            return true;
        });
        nextNodes.forEach(([i, j]) => {
            startWalkFrom(i, j);
        });
    }
    startWalkFrom(0, 0);
    return count;
};

console.log(uniquePaths(23,12));