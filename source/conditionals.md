# {$chapter} {$title}

Conditional statements are used to execute code based on conditions, allowing for more complex control flow in your programs. 

## {$subchapter} if statement

The `if` master keyword is used to declare an if statement. The code block inside the if statement is executed only if the condition is true. Here's an example:

```dosato
if true then {
    do sayln("This will be printed")
}
```

In this example, the code block inside the if statement will be executed because the condition `true` is always true.

The syntax of an if statement is as follows:

```dosato
if <condition> then {
    <code block>
}
```

First, the `if` keyword is followed by the condition (optional parenthesis). After that, the `then` keyword is used to indicate the start of the code block. The code block is enclosed in curly braces `{}`, or can be a single statement without braces.

The condition can be any expression, the intepreter will evaluate it to be either true or false. If the condition is true, the code block will be executed.

You don't have to use curly braces if you have a single function call in the code block, this is because of the behaviour of the `then` extension:


```dosato
if true then sayln("This will be printed")
```

## {$subchapter} else statement

The `else` master keyword is used to declare an else statement. The code block inside the else statement is executed only if the condition of the if statement is false. Here's an example:

```dosato
if false then {
    do sayln("This will not be printed")
} else {
    do sayln("This will be printed")
}
```

In this example, the code block inside the else statement will be executed because the condition `false` is always false.

The syntax of an else statement is as follows:

```dosato
if <condition> then {
    <code block>
} else {
    <code block>
}
```

After the full if statement, you can add an else statement. The `else` keyword is followed by the code block or function call that should be executed if the condition of the if statement before it is false.

## {$subchapter} else if statement

You can append an `else if` statement to an if statement to check multiple conditions. The `else if` statement is used to check another condition if the condition of the if statement is false. Here's an example:

```dosato
make password = listen() // keyboard input
if password == "1234" then {
    do sayln("Access granted")
} else if password == "4321" then {
    do sayln("Access granted as admin")
} else {
    do sayln("Access denied")
}
```

In this example, the code block inside the else if statement will be executed because the condition `true` is true.

The syntax of an else if statement is as follows:

```dosato
if <condition> then {
    <code block>
} else if <condition> then {
    <code block>
}
```

You can add as many `else if` statements as you need to check multiple conditions. The code block of the first `else if` statement that has a true condition will be executed, the rest will be ignored.

## {$subchapter} when/unless extension

`when` and `unless` are master extensions that are used to run one liners based on a condition. They are similar to the `if` statement, but they are used for single line statements. Here's an example:

```dosato
do sayln("This will be printed") when true
```

They are put after the statement they are affecting, and the condition is evaluated before the statement is executed. The `unless` extension is the opposite of `when`, it will only execute the statement if the condition is false.

```dosato
do sayln("This will not be printed") unless true
```

This is powerful, as it allows for seemless integration and one liners with more then just function calls.

```dosato
set a++ when a < 10

break when a == 5

return a unless a < 10
```

`when` and `unless` affect everything before them, for example:

```dosato
if true then do sayln("This will be printed") when condition
```

This whole if statement will only be executed if the `condition` is true for the when.

The `else` extension can be used with `when` and `unless` to add an else statement to the expression:

```dosato
do sayln("This will be printed") when true else sayln("This will not be printed")
```

## {$subchapter} switch/match

The `switch` or `match` master keywords are used to compare a value against multiple cases and execute the code block of the matching case. Here's an example:

```dosato
make day = "Monday"
match day => {
    "Monday" => {
        do sayln("It's Monday")
    }
    "Tuesday" => {
        do sayln("It's Tuesday")
    }
    other => {
        do sayln("It's not Monday or Tuesday")
    }
}
```

In this example, the code block inside the case `"Monday"` will be executed because the value of `day` is `"Monday"`. The `other` case is a catch-all case that will be executed if none of the other cases match.

The syntax for `switch` and `match` is as follows:

```dosato
switch/match <value> => {
    <case> => {
        <code block>
    }
    <case> => {
        <code block>
    }
    other => {
        <code block>
    }
}
```

The arrow `=>` is used to separate the value from the cases. The cases are compared to the value, and if a case matches, the code block of that case will run. The `other` case is a catch-all case that will run if none of the other cases match.

A case can be any value of any type. The `other` case is optional, if it's not present and there's no match, the switch/match statement will do nothing.

The `switch` and `match` keywords are similar to each other, but `switch` allows for fallthrough cases, while `match` does not.

```dosato
make day = "Monday"
switch day => {
    "Monday" => {
        do sayln("It's Monday")
        break
    }
    "Tuesday" => {
        do sayln("It's Tuesday")
        break
    }
    "Wednesday" => {
        do sayln("It's Wednesday")
        break
    }
    "Thursday" => {
        do sayln("It's Thursday")
        break
    }
    "Friday" => {
        do sayln("It's Friday")
        break
    }
    "Saturday" => {
        do sayln("It's Saturday")
        break
    }
    "Sunday" => {
        do sayln("It's Sunday")
        break
    }
    other => {
        do sayln("It's not a day of the week")
        break
    }
}
```

The break keyword is used to stop the execution of the switch statement. If a case is matched, the code block of that case will be executed, and the switch statement will try to fall through to the next case. If you don't want this, you need to use the `break` keyword to stop the execution or use the `match` keyword.

Heres an example where fallthrough is used:

```dosato
make num = 2
switch num => {
    1 => {
        do sayln("It's 1")
        break
    }
    2 => {
        do sayln("It's 2")
    } // fallthrough
    3 => {
        do sayln("It's 2 or 3")
        break
    }
    other => {
        do sayln("It's not 1, 2, or 3")
        break
    }
}
```

This will output:

```txt
It's 2
It's 2 or 3
```

Multiple cases can be matched in a single case, by using a comma separated list of values:

```dosato

make day = "Monday"
match day => {
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" => {
        do sayln("It's a weekday")
    }
    "Saturday", "Sunday" => {
        do sayln("It's a weekend")
    }
    other => {
        do sayln("It's not a day of the week")
    }
}
```