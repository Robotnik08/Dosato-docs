# {$chapter} {$title}

Dosato variables can be of different types, by default the type is mutable and can be changed at any time, but it is possible to make them immutable.

```dosato
make a = 42 // mutable type
make int b = 42 // immutable/static type
```

If you try and assign a value of a different type to `b` it will get converted to the correct type, which in this case is an integer.

```dosato
set b = 3.14 // b is now 3
```
`a` on the other hand can be assigned any type of value.

```dosato
set a = "Hello" // a is now "Hello"
```

## {$subchapter} Number types

Numbers in Dosato come in a few different types, generally they are either integers or floating point numbers.

### Integers

Integers are whole numbers, they can be positive or negative (depending on the sign). They can be written in decimal, hexadecimal, octal or binary format.

```dosato
make a = 42
make b = -10
make c = 0x2A // hexadecimal
make d = 0o52 // octal
make e = 0b101010 // binary
```

Integers by default are 64-bit signed integers, called `long`.

Theres also other integer types, `int` which is a 32-bit signed integer, `short` which is a 16-bit signed integer and `byte` which is an 8-bit signed integer.

```dosato
make long a = 42
make int b = 42
make short c = 42
make byte d = 42
```

Theres also unsigned versions of these types, `ulong`, `uint`, `ushort` and `ubyte`.

### Floating point numbers

Floating point numbers are numbers that have a decimal point in them. They can be positive or negative.

```dosato
make a = 3.14
make b = -1.0
```

Floating point numbers by default are 64-bit double precision floating point numbers, called `double`.

Theres also a 32-bit single precision floating point number, called `float`.

```dosato
make double a = 3.14
make float b = 3.14
```

## {$subchapter} Boolean type

Booleans are a type that can only have two values, `true` or `false`.

```dosato
make a = true
make b = false
```

They have the `bool` type.

```dosato
make bool a = true
make bool b = false
```

## {$subchapter} String type

Strings are a sequence of characters, they can be written using double quotes.

```dosato
make a = "Hello, World!"
```

Strings have the `string` type.

```dosato
make string a = "Hello, World!"
```

## {$subchapter} Char type

Chars are a single character, they can be written using single quotes.

```dosato
make a = 'a'
```

Chars have the `char` type.

```dosato
make char a = 'a'
```

The `char` type is actually an alias for the `ubyte` type, so it can be used in number calculations and operations.

## {$subchapter} Array type

An array is a collection of elements, they can be of any type.

More information on arrays can be found here: {#arrays}

## {$subchapter} Object type

An object is a collection of properties, they can be of any type.

More information on objects can be found here: {#objects}

## {$subchapter} Null type

The `null` type is a special type that represents the absence of a value. It is used to indicate that a variable does not have a value assigned to it.

```dosato
make a = null
```

This type cannot be explicitly given to a variable, it is only used when a variable is not assigned a value.

## {$subchapter} Dynamic type

By default, variables in Dosato are of the dynamic type. This means that they can hold values of any type.

```dosato
make var a = 42
set a = "Hello"
```

The `var` type is the type name, but it's not nessessary to write it, as it is the default type.