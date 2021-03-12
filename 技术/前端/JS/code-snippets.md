# JS Code Snippets



## reverse a given string

```js
const reverseString = str => [...str].reverse().join('');
```



## Calculate a Number’s Factorial

```js
const factorialOfNumber = num => {
  if (num < 0) throw new TypeError('Number should be positive');
  return num <= 1 ? 1 : num * factorialOfNumber(num-1);
}
```



## Convert a Number to an Array of Digits

```js
const numToDigits = num => {
  return [...`num`].map(n => parseInt(n, 10));
}
```



## Return the Powerset of an Array of Numbers

```js
const powersetOfArray = arr => {
  return arr.reduce((acc, cur) => {
    return acc.concat(acc.map(el => [crr].concat(el)));
  }, [[]]);
}
```

