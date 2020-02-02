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

[Find shortest unsorted subarray](./arrays_and_strings/shortest_unsorted_subarray.js)

<details>
  <summary>Notes</summary>

- Begin a pointer at the start (i) and end (j) of the array
- Increment i until value at i is > value at i + 1
- Decrement j until value at j is < value at j - 1
- Find the min and max values of the subarray found bounded by i and j
- Expand i and j if necessary based on min and max values
- Value at i - 1 should be less than the min
- Value at j + 1 should be greater than the max
- Return the indices, [i, j]
- Time complexity is linear O(n)
- Space complexity is constant O(1)

</details>

[Dutch National Flag](./arrays_and_strings/dutch_national_flag.js)

<details>
  <summary>Notes</summary>

- Partion the array into 4 parts: low, mid, currently processing, and high
- Low and mid begin at the array's start; high at the end
- Currently processing will always be at the mid + 1
- Continuously shrink the unprocessed partition until the array is sorted correctly
- Time complexity is linear O(n)
- Space complexity is constant O(1)

</details>

[Max Subarray Sum](./arrays_and_strings/max_subarray_sum.js)

<details>
  <summary>Notes</summary>

- We use Kadane's Algorithm to solve this problem
- If we know the max sum at arr[i - 1], we can find the max at arr[i]
- Each time we get a positive sum, compare it with the max so far
- Time complexity is linear O(n)
- Space complexity is constant O(1)

</details>
