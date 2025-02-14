# {$chapter} {$title}

Expressions are the building blocks of any programming language. They are the fundamental way to represent computations. In this chapter, we will discuss the different types of expressions in the language.

Expressions can appear in many places in the language, such as in variable assignments, function calls, and control structures. They can be as simple as a single value or as complex as a combination of multiple values and operators.

For a list of operators, see the {#specifications_operators} chapter.

## {$subchapter} Binary expressions

Binary expressions are expressions that operate on two operands. The operands can be of any type, and the operator can be any binary operator. Here are some examples of binary expressions:

```dosato
make a = 5 + 3 // 8
make b = 10 - 2 // 8
make c = 2 * 4 // 8

make d = 10 / 2 // 5
make e = 10 % 3 // 1
```

In this example, we use the `+`, `-`, `*`, `/`, and `%` operators to perform addition, subtraction, multiplication, division, and modulo operations on two operands.

In the {#specifications_operators} chapter, you can find a full list of binary operators and their interactions with different types.

## {$subchapter} Unary expressions

Unary expressions are expressions that operate on a single operand. The operand can be of any type, and the operator can be any unary operator. Here are some examples of unary expressions:

```dosato
make a = -5 // -5
make b = !true // false
```

In this example, we use the `-` and `!` operators to negate a number and invert a boolean value.

In the {#specifications_operators} chapter, you can find a full list of unary operators and their interactions with different types.

## {$subchapter} Ternary expressions

Ternary expressions are expressions that operate on three operands. The first operand is a boolean expression, and the second and third operands are the values to return based on the boolean expression. Here's an example of a ternary expression:

```dosato
make a = true ? 5 : 10 // 5
make b = false ? 5 : 10 // 10
```

In this example, we use the `?` and `:` operators to return different values based on the boolean expression.

## {$subchapter} Parentheses and operator precedence

The normal mathematical rules of operator precedence apply in Dosato. Multiplication and division have higher precedence than addition and subtraction. Operators with the same precedence are evaluated from left to right.

Parentheses can be used to group expressions and control the order of evaluation. Expressions inside parentheses are evaluated first. Here's an example:

```dosato
make a = 5 + 3 * 2 // 11
make b = (5 + 3) * 2 // 16
```

In this example, we use parentheses to change the order of evaluation of the addition and multiplication operations.

A full list of operators and their precedence can be found in the {#specifications_operators} chapter.

## {$subchapter} Assignment expressions

Assignment expressions are expressions that reassign a value with `set`. Here's an example of an assignment expression:

```dosato
make a = 5
set a += 3 // a is now 8
```

In this example, we use the `+=` operator to add `3` to the value of `a` and reassign it to `a`.

Assignment expressions are binary expressions with a `=` operator on the right side. They can be combined with other operators to perform different operations.

## {$subchapter} Increment and decrement expressions

Increment and decrement expressions are expressions that increase or decrease the value of a variable by `1`. Here's an example of an increment expression:

```dosato
make a = 5
set a++ // a is now 6
set a-- // a is now 5
```

## {$subchapter} Other expressions

Other expressions we will discuss in later chapters:

- {#arrays}
- {#objects}
- {#functions}
- {#lambda_functions}