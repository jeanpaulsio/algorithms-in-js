# Arrays and Strings

## Clone Even Numbers
[View Implementation](./clone-even-numbers.js)

**Problem:**
Given an array of numbers, replace each even number with two of the same.

**Solution:**
Use reverse traversal with 2 pointers, `i` and `j`. `i` loops through existing numbers while `j` loops through the array from the end. When we encounter an even number, we move two instances of it to the end. When we encounter an odd number, we only move one instance to the end.

## Reverse Words
[View Implementation](./reverse-words.js)

**Problem:**
Given a sentence, reverse the words of the sentence.

**Solution:**
Use reverse traversal with 2 pointers. As soon as we find a space separating words, add that word to the result.
