# 树

## DFS
Depth First Search 深度优先算法

> 深度优先搜索算法（英语：Depth-First-Search，DFS）是一种用于遍历树或图的算法。沿着树的深度遍历树的节点，尽可能深的搜索树的分支。当节点 v 的所在边都己被探寻过，搜索将回溯到发现节点 v 的那条边的起始节点。这一过程一直进行到已发现从源节点可达的所有节点为止。如果还存在未被发现的节点，则选择其中一个作为源节点并重复以上过程，整个进程反复进行直到所有节点都被访问为止，属于盲目搜索。


DFS 可分为先序、中序、后序三种遍历方式：

- 先序 pre-order
- 中序 in-order
- 后序 post-order

先模拟构造一棵树：
```js
const tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4
        },
        right: {
            val: 5
        },
    },
    right: {
        val: 3,
        left: {
            val: 6
        },
        right: {
            val: 7
        },
    }
}
```

先序 pre-order
```js
const res = [];
function preOrderDFS(root) {
  if (!root) return;
  res.push(root.val);
  if (root.left) preOrderDFS(root.left);
  if (root.right) preOrderDFS(root.right);
}

preOrderDFS(tree)
console.log(res);
```

中序 in-order
```js
function inOrderDFS(root) {
  if (!root) return;
  if (root.left) inOrderDFS(root.left);
  res.push(root.val);
  if (root.right) inOrderDFS(root.right);
}
```

后序 post-order
```js
function postOrderDFS(root) {
  if (!root) return;
  if (root.left) postOrderDFS(root.left);
  if (root.right) postOrderDFS(root.right);
  res.push(root.val);
}
```

非递归实现方式：

> 使用栈 (stack) 巧妙实现非递归 DFS

先序 pre-order
```js
function preOrderDFS(root) {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}
```

中序 in-order
```js
function inOrderDFS(root) {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node.right) stack.push(node.right);
    if (node.left) {
      // 不能直接 push node，会导致死循环
      // 也可使用状态标记法
      stack.push({ val: node.val });
      stack.push(node.left);
    } else res.push(node.val);
  }
}
```

后序 post-order
```js
function postOrderDFS(root) {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (!node.left && !node.right) res.push(node.val);
    // 不能直接 push node，会导致死循环
    else stack.push({ val: node.val });
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}
```

## BFS
Breadth First Search 广度优先算法

实现 BFS

```js
const res = [];

function BFSTraverse (root) {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    if (node.left) stack.unshift(node.left);
    if (node.right) stack.unshift(node.right);
  }
}

BFSTraverse(tree);
console.log(res);
```

## 高频题目

BFS
- [117. Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/) (Medium)
- [513. Find Bottom Left Tree Value](https://leetcode.com/problems/find-bottom-left-tree-value/) (Medium)

构建类
- [1008. Construct Binary Search Tree from Preorder Traversal](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/) (Medium)

二叉搜索树
- [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) (Medium)

其他
- [面试题 04.12. 求和路径](https://leetcode-cn.com/problems/paths-with-sum-lcci/) (Medium)

## 构建二叉搜索树

```js
// build binary search tree
function TreeNode (val) {
    this.val = val;
    this.left = this.right = null;
}

function buildBinarySearchTree (arr) {
    if (!arr || !arr.length) return;
    const root = new TreeNode(arr.shift());

    function addNodeToTree (root, node) {
        if (node.val < root.val) {
            if (root.left) addNodeToTree(root.left, node);
            else root.left = node;
        }
        if (node.val > root.val) {
            if (root.right) addNodeToTree(root.right, node);
            else root.right = node;
        }
    }

    while (arr.length) {
        const node = new TreeNode(arr.shift());
        addNodeToTree(root, node);
    }
    return root;
}

const tree = buildBinarySearchTree([6, 2, 8, 7, 1, 5, 3, 9]);
console.log(tree);
```