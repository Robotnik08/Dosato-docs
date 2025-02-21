# {$chapter} {$title}

Dosato supports importing external libraries to extend its functionality. This is done using the `import` keyword. Here's an example:

```dosato
import "graphics" // import a library called graphics
```

This will import the `graphics` library, which can then be used in the program. The library must be installed on the system for this to work.

Importing can only be done on global scope, and not inside functions or other blocks.

By default, you won't have any libraries installed, the standard library is already included by default.

Libraries are written in C or other, and use the Dosato API to interact with the Dosato runtime.

To create a library, take a look at this chapter: {#creating_libraries}.

## {$subchapter} Import paths

The path to the library can be either an absolute path or a relative path. If the path is relative, it will be resolved relative to the current working directory of the program.

Here are some examples of valid paths:

```dosato
import "graphics" // in the same directory, OR a path (like Dosato/libraries)
import "./graphics" // in the same directory
import "../graphics" // in the parent directory
import "/path/to/graphics" // absolute path
import "../path/to/graphics" // relative to the parent directory
```

You do not have to include the file extension in the path, Dosato will automatically look for the correct file (.dll on Windows, .so on Linux, etc).

## {$subchapter} Imported functions

Once you import a library, it's functions are available to use in the program. Here's an example:

```dosato
import "my_lib"

do my_function() // call a function from the library
```

The functions are put on the global scope, so you can call them directly.

If a function is already defined in the program, the intepreter will throw an error.