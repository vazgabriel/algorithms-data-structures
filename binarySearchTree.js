class TreeNode {
  constructor(val) {
    this.val = val
    this.right = null
    this.left = null
  }
}

const isValidBST = (root) => {
  const helper = (node, lower, upper) => {
    if (!node) return true
    const { val } = node

    if (val <= lower || val >= upper) return false
    if (!helper(node.right, val, upper)) return false
    if (!helper(node.left, lower, val)) return false
    return true
  }

  return helper(root, -Infinity, Infinity)
}

/*
  10 \/
    R: (15, 10, Infinity) \/
      R: (null, 15, Infinity) -> true
      L: (11, 10, 15) \/
        R: (null, 11, 15)     -> true
        L: (9, 10, 11)        -> false
    L: (5, -Infinity, 10) \/
      R: (null, 5, Infinity)  -> true
      L: (null, -Infinity, 5) -> true
 */

const node = new TreeNode(10)
node.left = new TreeNode(5)
node.right = new TreeNode(15)

/// True
console.log(isValidBST(node))

node.right.left = new TreeNode(11)

/// True
console.log(isValidBST(node))

node.right.left.left = new TreeNode(9)

/// False
console.log(isValidBST(node))
