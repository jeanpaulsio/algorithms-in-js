# Algorithms in JS 💛

## Strings

### [Reverse a Sentence](./strings/reverse_words.js)

<details>
  <summary>Algorithm</summary>

- We use two pointers - one to keep track of the current word end; the other to find the beginning of a word
- Traverse string backwards until a blank space is found
- Append word to result
- Finally, append the first word to the result
- Time complexity is linear O(n)
- Space complexity is linear O(n)

</details>

### [Longest Unique Substring](./strings/longest_uniq_substring.js)

<details>
  <summary>Algorithm</summary>

- We use a sliding window that will always have unique characters inside of it
- Start with two pointers at the beginning of the string
- Iterate through the string in one pass
- Every iteration, expand the end pointer by 1
- For every new character, check to see if it exists in the already processed part of the string
  - If the new character is unique, increase the max length by 1
  - If the new character exists, the longest substring changes such that the start is the next character of the previous instance to the currently scanned

</details>

## Arrays

### [Clone Even Numbers](./arrays/clone_even_numbers.js)

<details>
  <summary>Algorithm</summary>

- We use two pointers - one at the end of the array and one at the last positive number
- Array is traversed backwards
- Time complexity is linear O(n)
- Space complexity is constant O(1)

</details>


### [Two Sum](./arrays/two_sum.js)

<details>
  <summary>Algorithm</summary>

- We have a pointer at the start and at the end of the array
- We take the sum of the values at the current indices
- Since the array is sorted, we can move the pointer inwards from the left to increase the sum and move the pointer inwards from the right to decrease the sum
- We keep contracting the indices until the sum matches the target sum
- Time complexity is linear O(n)
- Space complexity is constant O(1)

</details>

### [Find shortest unsorted subarray](./arrays/shortest_unsorted_subarray.js)

<details>
  <summary>Algorithm</summary>

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

### [Dutch National Flag](./arrays_and_strings/dutch_national_flag.js)

<details>
  <summary>Algorithm</summary>

- Partion the array into 4 parts: low, mid, currently processing, and high
- Low and mid begin at the array's start; high at the end
- Currently processing will always be at the mid + 1
- Continuously shrink the unprocessed partition until the array is sorted correctly
- Time complexity is linear O(n)
- Space complexity is constant O(1)

</details>

### [Max Subarray Sum](./arrays/max_subarray_sum.js)

<details>
  <summary>Algorithm</summary>

- We use Kadane's Algorithm to solve this problem
- If we know the max sum at arr[i - 1], we can find the max at arr[i]
- Each time we get a positive sum, compare it with the max so far
- Time complexity is linear O(n)
- Space complexity is constant O(1)

</details>

### [Find Subarray That Sums to 0](./arrays/subarray_sum_zero.js)

<details>
  <summary>Algorithm</summary>

- We use cumulative sums
- Create a hash map where the key is the cumulative sum and the value is the index at which it was found
- Initialize the sum at 0
- Traverse the array from start to finish
- For every element, update the sum to be sum += array[i]
- If the sum is equal to 0, return the subarray from 0 to i
- If the sum is already in the map, return the subarray from the hash map's value + 1 to i
- Place the sum and index i as a key-value pair

</details>

## Binary Search

### [Binary Search Algorithm](./binary_search/basic.js)

<details>
  <summary>Algorithm</summary>

- Compare x with the middle element
- Computer the middle element by adding half the distance to the left most element
- If x matches the middle element, return the middle index
- If arr at middle index is greater than x, x must lie in the left half of the array
- If arr at middle index is less than x, x must lie in the right half of the array

</details>

### [First repeating element in sorted array](./binary_search/repeating_element.js)

<details>
  <summary>Algorithm</summary>

- Run a regular binary search
- Search the left subarray when arr[mid] is greater than the target AND
  - when arr[mid] is the target and arr[mid - 1] is also the target
</details>
