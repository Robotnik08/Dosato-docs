# {$chapter} {$title}

Including files is a way to reuse content in multiple places, split a big project into smaller files, and keep the content organized.

It allows for a modern modular approach to writing and maintaining content.

Including can only be done on global scope, and not inside functions or other blocks.

## {$subchapter} Including files

To include another source file, use the `include` master keyword followed by the path to the file you want to include as a string.

```dosato
include "other.to"
```

The path can be relative to the current file or an absolute path.

These are valid paths:

```dosato
include "other.to" // in the same directory
include "./other.to" // in the same directory
include "../other.to" // in the parent directory
include "/path/to/other.to" // absolute path
include "../path/to/other.to" // relative to the parent directory
```

The included file will be inserted at the location of the `include` keyword.

## {$subchapter} Including source files

When you include a source file, the content of the file is inserted at the location of the `include` keyword.

The included source file, will be parsed and run as if it was part of the original file.

The code inside is ran, and the functions, classes, enums and variables are available in the original file.

Here's an example:

```dosato
// other.to
define other_function() {
    do sayln("Hello from other file")
}
```


```dosato
// main.to
include "other.to"

do other_function() // Hello from other file
```

In this example, the `other_function` function is defined in the `other.to` file and included in the `main.to` file.

The `other_function` function is then called in the `main.to` file.

Included source files can include their own source files, and so on.

## {$subchapter} Include loops

Dosato will throw an error if it detects an include loop (or if too many files are included).

An include loop occurs when two or more files include each other directly or indirectly.

For example, if `file1.to` includes `file2.to`, and `file2.to` includes `file1.to`, an include loop is created.

To avoid include loops, make sure that files do not include each other directly or indirectly.