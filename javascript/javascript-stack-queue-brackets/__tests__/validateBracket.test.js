'use strict'
const validateBrackets = require('../index'); 

describe('Tests for validateBracket funct', () => {

  it('Test String: (){}[[]]', () => {
    let testString = '(){}[[]]'; 
    expect(validateBrackets(testString)).toBe(true);
  })

  it('Test String: ({)}', () => {
    let testString = '({)}'; 
    expect(validateBrackets(testString)).toBe(false);
  })

  it('Test String: ({Poncho}}', () => {
    let testString = '({Poncho}}';
    expect(validateBrackets(testString)).toBe(false);
  })

  it('Test String: (', () => {
    let testString = '('; 
    expect(validateBrackets(testString)).toBe(false);
  })

  it('Test String: ({', () => {
    let testString = '({'; 
    expect(validateBrackets(testString)).toBe(false);
  })
  
  it('Test String: ({})', () => {
    let testString = '({})'; 
    expect(validateBrackets(testString)).toBe(true);
  })

  it('Test String: )', () => {
    let testString = ')'; 
    expect(validateBrackets(testString)).toBe(false);
  })

  it('Test String: (', () => {
    let testString = '('; 
    expect(validateBrackets(testString)).toBe(false);
  })
})
