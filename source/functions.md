# {$chapter} {$title}

Functions are blocks of code that can be called by name. They can take parameters and return values. Functions are a way to organize code into reusable pieces.

## {$subchapter} Function declaration

The most common way to declare functions is with the `define` master keyword. Here's a simple function that takes no parameters and returns nothing:

```dosato
define greet() {
    do sayln("Hello!")
}
```

This function is called `greet`, and it prints `Hello!` to the console. The function body is enclosed in curly braces `{}`.

The syntax for defining a function is:

- The `define` keyword.
- The function name, this can be any valid identifier (like variable names) but must not be a duplicate of another function or variable name.
- A list of parameters enclosed in parentheses `()`. If the function takes no parameters, leave the parentheses empty.
- The function body enclosed in curly braces `{}`.
- The code goes inside the curly braces.

## {$subchapter} Function invocation

To call a function, use the `do` master keyword followed by the function name and any arguments. Here's how you call the `greet` function:

```dosato
do greet() // Hello!
```

This will print `Hello!` to the console.

## {$subchapter} Function parameters

Functions can take parameters to accept input values. Parameters are specified in the function declaration inside the parentheses `()`. Here's an example of a function that takes a parameter:

```dosato
define greet(name) {
    do sayln("Hello, " + name + "!")
}
```

The parameter `name` is used inside the function body to print a personalized greeting. When you call this function, you need to provide a value for the `name` parameter:

```dosato
do greet("Alice") // Hello, Alice!
```

Calling the function without the right number of arguments will result in an error.

To define a function with multiple parameters, separate them with commas:

```dosato
define greet(name, age) {
    do sayln("Hello, " + name + "! You are " + age + " years old.")
}
```

Which when calling, also needs to provide the right number of arguments in the right order separated by commas:

```dosato
do greet("Alice", 30) // Hello, Alice! You are 30 years old.
```

Optionally, you can provide a type for the parameters:

```dosato
define greet(string name, int age) {
    do sayln("Hello, " + name + "! You are " + age + " years old.")
}
```

This means the values will be automatically converted to the specified type. If the value cannot be converted, an error will be thrown.

## {$subchapter} Default parameters

You can provide default values for parameters. If a parameter is not provided when calling the function, the default value will be used. Here's an example:

```dosato
define greet(name = "World") {
    do sayln("Hello, " + name + "!")
}
```

If you call this function without a parameter, it will use the default value:

```dosato
do greet() // Hello, World!
do greet("Alice") // Hello, Alice!
```

This can be combined with regular parameters, but the default parameters must come after the regular parameters.

```dosato
define greet(name, age = 30) {
    do sayln("Hello, " + name + "! You are " + age + " years old.")
}
```

This can also be combined with typed parameters:

```dosato
define greet(string name, int age = 30) {
    do sayln("Hello, " + name + "! You are " + age + " years old.")
}
```

## {$subchapter} Function return values

Functions can return values using the `return` master keyword. Here's an example of a function that returns a value:

```dosato
define add(a, b) {
    return a + b
}
```

This function takes two parameters `a` and `b`, and returns their sum. To use the return value, assign it to a variable:

A function can be called inside an expression without the `do` keyword:

```dosato
make result = add(5, 10)
do sayln(result) // 15
```

The `return` keyword can be used to return a value from a function at any point in the function body. Once a `return` statement is executed, the function will stop executing and return the value.

```dosato
define add(a, b) {
    if a < 0 {
        return 0
    }
    return a + b
}
```

In this example, if `a` is less than `0`, the function will return `0` and stop executing. Otherwise, it will return the sum of `a` and `b`.

## {$subchapter} Return type

Optionally, you can provide a return type for the function. This is done by specifying the type before the function name:

```dosato
define int add(int a, int b) {
    return a + b
}
```

This means the function will return a value of type `int`. If the return value cannot be converted to the specified type, an error will be thrown.

## {$subchapter} Void return type

Theres a special return type called `void`. This means the function does not return a value. If you try to return a value from a `void` function, an error will be thrown.

```dosato
define void greet() {
    do sayln("Hello!")
}
```

The function can however use the `return` keyword to stop execution and return nothing.

```dosato
define void greet() {
    return
    do sayln("This will never be printed")
}
```

A function that doesn't return or returns void always returns `null`.

## {$subchapter} Definition order

Functions must be defined in the global scope, they cannot be defined inside other functions, blocks, etc. Functions can be defined in any order, and because they are hoisted, they can be called before they are defined.

```dosato
do greet() // Hello!

// Functions can be called before it's defined
define greet() {
    do sayln("Hello!")
}
```

## {$subchapter} Anonymous functions

More information on anonymous functions can be found here: {#lambda_functions}