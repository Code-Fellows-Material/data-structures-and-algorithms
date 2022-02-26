
class Hashtable {
  constructor(size = 2027) {
    this.keyMap = new Array(size);
  }

  set(key, value) {
    let index = this._hash(key);
    // console.log(index)
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index] = [value];
    // console.log(this.keyMap[index])
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      if (this.keyMap[index][0] === key) {
        return this.keyMap[index][1];
      }
    }
    return undefined;
  }

  contains(key) {
    let arr = this.keys();
    return arr.includes(key);
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length - 1; i++) {
      if (this.keyMap[i]) {
        keysArr.push(this.keyMap[i][0]);
      }
    }
    return keysArr;
  }

  _hash(key) {
    let total = 0;
    let PRIME = 1999;
    total = (key * PRIME) % this.keyMap.length;

    return total;
  }
}

function treeIntersection(tree1, tree2){
  const hTable = new Hashtable(); 
  let result = [];

  function DFS_hashAdd(node){
    // console.log("1", node.value)
    hTable.set(node.value, node.value);
    if(node.left) DFS_hashAdd(node.left);
    if(node.right) DFS_hashAdd(node.right);
  }

  function DFS_hashCheck(node){
    // console.log('2', node.value)
    if(hTable.contains(node.value)){
      result.push(node.value);
    }
    if(node.left) DFS_hashCheck(node.left);
    if(node.right) DFS_hashCheck(node.right);
  }

  DFS_hashAdd(tree1.root);
  DFS_hashCheck(tree2.root);

  console.log('Results', result)
  return result;
}

module.exports = treeIntersection;
