/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    function checkCellsValid (isCol) {
        let i=0, isValid = true;
        // row
        while (i<9) {
            if (!isValid) break;
            let j=0, res = 0, arr = [];
            // col
            for (; j<9; j++) {
                const cur = isCol ? board[j][i] : board[i][j];
                if (cur === '.') continue;
                if (arr.includes(cur)) {
                    isValid = false;
                    break;
                }
                arr.push(cur);
            }
            i++;
        }
        if (!isValid) console.log('checkCellsValid', isCol, i);
        return isValid;
    }
    function checkSubCellsValid () {
        let isValid = true;
        const centers = [
            [1,1], [1,4], [1, 7],
            [4,1], [4,4], [4, 7],
            [7,1], [7,4], [7, 7]
        ];
        centers.forEach(([row, col]) => {
            if (!isValid) return;
            const items = [
                [row-1,col-1], [row-1,col], [row-1, col+1],
                [row,col-1], [row,col], [row, col+1],
                [row+1,col-1], [row+1,col], [row+1, col+1],
            ].map(([x,y]) => board[x][y]).filter(cur => cur !== '.');
            if (items.length !== (new Set(items)).size) {
                isValid = false;
                return;
            }
        });
        if (!isValid) console.log('checkSubCellsValid');
        return isValid;
    }
    return checkCellsValid() && checkCellsValid(true) && checkSubCellsValid();
};

const case1 = [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

isValidSudoku(case1);