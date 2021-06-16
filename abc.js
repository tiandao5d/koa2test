const chalk = require('chalk');
const { spawn } = require('child_process');
const process = require('process')
// const ls = spawn('git', ['log', '--grep', '十方']);

// ls.stdin.on('data', (data) => {
//   console.log(`stdin: \n ${data}`);
// });

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: \n ${data}`.replace(/commit[^\n]+/, (s) => chalk.blue(s)));
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: \n ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`子进程退出，退出码 ${code}`);
// });
process.on('exit', (code) => {
  console.log(`即将退出，退出码: ${code}`);
});