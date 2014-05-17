omatch
======

Simple utility for creating object pattern matching functions.  Supports nested objects.  Inspired by lodash/underscore's similar object matchers.

## Example

```javascript
var omatch = require('omatch');
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

list.filter(omatch({sub: {str: 'test1'}})).length === 1
list.filter(omatch({sub: {num: 4}})).length === 3
```
