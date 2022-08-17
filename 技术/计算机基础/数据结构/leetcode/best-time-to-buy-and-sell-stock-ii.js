/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    var n = prices.length;
    if (n === 1) return 0;
    var j=0, k = 0;
    var ranges = [];
    for (var i=0; i<n; i++) {
        if (prices[i] < prices[j]) {
            j = i;
            k = k < j ? j : k;
        }
        if (prices[i] > prices[k]) {
            ranges.push([j, i]);
            j = k = i;
        }
    }
    // 将所有的上升区间累加即可
    return ranges.reduce((acc, [low, high]) => {
        acc += (prices[high] - prices[low]);
        return acc;
    }, 0);
};

const testCases = [
    [1],
    [1,2,3,4,5],
    [7,1,5,3,6,4],
    [7,6,4,3,1],
    [4,2,5,7]
];

testCases.forEach(t => console.log(maxProfit(t)));