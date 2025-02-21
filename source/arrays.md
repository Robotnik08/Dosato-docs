# {$chapter} {$title}

Arrays are a collection of values that can be accessed by an index. The index is a number that represents the position of the value in the array. The first element in an array has index 0, the second element has index 1, and so on.

## {$subchapter} Array definition

An array is defined by using square brackets `[]` and a list of values separated by commas. Here's an example:

```dosato
make arr = [1, 2, 3, 4, 5]
```

This will create an array with 5 elements, where the first element is 1, the second element is 2, and so on.

Since arrays are their own type, you can also put arrays inside arrays:

```dosato
make arr = [[1, 2], [3, 4], [5, 6]]
```

Or any other type of value:

```dosato
make arr = [1, "hello", true, 3.14]
```

## {$subchapter} Accessing array elements

You can access an element in an array by using the hash `#` operator followed by the index of the element you want to access. Here's an example:

```dosato
make arr = [1, 2, 3, 4, 5]
make first = arr#0
make last = arr#4
```

This will set `first` to 1 and `last` to 5.

This hash `#` operator can also be used to set the value of an element in an array:

```dosato
make arr = [1, 2, 3, 4, 5]
set arr#0 = 10
do sayln(arr) // [10, 2, 3, 4, 5]
```

Since the array index starts at 0, the first element in the array is `arr#0`.
If you go out of bounds, the interpreter will throw an error.

```dosato
make arr = [1, 2, 3, 4, 5]
set arr#5 = 10 // Error: Index out of bounds
```

However, you can also use negative indexes to access elements from the end of the array:

```dosato
make arr = [1, 2, 3, 4, 5]
make last = arr#-1 // 5
make second_to_last = arr#-2 // 4
```

Which if you go too far, will also throw an error:

```dosato
make arr = [1, 2, 3, 4, 5]
make last = arr#-6 // Error: Index out of bounds
```

When wanting to use expressions as indexes, you can use parentheses to group them:

```dosato
make arr = [1, 2, 3, 4, 5]
make index = 2
make value = arr#(index + 1) // 4
```

This is due to the fact that the `#` operator has a higher precedence than the `+` operator.

## {$subchapter} Array length

You can get the length of an array by using the `len` function:

```dosato
make arr = [1, 2, 3, 4, 5]
make length = len(arr) // 5
```

Other ways to get the length of an array are by converting the array to a number type:

```dosato
make arr = [1, 2, 3, 4, 5]
make length = (int)arr // 5
```

## {$subchapter} Array functions

There are several functions that can be used with arrays, but the most common ones are:

- `push`: Adds an element to the end of the array.
- `pop`: Removes the last element from the array.
- `shift`: Removes the first element from the array.
- `unshift`: Adds an element to the beginning of the array.

Here's an example of how to use these functions:

```dosato
make arr = [1, 2, 3, 4, 5]
do push(arr, 6) // [1, 2, 3, 4, 5, 6]
do pop(arr) // 6
do shift(arr) // 1
do unshift(arr, 0) // [0, 2, 3, 4, 5]
```

There's more functions, which you can find here: {#standard_library_array}

## {$subchapter} Operations with arrays

You can concatenate two arrays by using the `+` operator:

```dosato
make arr1 = [1, 2, 3]
make arr2 = [4, 5, 6]
make arr3 = arr1 + arr2 // [1, 2, 3, 4, 5, 6]
```

You can also remove from the end of an array with the `-` operator:

```dosato
make arr = [1, 2, 3, 4, 5]
make arr2 = arr - 1 // [1, 2, 3, 4]
make arr3 = arr - 2 // [1, 2, 3]
```

## {$subchapter} Array references

On a more technical note, arrays are passed by reference, which means that when you pass an array to a function or other variable, you're actually passing a reference to the array, not a copy of it.

A simple way to see this is with the following example:

```dosato
make a = [1, 2, 3]
make b = a
set b#0 = 10
do sayln(a) // [10, 2, 3]
do sayln(b) // [10, 2, 3]
```

Since `b` is a reference to `a`, changing `b` will also change `a`.

However, dosato has the copy `*` unary operator, which can be used to create a copy of an array or any other object:

```dosato
make a = [1, 2, 3]
make b = *a
set b#0 = 10
do sayln(a) // [1, 2, 3]
do sayln(b) // [10, 2, 3]
```

The copy operator creates a deep copy of the array, which means that changing `b` will not affect `a`, since they are fully independent.

The copy operator deeply copies the array, which means that if the array contains other arrays, those arrays will also be copied.

## {$subchapter} Self-referencing arrays

An edge case to be aware of is self-referencing arrays. If an array contains a reference to itself, the array will act differently:

```dosato
make arr = [1, 2]
do push(arr, arr) // push arr into arr
do sayln(arr) // [1, 2, [...]]
```

This will create an array that contains a reference to itself, which is fundamentally allowed, just the resulting string when printing the array will be `[1, 2, [...]]`, to signify that the array contains a reference to itself.