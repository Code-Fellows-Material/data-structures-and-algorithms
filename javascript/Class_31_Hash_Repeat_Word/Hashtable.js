// Write a function called repeated word that finds the first word to occur more than once in a string
// Arguments: string
// Return: string

class RepeatHashtable {
  constructor(size = 3083) {
    this.keyMap = new Array(size);
  }

  //hashFunction
  _hash(key) {
    let total = 0;
    let PRIME = 2027;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  addAndCheck(key) {
    // Hash the key
    let index = this._hash(key);
    // Check if the key exists, if so, return the key
    if (this.keyMap[index]) {
      return key;
    } else {
      // if not add the key to the table, then return false
      this.keyMap[index] = [key];
      return false;
    }
  }

  //remove puntuation
  removePunctuation(str) {
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let tempStr = str.replace(regex, "");
    return str.length === 0 ? false : tempStr;
  }

  repeatCheck(str) {
    // split the string at the spaces
    let checkArr = str
      .split(" ")
      // remove all punctuations
      .map((word) => {
        let tempWord = this.removePunctuation(word);
        if (tempWord) return tempWord.toLowerCase();
      })
      //make sure there is still a word there after doing so, make it lowercase if so
      .filter((word) => word);

    //iterate through the array check for repeats, return the word if found
    for (let i = 0; i < checkArr.length; i++) {
      let repeatWord = this.addAndCheck(checkArr[i]);

      if (repeatWord) return repeatWord;
    }
    // Return false if no repeat found.
    return false;
  }
}

const test = new RepeatHashtable();

let result = test.repeatCheck(
  "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
);
console.log(result);

module.exports = RepeatHashtable;
