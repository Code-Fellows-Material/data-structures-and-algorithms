
class Hashtable{

  constructor(size=199){
    this.keyMap = new Array(size)
  }

  getValAtKey(key){
    let index = this._hashString(key);
    return this.keyMap[index][1];
  }

  

  set(key, value){
    if(typeof(key) !== 'string') return
    let index = this._hashString(key);

    if(! this.keyMap[index]){
      this.keyMap[index] = [];
      this.keyMap[index][1] = [];
    }
    this.keyMap[index][0] = key;
    

    this.keyMap[index][1].push(value);
  }

  _hashString(key){
    //create a index variable which we will return to be the hashed index of our string 
    let index = 0;
    //Add in a prime number to reduce the chance of collisions
    let PRIME = 31;

    //loop through the string (or 100 characters of the string, whatever is smaller)
    //grab one character at a time, then grab it's value 
    //create it's index
    for(let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i];
      let charVal = char.charCodeAt(0) - 96;
      index = (index + charVal * PRIME) % this.keyMap.length;
    }
    return index;
  }
}

module.exports = Hashtable;