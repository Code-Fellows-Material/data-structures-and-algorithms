

class Hashtable{

  constructor(size=53){
    this.keyMap = new Array(size);
  }

  set(key, value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index] = [key, value];
  }

  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
        if(this.keyMap[index][0] === key){
          return this.keyMap[index][1];
        }
    }
    return undefined;
  }

  contains(key){
    let arr = this.keys();
    return arr.includes(key);
  }

  keys(){
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length -1; i++){
      if(this.keyMap[i]){
        keysArr.push(this.keyMap[i][0]);
      }
    }
    return keysArr;
  }

  _hash(key){
    let total = 0;
    let PRIME = 31;

    for(let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

}

module.exports = Hashtable;