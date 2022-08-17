/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    var rows = [];
    var cols = [];
    matrix.forEach((row, i) => {
        row.forEach((col, j) => {
            if (col === 0) {
                rows.push(i);
                cols.push(j);
            }
        });
    });
    matrix.forEach((row, i) => {
        var rowIncluded = rows.includes(i);
        row.forEach((col, j) => {
            if (rowIncluded || cols.includes(j)) matrix[i][j] = 0;
        });
    });
    return matrix;
};

var matrix = [[1,1,1],[1,0,1],[1,1,1]];
console.log(setZeroes(matrix));