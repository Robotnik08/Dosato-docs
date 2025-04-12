# {$chapter} {$title}

## {$subchapter} Functions

### - <code class="language-dosato">array sort(array a, function compare_fn?)</code>

Sorts the given array in place, and returns the sorted array. If a compare function is given, it will be used to compare the elements of the array. The compare function should take two arguments and return a negative number if the first argument is before the second, a positive number if the first argument is after the second, and 0 if they are equal. If no compare function is given, the array will be sorted in ascending order, using the default comparison algorithm, which only works for numbers.

And example of using your own compare function to sort alphabetically:

```dosato
make a = ["banana", "apple", "orange", "berry]
set a = sort(a, int (a, b) => {
    return stringCompare(a, b) // lexicographically with the standard string comparison function
})
do sayln(a) // ["apple", "banana", "berry", "orange"]
```

### - <code class="language-dosato">var push(array a, var value)</code>

Pushes the given value to the end of the array. Returns the pushed value.

```dosato
make a = [1, 2, 3]
do push(a, 4)
do sayln(a) // [1, 2, 3, 4]
```

This is by reference, the referenced array will be modified.

### - <code class="language-dosato">var pop(array a)</code>

Pops the last value of the array and returns it. If the array is empty, it will return `null`.

```dosato
make a = [1, 2, 3]
set a = pop(a)
do sayln(a) // 3
```

If the array is empty, it will throw a `E_INDEX_OUT_OF_BOUNDS` error.

This is by reference, the referenced array will be modified.

### - <code class="language-dosato">var unshift(array a, var value)</code>

Adds the given value to the beginning of the array. Returns the added value.

```dosato
make a = [1, 2, 3]
do unshift(a, 0)
do sayln(a) // [0, 1, 2, 3]
```

### - <code class="language-dosato">var shift(array a)</code>

Removes the first value of the array and returns it. If the array is empty, it will return `null`.

```dosato
make a = [1, 2, 3]
set a = shift(a)
do sayln(a) // 1
```

If the array is empty, it will throw a `E_INDEX_OUT_OF_BOUNDS` error.

This is by reference, the referenced array will be modified.

### - <code class="language-dosato">array slice(array a, int start, int end?)</code>

Extracts a slice of the array from the given start index to the end index. The end index is not included. If the end index is not given, it will extract the slice from the start index to the end of the array.

It will return a new array with the extracted slice.

When the start index is more then the end index, it will throw a `E_INDEX_OUT_OF_BOUNDS` error.

```dosato
make a = [1, 2, 3, 4, 5]
set a = slice(a, 1, 3)
do sayln(a) // [2, 3]
```

### - <code class="language-dosato">array splice(array a, int start, int delete_count?)</code>

Removes the given number of elements from the array starting at the given index. The deleted elements will be returned in a new array. If the delete count is not given, it will remove all elements from the start index to the end of the array.

It will return a new array without the deleted elements.

When the start index is more then the end index, it will throw a `E_INDEX_OUT_OF_BOUNDS` error.

```dosato
make a = [1, 2, 3, 4, 5]
set a = splice(a, 1, 2)
do sayln(a) // [1, 4, 5]
```

### - <code class="language-dosato">long indexOf(array a, var value)</code>

Finds the index of the given value in the array. If the value is not found, it will return -1.

```dosato
make a = [1, 2, 3, 4, 5]
do sayln(indexOf(a, 3)) // 2
do sayln(indexOf(a, 6)) // -1
```

### - <code class="language-dosato">long lastIndexOf(array a, var value)</code>

Finds the last index of the given value in the array. If the value is not found, it will return -1.

```dosato
make a = [1, 2, 3, 4, 5, 3]
do sayln(lastIndexOf(a, 3)) // 5
do sayln(lastIndexOf(a, 6)) // -1
```

### - <code class="language-dosato">array reverse(array a)</code>

Reverses the given array in place, and returns the reversed array.

