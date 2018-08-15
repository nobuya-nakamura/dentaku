function calc(cmd) {
  if (cmd == "=") {
    document.form.text.value = eval(document.form.text.value);
  } else if (cmd == "C") {
    document.form.text.value = "";
  } else {
    document.form.text.value += cmd;
  }
}