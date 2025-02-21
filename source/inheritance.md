# {$chapter} {$title}

Class inheritance is a way to create a new class based on an existing class. The new class inherits the properties and methods of the existing class, and can add new properties and methods or override existing ones. 

## {$subchapter} inherit keyword

The `inherit` master keyword is used to merge the properties and methods of a parent class into a child class. The syntax of the `inherit` keyword is as follows:

```dosato
class Parent () {
    set self->name = "Parent"
    do sayln("Parent constructor")
}

class Child () {
    inherit Parent()
    set self->name = "Child"
    do sayln("Child constructor")
}

make child = Child()
```

This will output the following to the console:

```raw
Parent constructor
Child constructor
```

In this example, the `Child` class inherits the properties and methods of the `Parent` class. The `inherit` keyword is followed by the name of the parent class, and the properties and methods of the parent class are merged into the child class.

The constructor of the parent class is called before the constructor of the child class. This allows the child class to override the properties and methods of the parent class if needed.

## {$subchapter} Overriding methods

When a child class inherits a method from a parent class, it can override the method by redefining the value of the method in the child class.

This can't be done with the `implement` keyword, as it will only add the method to the child class if it doesn't exist yet.

Here's an example of a child class overriding a method from a parent class:

```dosato
class Parent () {
    implement my_method() {
        do sayln("Override me")
    }
}

class Child () {
    inherit Parent()
    set self->my_method = void () => {
        do sayln("Overridden")
    }
}

make a = Parent()
make b = Child()

do a->my_method() // Override me
do b->my_method() // Overridden
```

In this example, the `Child` class overrides the `my_method` method from the `Parent` class. The `my_method` method is redefined in the `Child` class, and when the method is called on an object of the `Child` class, the overridden method is executed. Overriding here is done with {#lambda_functions}, but it can also be done any other way to declare a function.