module.exports = function () {
  let commands = {
    pwd: process.cwd
  };
  process.stdout.write('prompt > ');
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (commands[cmd]) {
      process.stdout.write(commands[cmd]());
      process.stdout.write('\nprompt > ');
    }

  });
};
