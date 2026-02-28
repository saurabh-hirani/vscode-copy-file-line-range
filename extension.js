const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.copyFileLineRange', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        
        const selection = editor.selection;
        const startLine = selection.start.line + 1;
        const endLine = selection.end.line + 1;
        const filePath = editor.document.uri.fsPath;
        
        const text = `${filePath}:L${startLine}-L${endLine}`;
        
        vscode.env.clipboard.writeText(text);
    });
    
    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
