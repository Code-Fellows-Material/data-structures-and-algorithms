const left_joins = require('./left_join');
const Hashtable = require('./hashtable');


let keyArr = ['diligent', 'fond', 'guide', 'outfit', 'wrath'];
let synArr = ['employed', 'enamored', 'usher', 'garb', 'anger'];
let antArr = ['idle', 'averse', 'follow', 'jam', 'delight'];

let table1 = new Hashtable();
let table2 = new Hashtable();

keyArr.forEach((key, idx) => {
  table1.set(key, synArr[idx]);
  table2.set(key, antArr[idx]);
})

// console.log(table2);

describe('left joins function tests', () => { 

  const joinedTable = left_joins(table1, table2);
  
  it('should join hashtable one and hashtable two', () => {
    expect(joinedTable).toBeTruthy();
  });

  it('should join hashtable one and hashtable two', () => {
    expect(joinedTable.getValAtKey('diligent')).toStrictEqual(["employed","idle"]);
  });

  it('should join hashtable one and hashtable two', () => {
    expect(joinedTable.getValAtKey('fond')).toStrictEqual(["enamored","averse"]);
  });

  it('should join hashtable one and hashtable two', () => {
    expect(joinedTable.getValAtKey('guide')).toStrictEqual(["usher","follow"]);
  });

  it('should join hashtable one and hashtable two', () => {
    expect(joinedTable.getValAtKey('outfit')).toStrictEqual(["garb","jam"]);
  });

  it('should join hashtable one and hashtable two', () => {
    expect(joinedTable.getValAtKey('wrath')).toStrictEqual(["anger","delight"]);
  });
 })