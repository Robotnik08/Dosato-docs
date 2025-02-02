# {$chapter} {$title}

The next few sections will guide you through teaching you the basics of Dosato. We will go over most of the features of the language, and how to use them.

## {$subchapter} Hello World

Let's start with the classic "Hello, World!" program. In Dosato, this is as simple as it gets:

```dosato
do sayln("Hello, World!")
```

This will output `Hello, World!` to the console.

Let's break this down:

- `do` is a master keyword that tells the interpreter to do call a function.
- `sayln` is a function that prints a line to the console. (including a newline character)
- `(` and `)` are used to enclose the arguments of the function.
- `"Hello, World!"` is a string literal that contains the text we want to print.

## {$subchapter} Master Keywords

Each line of code in Dosato is a statement. Each statement is made up of a master keyword, followed by a set of keywords that dictate the purpose of the line. The master keyword is the first keyword in the line always, and it tells the interpreter what to do with the line. Here are some examples of master keywords:

- `do` is used to call a function.
- `define` is used to define a function.
- `make` is used to define a variable.
- `set` is used to assign a value to a variable.
- `if` is used to create a conditional statement.

Theres a lot more master keywords, and you can find them all in the {#specifications}

We will go into more detail about each of these in the following sections.

## {$subchapter} Comments

Before we continue, let's talk about comments. Comments are lines of text that are ignored by the interpreter. They are used to add notes to your code, or to temporarily disable a line of code. In Dosato, comments start with `//` and continue until the end of the line. Here's an example:

```dosato
// This is a comment
do sayln("Hello, World!") // This is also a comment
```

Anything after `//` is completely ignored by the interpreter.

There's also block comments, which start with `/*` and end with `*/`. These can span multiple lines:

```dosato
/*
This is a block comment
It can span multiple lines
*/
do sayln("Hello, World!") /* This is also a block comment */
do /* This is a block comment */ sayln("Hello, World!")
```

Unclosed block comments will comment out everything until the end of the file.

Comments are ignored in strings, so you can write comments in strings without any issues:

```dosato
do sayln("This is a string with a // and /* */ in it, these aren't comments")
```