# {$chapter} {$title}

Objects in Dosato are a set of key-value pairs. They are used to store data in a structured way. Objects are defined by using curly braces `{}` and a list of key-value pairs separated by commas. 

## {$subchapter} Object definition

An object is defined by using curly braces `{}` and a list of key-value pairs separated by commas. Here's an example:

```dosato
make obj = {name: "Alice", age: 30, is_student: true}
```

This will create an object with three key-value pairs: `name` with the value `"Alice"`, `age` with the value `30`, and `is_student` with the value `true`.

This syntax follows the pattern `key: value`, where `key` is the name of the property and `value` is the value assigned to that property. The key can be any type, not just strings, when not using any quotes, it will be treated as a string as well.

Here's a list of valid object definitions:

```dosato
make obj = {name: "Alice", age: 30, is_student: true}
make obj = {1: "one", 2: "two", 3: "three"}
make obj = {"name": "Alice", "age": 30, "is_student": true}
make obj = {name: "Alice", "age": 30, is_student: true, "1": "one", "2": "two", "3": "three"}
```

## {$subchapter} Accessing fields in objects

To get a property using a key, use the `->` operator. Just like the array hash `#` operator, the object arrow `->` operator can also be used to set the value of a property in an object:

```dosato
make obj = {name: "Alice", age: 30, is_student: true}
do sayln(obj->name) // Alice
set obj->age += 20
do sayln(obj->age) // 50
```

If you try to access a property that doesn't exist, it will return `null`:

```dosato
make obj = {name: "Alice", age: 30, is_student: true}
do sayln(obj->height) // null
```

You can set a property that doesn't exist yet, and it will be created:

```dosato
make obj = {name: "Alice", age: 30, is_student: true}
set obj->height = 180
do sayln(obj->height) // 180
```

## {$subchapter} Iterating over objects

You can iterate over the key-value pairs in an object using the `for` loop. The `for` loop will iterate over each key-value pair in the object:

```dosato
make obj = {name: "Alice", age: 30, is_student: true}
do sayln("Key: " + e#0 + ", Value: " + e#1) for e in entries(obj)
```

the `entries` function will return an array of key-value pairs, where the first element is the key and the second element is the value. This array can be destructured in the `for` loop, where `e` is the array of key-value pairs, and `e#0` is the key and `e#1` is the value.

There's also the `keys` and `values` functions, which will return an array of keys and values respectively:

```dosato
make obj = {name: "Alice", age: 30, is_student: true}
do sayln("Key: " + key + ", Value: " + obj->(key)) for key in keys(obj)
do sayln("Value: " + value) for value in values(obj)
```

## {$subchapter} Identifiers and object keys

When using identifiers as keys, if you don't include the colon `:`, the key will be treated as a string.

```dosato
make key = "name"
make obj = {key: "Alice"} // {"key": "Alice"}
```

Even though the key is a variable, it will be treated as a string.

If you want to use the variable value as the key, you need to put it in parentheses:

```dosato
make key = "name"
make obj = {(key): "Alice"} // {"name": "Alice"}
```

This goes the same for accessing the property:

```dosato
make obj = {name: "Alice"}
make key = "name"
do sayln(obj->(key)) // Alice
```

If you don't use the colon, the key will be treated as string, and the value will be the value of said variable.

```dosato
make x = 10
make y = 20
make z = 30
make obj = {x, y, z} // {x: 10, y: 20, z: 30}
```

This makes shorthand object creation easier.

## {$subchapter} Removing fields from objects

To remove a property from an object, use the `-` operator:

```dosato
make obj = {name: "Alice", age: 30, is_student: true}
set obj -= "name"
do sayln(obj) // {age: 30, is_student: true}
```

## {$subchapter} Object references

When you assign an object to a variable, you are actually assigning a reference to the object, not the object itself. This means that if you assign the object to another variable, both variables will reference the same object:

```dosato
make obj1 = {name: "Alice", age: 30}
make obj2 = obj1
set obj2->name = "Bob"
do sayln(obj1->name) // Bob
```

In this example, changing the `name` property of `obj2` also changes the `name` property of `obj1`, because they both reference the same object.

If you want to create a copy of an object, you can use the `*` unary operator:

```dosato
make obj1 = {name: "Alice", age: 30}
make obj2 = *obj1
set obj2->name = "Bob"
do sayln(obj1->name) // Alice
```

In this example, `obj2` is a copy of `obj1`, so changing the `name` property of `obj2` does not affect `obj1`.

## {$subchapter} Self-referencing objects

An edge case to be aware of is self-referencing objects. If an object contains a reference to itself, the object will act differently:

```dosato
make obj = {}
set obj->obj = obj
do sayln(obj) // {obj: {...}}
```

This will create an object that contains a reference to itself, which is fundamentally allowed, just the resulting string when printing the object will be `{obj: {...}}`, to signify that the object contains a reference to itself.

## {$subchapter} JSON

Dosato's object syntax is similar to JSON, but there are some differences. For example, in JSON, keys must be strings, and strings must be enclosed in double quotes. In Dosato, keys can be any type, and strings can be enclosed in double quotes or not.