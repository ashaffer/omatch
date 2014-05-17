var expect = require('chai').expect;
var omatch = require('../');

describe('omatch should', function() {
  it('match objects', function() {
    expect([{a: 1}, {b: 2}, {a: 3}].filter(omatch({a: 1}))).to.have.length(1);
    expect([{a: 1, c: 2}, {b: 2}, {a: 3}].filter(omatch({a: 1}))).to.have.length(1);
  });
  
  it('match nested objects', function() {
    var list = [
      {
        sub: {
          str: 'test1',
          num: 4
        }
      },
      {
        sub: {
          str: 'test2',
          num: 4
        }
      },
      {
        sub: {
          str: 'test3',
          num: 4
        }
      },
    ];
    
    expect(list.filter(omatch({sub: {str: 'test1'}}))).to.have.length(1);
  })
});