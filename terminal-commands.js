const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.appendFile('greetings', 'Hello again world!', function(err) {
    if (err) {
      return console.error(err);
    }
    console.log('file created!');
  });
};

module.exports.mkdir = () => {
  fs.mkdir('/BLOC/bloc/terminal-commands/test',function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
 });
};
