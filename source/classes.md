# {$chapter} {$title}

Classes in Dosato are a way to add a constructor and methods to objects. They are defined using the `class` keyword followed by the class name and a code block. The code block contains the constructor and methods of the class.

## {$subchapter} Class definition

A class is defined by using the `class` keyword followed by the class name and a code block. Here's an example:

```dosato
class Person () {
    // empty class
}
```

The `class` master keyword, like a function, is followed by the class name. The class name can be any valid identifier and then the parentheses for the constructor arguments. The code block contains the constructor and methods of the class.

## {$subchapter} Constructor

The class body acts as the constructor of the class. If you call this class like a function, the body of the class is run like a function, and at the end, it returns an object with the methods and properties defined in the class.

Here's an example of a class with a constructor:

```dosato
class Person (name, age) {
    set self->name = name
    set self->age = age
}

make bob = Person("Bob", 30) // bob is now an object with the properties name and age
do sayln(bob->name) // Bob
do sayln(bob->age) // 30
```

In this example, the `Person` class has a constructor that takes two arguments: `name` and `age`. The constructor sets the properties `name` and `age` of the object to the values passed as arguments.

## {$subchapter} self keyword

Inside a class, the `self` keyword refers to the object that is being created. You can use the `self` keyword to access the properties and methods of the object.

Here's an example:

```dosato
class Person (name, age) {
    set self->name = name
    set self->age = age

    do sayln(self->name)
    do sayln(self->age)
}

make bob = Person("Bob", 30)
```

## {$subchapter} Methods

Methods are functions that are defined inside a class. They can be called on objects of that class. Methods can access the properties of the object using the `class` keyword.

Here's an example of a class with a method:

```dosato
class Person (name, age) {
    set self->name = name
    set self->age = age

    implement say_hello() {
        do sayln("Hello, my name is " + self->name)
    }
}

make bob = Person("Bob", 30)
do bob->say_hello() // Hello, my name is Bob
```

In this example, the `Person` class has a method `say_hello` that prints a message to the console using the `name` property of the object.

The `implement` master keyword is used to define a method inside a class. The method name is followed by a code block that contains the implementation of the method, it works the exact same way as defining a function.

The order of the methods does matter, you can't call a method before it's defined.

Methods are the exact same as {#functions}. They can take arguments, return values, and call other methods or functions. They also can have return types, parameters types, and default values.