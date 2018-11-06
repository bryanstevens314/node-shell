process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');
  const command = require(`./${cmd[0]}`);
  if (cmd.length > 2) {
    for (let i = 1; i < cmd.length; i++) {
      command(cmd[i]);
    }
  } else {
    command(cmd[1]);
  }
  process.stdout.write('\nprompt > ');
});
