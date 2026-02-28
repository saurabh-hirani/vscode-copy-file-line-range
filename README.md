# VSCode Copy File Line Range

A simple VSCode extension that copies the current file path with selected line range to clipboard in the format: `/path/to/file:L10-L25`

## Features

- Select lines in any file
- Press your configured keybinding
- File path with line range is copied to clipboard
- Use with terminal commands or AI assistants

## Installation

### From Source

1. Clone this repository:
```bash
git clone https://github.com/saurabh-hirani/vscode-copy-file-line-range.git
```

2. Copy to VSCode extensions directory:
```bash
cp -r vscode-copy-file-line-range ~/.vscode/extensions/
```

3. Restart VSCode or run "Developer: Reload Window"

## Usage

### Basic Usage

Add this keybinding to your `keybindings.json`:

```json
{
    "key": "ctrl+shift+c",
    "command": "extension.copyFileLineRange"
}
```

Select lines and press the keybinding. The clipboard will contain: `/path/to/file:L10-L25`

### Advanced Usage - Send to Terminal

Combine with terminal commands:

```json
{
    "key": "ctrl+i e",
    "command": "runCommands",
    "args": {
        "commands": [
            "extension.copyFileLineRange",
            {
                "command": "workbench.action.terminal.sendSequence",
                "args": {
                    "text": "explain "
                }
            },
            "workbench.action.terminal.paste"
        ]
    }
}
```

This sends `explain /path/to/file:L10-L25` to your terminal.

## Configuration

The extension uses the command `extension.copyFileLineRange`. You can bind it to any key combination in your `keybindings.json`.

## License

MIT
