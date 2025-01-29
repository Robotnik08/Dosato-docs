<button id="dark-mode-toggle">🌙</button>
# Dosato

This is the homepage of the full Dosato documentation

## Brief introduction to Dosato

Dosato is a high level, general purpose, interpreted programming language designed to be easy to use.<br>
Dosato is built with user readability in mind, every line must start with one of the master keywords:

```dosato
do
set
make
define
return
break
continue
import
include
switch
const
class
implement
enum
```

These keywords represent the core features of the programming language. These make spotting lines and visualising structures way easier. <br>
This also means that the semicolon is not needed to end a line, allowing for semicolon-less code with full whitespace support.

Below is an example.

```dosato
do say ("Hello world!") // do 
make int number = 5 // make 
set number = 10 // set
```

**do: Calls a function or block**
A function must start with the function name, followed by parentheses containing the arguments passed into the function.

**make: creates a new variable (or function).**
The variable is put on the stack. A type must be given, this is the type of the variable and it won't change.

**set: sets a variable to a new value.**
Variables retain their type. 

**define: defines a new function.**
Functions must be defined before they are called. 

**return: returns a value from a function.**
Functions must return a value of the same type as the function. 

**break: breaks out of a loop or switch case.**
Breaks out of the current loop. 

**continue: continues to the next iteration of a loop.**
Continues to the next iteration of the current loop. 

**import: imports a module.**
Imports a cdosato module, written in C or other. 

**include: includes a file.**
Includes a dosato source file in the current script. 

**switch: starts a switch case.**
Starts a switch case. 

**const: creates a constant.**
Creates a constant variable. 

**class: creates a class.**
Creates a class. 

**implement: implement a method.**
Implements a method in a class. 

**enum: creates an enum.**
Creates an enum. 

## Want to learn more?

## Start here:

{$all_pages}