# {$chapter} {$title}

## {$subchapter} Constants

### - <code class="language-dosato">maxlong: long</code>

Maximum value of a long integer. This is the maximum value that can be stored in a long integer variable. equal to `9223372036854775807`.

### - <code class="language-dosato">minlong: long</code>

Minimum value of a long integer. This is the minimum value that can be stored in a long integer variable. equal to `-9223372036854775808`.

### - <code class="language-dosato">maxint: long</code>

Maximum value of an integer. This is the maximum value that can be stored in an integer variable. equal to `2147483647`.

### - <code class="language-dosato">minint: long</code>

Minimum value of an integer. This is the minimum value that can be stored in an integer variable. equal to `-2147483648`.

### - <code class="language-dosato">maxshort: long</code>

Maximum value of a short integer. This is the maximum value that can be stored in a short integer variable. equal to `32767`.

### - <code class="language-dosato">minshort: long</code>

Minimum value of a short integer. This is the minimum value that can be stored in a short integer variable. equal to `-32768`.

### - <code class="language-dosato">maxbyte: long</code>

Maximum value of a byte integer. This is the maximum value that can be stored in a byte integer variable. equal to `127`.

### - <code class="language-dosato">minbyte: long</code>

Minimum value of a byte integer. This is the minimum value that can be stored in a byte integer variable. equal to `-128`.

## {$subchapter} Functions

### - <code class="language-dosato">void end(int error_code = 0)</code>

Stops the program and exits with the given error code. If no error code is given, it will exit with 0.

### - <code class="language-dosato">void throw(int error_code || string error_message)</code>

Throws an error with the given error code or message. If an error code is given, it will be used as the error code and the message shown will match that of the error code. If a message is given, it will be used as the error message and the error code will be set to 1. The program will stop and exit with the given error code.

This error can also be caught with the `catch` expression.