```dosato
make a = [1, 2, 3, 4, 5]
set a = reverse(a)
do sayln(a) // [5, 4, 3, 2, 1]
```

### - <code class="language-dosato">array fill(var value, long count)</code>

Returns an array with the given value repeated the given number of times.

```dosato
make a = fill(1, 5)
do sayln(a) // [1, 1, 1, 1, 1]
```

### - <code class="language-dosato">array range(long start?, long end, long step)</code>

Returns an array with the given range of numbers. The start number is inclusive, and the end number is exclusive. The step number is optional, and it defaults to 1. The start number is also optional, and it defaults to 0. When you only give 1 argument, it will be treated as the end number, and the start number will be 0.

```dosato
do sayln(range(1, 10, 2)) // [1, 3, 5, 7, 9]
do sayln(range(10)) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
do sayln(range(1, 10)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### - <code class="language-dosato">array rangef(double start?, double end, double step)</code>

Returns an array with the given range of numbers. The start number is inclusive, and the end number is exclusive. The step number is optional, and it defaults to 1. The start number is also optional, and it defaults to 0. When you only give 1 argument, it will be treated as the end number, and the start number will be 0.

```dosato
do sayln(rangef(1.0, 10.0, 2.0)) // [1.0, 3.0, 5.0, 7.0, 9.0]
do sayln(rangef(10.0)) // [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0]
do sayln(rangef(1.0, 10.0)) // [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0]
```

### - <code class="language-dosato">long counter()</code>

An internal counter, starts at 0 and increments by 1 every time it is called. Can be used to generate unique increments.

Returns the current value of the counter, before incrementing it.

```dosato
make a = [counter(), counter(), counter()]
do sayln(a) // [0, 1, 2]
```

### - <code class="language-dosato">long setCounter(long value)</code>

Sets the internal counter to the given value. Can be used to reset the counter.

It returns the given value. before incrementing it.

```dosato
make a = [counter(), counter(), counter()]
do sayln(a) // [0, 1, 2]
do setCounter(10)
do sayln(counter()) // 10
do sayln(counter()) // 11
```

### - <code class="language-dosato">array map(array a, function map_fn)</code>

Maps the given function to each element of the array and returns a new array with the results.

```dosato
make a = [1, 2, 3, 4, 5]
set a = map(a, int (e, _i) => { return e * 2 })
do sayln(a) // [2, 4, 6, 8, 10]
```

The function must take two arguments, the first is the element of the array, and the second is the index of the element in the array. The function can return any type of value, and it will be added to the new array.


### - <code class="language-dosato">var reduce(array a, function reduce_fn, var initial_value)</code>

Reduces the given array to a single value using the given function. The function must take three arguments, the first is the accumulator, the second is the element of the array, and the third is the index of the element in the array. The function can return any type of value, and it's return value will be used as the accumulator for the next iteration.

Below is an example of using the reduce function to sum the elements of an array:

```dosato
make a = [1, 2, 3, 4, 5]
set a = reduce(a, int (acc, e, _i) => { return acc + e }, 0)
do sayln(a) // 15
```

### - <code class="language-dosato">bool some(array a, function some_fn)</code>

Goes through the array and returns true if any of the elements return true when passed to the given function. The function must take two arguments, the first is the element of the array, and the second is the index of the element in the array. The function can return any type of value, and it will be used to check if any of the elements are true.

If the value returned is truthy, it will stop the iteration and return true. If the value returned is falsy, it will continue to the next element.
If no elements return true, it will return false.

```dosato
make a = [1, 2, 3, 4, 5]
set a = some(a, bool (e, _i) => { return e > 3 })
do sayln(a) // true
```

### - <code class="language-dosato">array filter(array a, function filter_fn)</code>

Filters the given array using the given function. The function must take two arguments, the first is the element of the array, and the second is the index of the element in the array. The function can return any type of value, and it will be used to check if the element should be included in the new array.

If no elements return true, it will return an empty array.

```dosato
make a = [1, 2, 3, 4, 5]
set a = filter(a, bool (e, _i) => { return e > 3 })
do sayln(a) // [4, 5]
```

### - <code class="language-dosato">bool every(array a, function every_fn)</code>

Functions like the `some` function, but returns true if all of the elements return true when passed to the given function. The function must take two arguments, the first is the element of the array, and the second is the index of the element in the array. The function can return any type of value, and it will be used to check if all of the elements are true.

If the value returned is truthy, it will continue to the next element. If the value returned is falsy, it will stop the iteration and return false.

If all elements return true, it will return true.

```dosato
make a = [1, 2, 3, 4, 5]
set a = every(a, bool (e, _i) => { return e > 0 })
do sayln(a) // true
```

### - <code class="language-dosato">long count(array a, var value)</code>

Counts the number of times the given value appears in the array. If the value is not found, it will return 0.

```dosato
make a = [1, 2, 3, 4, 5, 3]
do sayln(count(a, 3)) // 2
do sayln(count(a, 6)) // 0
```

### - <code class="language-dosato">double sum(array a)</code>

Casts all values in the array to double and returns the sum of all values in the array.

```dosato
make a = [1, 2, 3, 4, 5]
set a = sum(a)
do sayln(a) // 15.0
```

### - <code class="language-dosato">long find(array a, function find_fn)</code>

Finds the first element that returns true when passed to the given function. The function must take two arguments, the first is the element of the array, and the second is the index of the element in the array. The function can return any type of value, and it will be used to check if the element should be included in the new array.

If no elements return true, it will return `null`.

```dosato
make a = [1, 2, 3, 4, 5]
set a = find(a, int (e, _i) => { return e > 3 })
do sayln(a) // 4
```

### - <code class="language-dosato">array combinations(array a, int n)</code>

Returns the combinations of the given array with the given length. The combinations are returned in a new array.

```dosato
make a = [1, 2, 3, 4, 5]
set a = combinations(a, 3)
do sayln(a) // [[1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5], [1, 4, 5], [2, 3, 4], [2, 3, 5], [2, 4, 5], [3, 4, 5]]
```

### - <code class="language-dosato">array permutations(array a, long n)</code>

Returns the permutations of the given array with the given length. The permutations are returned in a new array.

```dosato
make a = [1, 2, 3, 4, 5]
set a = permutations(a, 3)
do sayln(a) // [[1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 3, 2], [1, 3, 4], [1, 3, 5], [1, 4, 2], [1, 4, 3], [1, 4, 5], [1, 5, 2], [1, 5, 3], [1, 5, 4], ...]
```

### - <code class="language-dosato">array removeDuplicates(array a)</code>

Removes the duplicates from the given array and returns a new array with the unique elements.

```dosato
make a = [1, 2, 3, 4, 5, 3]
set a = removeDuplicates(a)
do sayln(a) // [1, 2, 3, 4, 5]
```

### - <code class="language-dosato">array difference(array a, array b)</code>

Returns the difference between the two arrays. The difference is the elements that are in the first array but not in the second array.

```dosato
make a = [1, 2, 3, 4, 5]
make b = [3, 4, 5, 6, 7]
set a = difference(a, b)
do sayln(a) // [1, 2]
```

### - <code class="language-dosato">array intersection(array a, array b)</code>

Returns the intersection between the two arrays. The intersection is the elements that are in both arrays.

```dosato
make a = [1, 2, 3, 4, 5]
make b = [3, 4, 5, 6, 7]
set a = intersection(a, b)
do sayln(a) // [3, 4, 5]
```

### - <code class="language-dosato">long len(array a || string a)</code>

Returns the length of the given array or string.

```dosato
make a = [1, 2, 3, 4, 5]
set a = len(a)
do sayln(a) // 5
```

### - <code class="language-dosato">bool contains(array a, var value)</code>

Checks if the given value is in the array. Returns true if it is, false if it isn't.

```dosato
make a = [1, 2, 3, 4, 5]
do sayln(contains(a, 3)) // true
do sayln(contains(a, 6)) // false
```