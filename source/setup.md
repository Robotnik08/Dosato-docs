# {$chapter} {$title}

Note: dosato currently only supports 64-bit systems.

## {$subchapter} Installation

### Windows

1. Download the latest release (installer) from the [releases page](https://github.com/Robotnik08/cdosato/releases/latest).
2. Run the installer and follow the instructions.
3. If you've done it correctly, the path variable should be set automatically.

### Linux

Unfortunately, there is no installer for Linux yet. You can still install dosato manually by following these steps:

1. Download the latest release from the [releases page](https://github.com/Robotnik08/cdosato/releases/latest).
2. Extract the files to a folder of your choice.
3. Add the folder to your path variable.

### MacOS

Unfortunately, I haven't compiled any binaries for MacOS yet. It has been verified that dosato works on MacOS, but you'll have to compile it yourself following the instructions in the [README](https://github.com/Robotnik08/cdosato/blob/main/README.md).

## {$subchapter} Validation

To check if dosato is installed correctly, you can run the following command:

```bash
dosato --version
```

You should see the version of dosato you've installed, alongside the date it was compiled.<br>

You should see something like this:

```raw
Dosato version 0.6.9, compiled on 01/02/2025
Type 'dosato -h' for help
```

If you see this, dosato is installed correctly.