process.stdout.write('prompt > ');

// pwd
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  
  const { cwd } = require('process');
  process.stdout.write(`Current directory: ${cwd()}`);
  process.stdout.write('\nprompt > ');
});