const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userProfile = "";
rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  userProfile += `My name is ${answer}.\n`;

  rl.question('What\'s an activity you like doing? ', (answer) => {
    userProfile += `I enjoy ${answer}.\n`;

    rl.question('What do you listen to while doing that? ', (answer) => {
      userProfile += `I like listening to ${answer}.\n`;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        userProfile += `My favourite meal is ${answer}.\n`;

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          userProfile += `I love eating ${answer}.\n`;

          rl.question('Which sport is your absolute favourite? ', (answer) => {
            userProfile += `My favourite sport is ${answer}.\n`;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              userProfile += `I'm really great at ${answer}.`;

              console.log(userProfile);

              rl.close();
            });
          });
        });
      });
    });
  });
});

  




//console.log(`Thank : ${userProfile}`);
