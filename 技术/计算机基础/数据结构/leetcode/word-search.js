/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 function exist(board, word) {
    var isExist = false;
    var m = board.length, n = board[0].length;
    for (var i=0; i<m; i++) {
        if (isExist) break;
        for (var j=0; j<n; j++) {
            if (isExist) break;
            if (isSameWord(board[i][j], word[0])) {
                startWalkFrom(i, j, [[i, j]]);
            }
        }
    }
    function isSameWord (a, b) {
        return a === b;
        // return a.toUpperCase() === b.toUpperCase();
    }
    function startWalkFrom (x, y, paths = []) {
        if (isExist) return;
        var curWord = paths.map(([i, j]) => board[i][j]).join('');
        if (isSameWord(curWord, word)) {
            isExist = true;
            return;
        }
        const nextIndex = paths.length;
        if (nextIndex === word.length) return;
        // possible nodes
        const nextNodes = [[x, y-1], [x, y+1], [x-1, y], [x+1, y]].filter(([i, j]) => {
            if (board[i] == null || board[i][j] == null) return false;
            // visited
            if (paths.find(p => p[0] === i && p[1] === j) !== undefined) return false;
            if (!isSameWord(board[i][j], word[nextIndex])) return false;
            return true;
        });
        nextNodes.forEach(([i, j]) => {
            startWalkFrom(i, j, [...paths, [i, j]]);
        });
    }
    return isExist;
};

// var board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";
var board = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]]
var word = "ABCESEEEFS"
console.log(exist(board, word));