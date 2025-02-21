# {$chapter} {$title}

Handling errors in dosato can be done with the `catch` extension keyword. Putting `catch` after a line of code will catch any errors without quitting the program and then run it's body.

## {$subchapter} Syntax

```dosato
do undefined_function() catch {
    do sayln("An error occurred")
}

do sayln("This will be printed")
```

In this example, the `undefined_function` function is called, which will throw an error because it is not defined. The `catch` keyword catches the error and runs the code block inside it, which prints "An error occurred" to the console.

The code block inside the `catch` keyword can contain any code that you want to run when an error occurs. The program will continue running after the `catch` block.

## {$subchapter} Error code

Whenever `catch` catches an error, it will set the `_` variable to the error code. The error code is a number signifying the type of error that occurred. You can use this error code to determine what kind of error occurred.

Here's an example:

```dosato
do undefined_function() catch {
    do sayln("An error occurred with code " + _) // code 34
}
```

In this example, the `_` variable is used to print the error code to the console. The error code `34` signifies that the function was not defined.

For a list of error codes, see the {#errors} chapter.

## {$subchapter} Throwing errors

You can throw an error in dosato with the `throw` function. The `throw` function takes an error code as an argument and throws an error with that code.

Here's an example:

```dosato
do throw(1)
```

In this example, the `throw` function is called with the error code `1`. This will throw an error with the code `1` (invalid number literal).

You can also throw an error with a custom message by passing a string as argument to the `throw` function:

```dosato
do throw("You called the throw function")
```

This will print this:

```raw
ERROR: 
You called the throw function
At line 1:4 in <your_file.to>

do throw("You called the throw function")
   ^^^^^
```

With the correct format and all.