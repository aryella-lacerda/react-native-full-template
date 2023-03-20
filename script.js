#!/usr/bin/env node
const { exec } = require("child_process");

console.log("Welcome to the Full Template!");

exec("git init", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
