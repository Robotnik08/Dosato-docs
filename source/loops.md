# {$chapter} {$title}

Loops are a way to repeat a block of code multiple times. They are useful when you want to perform a task multiple times without writing the same code multiple times. There are three types of loops in Dosato: `for`, `while` and `until`. All of them being master extensions, they can be used in the same way as other master keywords.

## {$subchapter} for loop

The `for` loop is used to iterate over a list of values. It has the following syntax:

```dosato
<master expression> for <variable> in <list>
```

The for loop takes a list of values on the right, then assigns each value to the variable on the left, and executes the code block until the list is exhausted.

Here's an example of a `for` loop that prints the numbers from 1 to 5:

```dosato
do sayln(i) for i in [1, 2, 3, 4, 5]
```

This will print:

```raw
1
2
3
4
5
```

Common ways of generating ranges are with the `range` function or the range operators:

```dosato
do say(i + " ") for i in range(1, 6) // 1 2 3 4 5
do say(i + " ") for i in 1:>6 // 1 2 3 4 5
```

These both create the list: `[1, 2, 3, 4, 5]`.

Commonly, you can append for loops to most master expressions, like so:

```dosato
do {
    do sayln(i)
} for i in [1, 2, 3, 4, 5]

set num += i for i in range(10)
```

You can also omit the `in` to just iterate over a list:

```dosato
do say("*") for range(5) // *****
```

## {$subchapter} while loop

The `while` loop is used to execute a block of code as long as a condition is true. It has the following syntax:

```dosato
<master expression> while <condition>
```

The while loop takes a condition on the right, and executes the code block until the condition is false.

Here's an example of a `while` loop that prints the numbers from 1 to 5:

```dosato
make i = 1
do {
    do sayln(i)
    set i++
} while i <= 5
```

It first creates a variable `i` with the value `1`, then it enters the loop. The loop will print the value of `i`, then increment `i` by `1`. This will continue until `i` is greater than `5`.

## {$subchapter} break and continue

The `break` master keyword is used to exit a loop early. It can be used in both `for` and `while` loops. Here's an example:

```dosato
do {
    do sayln(i)
    break when i == 3
} for i in range(1, 6)
```


The `continue` master keyword is used to skip the rest of the current iteration and continue with the next iteration. It can be used in both `for` and `while` loops. Here's an example:

```dosato
do {
    continue when i == 3
    do sayln(i)
} for i in range(1, 6)
```

In this example, the loop will print the numbers from `1` to `5`, but it will skip the number `3`.

## {$subchapter} nested loops

Loops can be nested inside each other. This is useful when you want to iterate over multiple lists at the same time. Here's an example of a nested `for` loop:

```dosato
do {
    do sayln(i + " " + j)
} for i in range(0, 3) for j in range(0, 3)
```

This will print:

```raw
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
```

Breaks and continues only affect the innermost loop.

## {$subchapter} until loop

The `until` loop is exactly the same as the `while` loop, but the condition is inverted. It has the following syntax:
```
<master expression> until <condition>
```

Here's an example of an `until` loop that prints the numbers from 1 to 5:

```dosato
make i = 1
do {
    do sayln(i)
    set i++
} until i == 5
```

This will print:

```raw
1
2
3
4
5
```