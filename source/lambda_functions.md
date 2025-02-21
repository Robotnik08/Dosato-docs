# {$chapter} {$title}

Lambda functions are anonymous functions that can be defined in a single line or expression. They are useful for defining simple functions that are used only once or for passing functions as arguments to other functions. Lambda functions are defined using a specific syntax.

## {$subchapter} Lambda expressions

Lambda expressions are defined by writing the type, parameters followed by the `=>` operator and the body of the function. Here's an example of a lambda expression that takes two parameters and returns their sum:

```dosato
make add = var (a, b) => {return a + b}

do sayln(add(5, 10)) // 15
```

In this example, the lambda expression `var (a, b) => {return a + b}` takes two parameters `a` and `b` and returns their sum. The lambda expression is assigned to the variable `add`, which can then be called like a regular function.

The `var` type is used to signify that the lambda function's return type can be any types. On normal functions this is not needed, but on lambda functions we need to specifify the return type as part of the syntax.

## {$subchapter} First class functions

Functions in Dosato are first class citizens, which means they can be passed as arguments to other functions, returned from functions, and assigned to variables. This allows you to create higher-order functions that take functions as arguments or return functions as values.

Here's an example of a higher-order function that takes a function as an argument:

```dosato
make apply = var (f, a, b) => {return f(a, b)}

make add = var (a, b) => {return a + b}

do sayln(apply(add, 5, 10)) // 15
```

In this example, the higher-order function `apply` takes a function `f` and two arguments `a` and `b`. It then calls the function `f` with the arguments `a` and `b` and returns the result. The `add` function is defined separately and passed as an argument to the `apply` function.

## {$subchapter} Lambda return type

You have to specify the return type of the lambda function. This is done by writing the type before the parameters. For the above examples we used `var` as the return type, but you can use any type you want.

Here's an example of a lambda expression with a return type:

```dosato
make add = int (int a, int b) => {return a + b}

do sayln(add(5, 10)) // 15
```

It behaves the same as normal {#functions}. Meaning it also support parameter types and default values.

## {$subchapter} Common use cases

Lambda functions are commonly used in functional programming paradigms, where functions are treated as first-class citizens and can be passed around as arguments or returned from other functions. They are also useful for defining simple functions inline without having to give them a name.

Here's an example of using a lambda function with the `map` function to apply a function to each element of a list:

```dosato
make numbers = [1, 2, 3, 4, 5]
do sayln(map(numbers, var (x, i) => {return x * 2})) // [2, 4, 6, 8, 10]
```

In this example, the `map` function takes a list of numbers and a lambda function that multiplies each number by 2. The lambda function is defined inline and passed as an argument to the `map` function.

Another common example is using the lambda function within a `sort` function to sort a list of numbers in descending order:

```dosato
make numbers = [5, 3, 1, 4, 2]
do sayln(sort(numbers, var (a, b) => {return b - a})) // [5, 4, 3, 2, 1]
```

In this example, the `sort` function takes a list of numbers and a lambda function that compares two numbers and returns the difference between them. The lambda function is defined inline and passed as an argument to the `sort` function.

More array based functions that take lambda functions can be found in the {#standard_library_array} chapter.