# {$chapter} {$title}

Variables are used to store data in a program. They are like containers that hold a value. In Dosato, variables are defined using the `make` keyword. Here's an example:

```dosato
make a = 5
```

This creates a variable `a` and assigns the value `5` to it.

First, we use the `make` keyword to define a variable. Then, we specify the name of the variable, followed by an equal sign `=`, and then the value we want to assign to the variable.

This variable is now available to use after it's defined. You can use it in expressions, pass it to functions, and change its value. Here's an example:

```dosato
make a = 5
make b = 10
do sayln(a + b) // 15
```

In this example, we define two variables `a` and `b`, and then print their sum to the console.

Variables can also be reassigned to a new value. Here's an example:

```dosato
make a = 5
do sayln(a) // 5
set a = 10
do sayln(a) // 10
```

Variables cannot be defined with the same name twice in the same scope. If you try to define a variable with the same name as an existing variable, you'll get an error. Here's an example:

```dosato
make a = 5
make a = 10 // Error: Variable 'a' already defined
```

