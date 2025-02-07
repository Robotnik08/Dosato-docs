# {$chapter} {$title}

Variables are used to store data in a program. They are like containers that hold a value. In Dosato, variables are defined using the `make` keyword. Here's an example:

```dosato
make a = 5
```

This creates a variable `a` and assigns the value `5` to it.

First, we use the `make` keyword to define a variable. Then, we specify the name of the variable, followed by an equal sign `=` and then the value we want to assign to the variable.

This variable is now available to use after it's defined. You can use it in expressions, pass it to functions, and change its value. Here's an example:

```dosato
make a = 5
make b = 10
do sayln(a + b) // 15
```

In this example, we define two variables `a` and `b`, and then print their sum to the console.

## {$subchapter} Reassigning Variables

Variables can also be reassigned to a new value. <br>
For that we use the `set` keyword. Here's an example:

```dosato
make a = 5
do sayln(a) // 5
set a = 10
do sayln(a) // 10
```

## {$subchapter} Duplicate Variable Names

Variables cannot be defined with the same name twice in the same scope. If you try to define a variable with the same name as an existing variable, you'll get an error. Here's an example:

```dosato
make a = 5
make a = 10 // Error: Variable 'a' already defined
```

## {$subchapter} Constants

In Dosato, you can define constants using the `const` keyword. The syntax is similar to defining variables with the `make` keyword, but you use `const` instead. Here's an example:

```dosato
const myConstant = 5
```

Constants are similar to variables, but their value cannot be changed once it's set. If you try to reassign a constant, you'll get an error. Here's an example:

```dosato
const myConstant = 5
set myConstant = 10 // Error: Cannot assign to constant
```

Since constants cannot be changed, they are useful for defining values that should not be modified during the execution of the program.


## {$subchapter} Variable Names

Variables can have a variety of names, but they must follow these rules:
- They must start with a letter or an underscore `_`.
- They only contain letters (upper and lower case), numbers, and underscores.
- They cannot be the same as language keywords.

Here are some examples of valid variable names:
```dosato
make a = 5
make _a = 10
make my_variable = 15
make myVariable = 20
make myVariable2 = 25
const MAX_VALUE = 100
```