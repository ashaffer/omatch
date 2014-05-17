var isObject = require('is-object');

module.exports = function omatch(pattern) {
  return function(obj) {
    if(! obj) return false;
    
    return Object.keys(pattern).every(function(key) {
      if(isObject(pattern[key])) {
        return omatch(pattern[key])(obj[key]);
      }
      
      return obj[key] === pattern[key];
    }); 
  };
};