#!/usr/bin/env node
const { exec } = require("child_process");

console.log("\nWelcome to the Full Template!");
console.log("\nPlease remember to update your .env.{environment} files.");

const handleExecResult = (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }

  console.log(`${stdout}`);
};

exec("git init", handleExecResult);
exec("touch .env.template .env.staging", handleExecResult);
exec("touch .env.template .env.production", handleExecResult);
