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

function inOrderTraverse (root) {
  const arr = [];
  const stack = [root];
  while (stack.length) {
      const node = stack.pop();
      if (!node) continue;
      if (node.status === 0 || node.status == undefined) { // unvisited
          node.status = 1; // visited
          if (node.right) stack.push(node.right);
          stack.push(node);
          if (node.left) stack.push(node.left);
      } else if (node.status === 1) {
          arr.push(node.val);
      }
  }
  return arr;
}

function preOrderTraverse (root) {
  const arr = [];
  const stack = [root];
  while (stack.length) {
      const node = stack.pop();
      if (!node) continue;
      if (node.status === 0 || node.status == undefined) { // unvisited
          node.status = 1; // visited
          if (node.right) stack.push(node.right);
          if (node.left) stack.push(node.left);
          stack.push(node);
      } else if (node.status === 1) {
          arr.push(node.val);
      }
  }
  return arr;
}

function postOrderTraverse (root) {
  const arr = [];
  const stack = [root];
  while (stack.length) {
      const node = stack.pop();
      if (!node) continue;
      if (node.status === 0 || node.status == undefined) { // unvisited
          node.status = 1; // visited
          stack.push(node);
          if (node.right) stack.push(node.right);
          if (node.left) stack.push(node.left);
      } else if (node.status === 1) {
          arr.push(node.val);
      }
  }
  return arr;
}

// console.log(inOrderTraverse(tree));
console.log(preOrderTraverse(tree));
// console.log(postOrderTraverse(tree));