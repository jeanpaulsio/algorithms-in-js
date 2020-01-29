# Algorithms in JS 💛

## Getting Started

```bash
git clone https://github.com/jeanpaulsio/algorithms-in-js.git
cd algorithms-in-js

# Install dependencies
yarn

# Run tests
yarn test
```

## Arrays and Strings

[Clone Even Numbers](./arrays_and_strings/clone_even_numbers.js)

<details>
  <summary>Notes</summary>

- We use two pointers - one at the end of the array and one at the last positive number
- Array is traversed backwards
- Time complexity is linear O(n)
- Space complexity is constant O(1)

</details>

[Reverse a Sentence](./arrays_and_strings/reverse_words.js)

<details>
  <summary>Notes</summary>

- We use two pointers - one to keep track of the current word end; the other to find the beginning of a word
- Traverse string backwards until a blank space is found
- Append word to result
- Finally, append the first word to the result
- Time complexity is linear O(n)
- Space complexity is linear O(n)

</details>

[Two Sum](./arrays_and_strings/two_sum.js)

<details>
  <summary>Notes</summary>

- We have a pointer at the start and at the end of the array
- We take the sum of the values at the current indices
- Since the array is sorted, we can move the pointer inwards from the left to increase the sum and move the pointer inwards from the right to decrease the sum
- We keep contracting the indices until the sum matches the target sum
- Time complexity is linear O(n)
- Space complexity is constant O(1)

</details>
