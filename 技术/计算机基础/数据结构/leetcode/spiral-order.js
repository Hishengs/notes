/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const visited = [];
    let done = false;
    const visitedKeys = {};
    function push (row, col) {
        if (row < 0 || col < 0) return;
        if (matrix[row] == null) return;
        const key = row + '_' + col;
        if (visitedKeys[key]) return;
        const num = matrix[row][col];
        if (num == null) return;
        if (visited.length >= m*n) {
            done = true;
            return;
        }
        visited.push(num);
        visitedKeys[key] = true;
    }
    function visit (p1, p2, p3, p4) {
        if (done) return;
        // left => right
        let i=p1[1];
        while (i<=p2[1]) {
            push(p1[0], i);
            i++;
        }
        if (p2[0] === p3[0]) return;
        // top => down
        i=p2[0]+1;
        while (i<=p3[0]) {
            push(i, p2[1]);
            i++;
        }
        // right => left
        i=p3[1]-1;
        while (i>=p4[1]) {
            push(p3[0], i);
            i--;
        }
        if (p3[1] === p4[1]) return;
        // down => left
        i=p4[0]-1;
        while (i>p1[0]) {
            push(i, p4[1]);
            i--;
        }
        // new visit
        p1 = [p1[0]+1, p1[1]+1];
        if (matrix[p1[0], p1[1]] == null) return;
        p2 = [p2[0]+1, p2[1]-1];
        p3 = [p3[0]-1, p3[1]-1];
        p4 = [p4[0]-1, p4[1]+1];
        visit(p1, p2, p3, p4);
    }
    visit([0, 0], [0, n-1], [m-1, n-1], [m-1, 0]);
    return visited;
};

var matrix = [[2,5],[8,4],[0,-1]]
// var matrix = [[1,2],[3,4],[5,6],[7,8]];
// var matrix = [[1,2,3],[4,5,6],[7,8,9]];
// var matrix = [[1,2,3],[4,5,6],[44,55,66],[7,8,9]];
// var matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralOrder(matrix));