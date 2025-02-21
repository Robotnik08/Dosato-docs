# {$chapter} {$title}

Enums are a way to define a set of named constants. They are useful when you have a fixed set of values that you want to use in your program.

## {$subchapter} Enum definition

An enum is defined by using the `enum` keyword followed by the enum name and a list of values separated by commas. Here's an example:

```dosato
enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
```

This will create an enum called `Days` with seven values: `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, and `Sunday`.

These values can be accessed like any other property of an object:

```dosato
do sayln(Days->Monday) // 0
do sayln(Days->Tuesday) // 1
do sayln(Days->Wednesday) // 2
do sayln(Days->Thursday) // 3
do sayln(Days->Friday) // 4
do sayln(Days->Saturday) // 5
do sayln(Days->Sunday) // 6
```

The values of the enum start at 0 and increment by 1 for each value.

## {$subchapter} Enum values

The values of an enum are just numbers. By default, the first value is 0, and each subsequent value is incremented by 1. You can also assign specific values to the enum values:

```dosato
enum Days {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}
```

This will create an enum called `Days` with seven values, where `Monday` is 1, `Tuesday` is 2, and so on.

You can also assign values to some of the enum values and let the rest be auto-incremented:

```dosato
enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
```

This enum has the same values as the previous example, where `Monday` is 1, `Tuesday` is 2, and so on.

## {$subchapter} Common use cases

Enums are useful when you have a fixed set of values that you want to use in your program. For example, you can use enums to represent the days of the week, the months of the year, or the directions on a compass.

Here's an example of using an enum to represent the days of the week:

```dosato
enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

define say_day_message (day) {
    match day => {
        Days->Monday => {
            do sayln("It's Monday, back to work!")
        }
        Days->Tuesday => {
            do sayln("It's Tuesday, getting into the week")
        }
        Days->Wednesday => {
            do sayln("It's Wednesday, keep going!")
        }
        Days->Thursday => {
            do sayln("It's Thursday, almost the weekend!")
        }
        Days->Friday => {
            do sayln("It's Friday, almost the weekend!")
        }
        Days->Saturday => {
            do sayln("It's Saturday, the weekend is here!")
        }
        Days->Sunday => {
            do sayln("It's Sunday, time to relax")
        }
    }
}

make today = Days->Monday
do say_day_message(today)
```

This will output:

```txt
It's Monday, back to work!
```

In this example, we define an enum `Days` to represent the days of the week. We then define a function `say_day_message` that takes a day as an argument and prints a message based on the day. We use it with the `match` keyword to match the day and print the corresponding message.