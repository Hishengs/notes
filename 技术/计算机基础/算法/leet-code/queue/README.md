# 队列

## 队列的实现

```js
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = new Array(k);
    this.head = this.tail = -1;
    this.size = k;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;
    if (this.isEmpty()) this.head = this.tail = 0;
    else {
        let next = this.tail + 1;
        next = next > (this.size - 1) ? 0 : next;
        this.tail = next;
    }
    this.queue[this.tail] = value;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;
    delete this.queue[this.head];
    if (this.head === this.tail) {
        this.head = this.tail = -1;
    } else {
        let next = this.head + 1;
        next = next > (this.size - 1) ? 0 : next;
        this.head = next;
    }
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.queue[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return (this.head === -1 && this.tail === -1);
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return (this.head === 0 && this.tail === (this.size - 1))
        || this.head - this.tail === 1;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

// 测试用例

const circularQueue = new MyCircularQueue(3);
console.log(circularQueue.Front());  // 返回 -1
console.log(circularQueue.Rear());  // 返回 -1
console.log(circularQueue.enQueue(1));  // 返回 true
console.log(circularQueue.enQueue(2));  // 返回 true
console.log(circularQueue.Front());  // 返回 1
console.log(circularQueue.enQueue(3));  // 返回 true
console.log(circularQueue.enQueue(4));  // 返回 false，队列已满
console.log(circularQueue.Rear());  // 返回 3
console.log(circularQueue.isFull());  // 返回 true
console.log(circularQueue.deQueue());  // 返回 true
console.log(circularQueue.enQueue(4));  // 返回 true
console.log(circularQueue.Rear());  // 返回 4
console.log(circularQueue.deQueue());  // 返回 true
console.log(circularQueue.deQueue());  // 返回 true
console.log(circularQueue.deQueue());  // 返回 true
console.log(circularQueue.Front());  // 返回 -1
console.log(circularQueue.Rear());  // 返回 -1
console.log(circularQueue.enQueue(1));  // 返回 true
```

## 常见题目
- [622. 设计循环队列](https://leetcode-cn.com/problems/design-circular-queue/) (Mediumn)