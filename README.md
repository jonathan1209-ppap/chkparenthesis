# chkparenthesis

chkparenthesis package is a module to check if brackets in a string are balanced.

## Install

On terminal, write this command.

```sh
npm i chkparenthesis
```

## usage

```js

const checkBrackets = require('chkparenthesis');

console.log(checkBrackets("(a + b)")); // true
console.log(checkBrackets("{[a + b]}")); // true
console.log(checkBrackets("((a + b)")); // false

```
