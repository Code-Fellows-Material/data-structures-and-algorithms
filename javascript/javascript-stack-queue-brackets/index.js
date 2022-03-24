

const all = ['[', '{', '(', ']', '}', ')'];
const open = ['[', '{', '('];
const close = [']', '}', ')'];

function validateBrackets(str){
  let bktArr = [];
  let openStack = [];

  //Clean up string into just brackets
  for(let i = 0; i < str.length; i++){
    all.includes(str[i]) && bktArr.push(str[i]);
  }

  for(let bkt of bktArr){
    if(open.includes(bkt)){
      openStack.push(bkt);
    } else {
      if(openStack.length === 0) return false;
      if (open.indexOf(openStack.pop()) !== close.indexOf(bkt)) return false;
    }
  }
  return !openStack.length > 0;
}

module.exports = validateBrackets;