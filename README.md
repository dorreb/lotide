# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @dorreb/lotide`

**Require it:**

`const _ = require('@dorreb/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- ` function assertArraysEqual(arr1, arr2)`: takes in two arrays and console.log an appropriate message to the console.
- `function assertEqual(actual, expected)`: prints out a pass or fail message based on if actual value matches expected value
- `function AssertObjectsEqual(actual, expected)`: take in two objects and prints an appropriate pass/fail message to the console
- `function countLetters(string)`: takes in a string and then return a count of each of the letters in that sentence
- `function countOnly(allItems, itemsToCount)`: returns true or false if the names or values provided are already in the object
- `function eqArrays(first, second)`: takes in two arrays and returns true or false, based on a perfect match
- `function eqObjects(object1, object2)`: returns true if both objects have identical keys with identical values, otherwise returns false
- `function findKey(object, callback)`: scans object and returns the first key for which the callback returns a truthy value
- `function findKeyByValue(object, value)`: takes in an object and a value. Scans the object and returns the first key which contains the given value. If no key with that given value is found, function returns undefined
- `function head(array)`: returns the first item in the array
- `function letterPosition(sentence)`: returns all the indices (zero-based positions) in the string where each character is found
- `function map(array, callback)`: takes in two arguments - an array to map, and a callback funtion - function returns a new array based on the results of the callback function
- `function middle(array)`: takes in an array and return the middle-most element(s) of the given array
- `function tail(array)`: returns everything except for the first item of the provided array
- `function takeUntil(array, callback)`: keeps collecting items from the input array until the callback provided returns a truthy value
- `function without(source, itemsToRemove)`: takes in a source array and itemsToRemove array, and will return a subset of a given array, removing unwanted elements
