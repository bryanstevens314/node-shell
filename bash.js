process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');
  const command = require(`./${cmd[0]}`);
  if (cmd.length > 2) {
    for (let i = 1; i < cmd.length; i++) {
      command(cmd[i]);
    }
    process.stdout.write('\nprompt > ');
  } else if (cmd.length > 1) {
    command(cmd[1]);
    process.stdout.write('\nprompt > ');
  } else {
    process.stdout.write('\nprompt > ');
  }

});
