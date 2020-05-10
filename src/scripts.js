function enableEditMode() {
  richTextField.document.designMode = 'On';
}

function execCmd(cmd) {
  richTextField.document.execCommand(cmd, false, null);
}

function execCmdWithArgs(cmd, arg) {
  richTextField.document.execCommand(cmd, false, arg);
}