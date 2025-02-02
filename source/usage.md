# {$chapter} {$title}

## {$subchapter} Running dosato code

To start running dosato code, you either directly run the interpreter with the code as an argument, or you can run a file with the code in it.

For running a file save your code in a file with the extension `.to` (optional but prefered) and run the following command:

```bash
dosato <filename>
```

For example, if you have a file called `hello.to` with the following code:

```dosato
do sayln("Hello, World!")
```

You can run it with the following command:

```bash
dosato hello.to
```

This will output `Hello, World!` to the console. <br>

If you want to run code directly, you can run the following command:

```bash
dosato -c
```

and then type your code. The input ends when you press enter, unless you put a backslash at the end of the line. <br>

For example, if you type the following code:

## {$subchapter} Other commands

- `dosato -h` or `dosato --help` Shows the help message, which shows all the available commands.
- `dosato -v` or `dosato --version` Shows the version of dosato.
- `dosato -c` Starts the interpreter in interactive mode.
- `dosato <filename> -d` Starts the interpreter in debug mode.
    - `dosato <filename> -d -s` Starts the interpreter in debug mode and shows the source code of the root file.
    - `dosato <filename> -d -l` Starts the interpreter in debug mode and shows the lexed tokens of the root file.
    - `dosato <filename> -d -p` Starts the interpreter in debug mode and shows the parsed AST of the root file.
    - `dosato <filename> -d -c` Starts the interpreter in debug mode and shows the compiled bytecode of the root files, and all compiled functions (even in other files).
    - `dosato <filename> -d -a` Starts the interpreter in debug mode and shows all of the above.
    - `dosato <filename> -d -n` Starts the interpreter in debug mode and doesn't show anything, but still runs the code. (the same as running `-d` without any flags)