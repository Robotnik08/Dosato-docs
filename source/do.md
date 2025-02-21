# {$chapter} {$title}

One of the most important master keyword in Dosato is the `do` keyword. It is used to execute a block of code or function. Here's an example:

```dosato
do {
    do sayln("Hello, world!")
    do sayln("This is a new line.")
}
```

This will output the following to the console:

```raw
Hello, world!
This is a new line.
```

The `do` keyword can also be used to call a function, for example the `sayln` function:

```dosato
do sayln("Hello, world!")
```

`sayln` is a standard library function that prints the given string to the console, followed by a newline character.

For the remainder of this guide, we will use the `do` keyword to execute code, and the `sayln` function to print to the console.

In the next chapters we will talk about functions and how to define them.