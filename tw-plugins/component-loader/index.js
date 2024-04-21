const plugin = require('tailwindcss/plugin');
const path = require('path')
const fs = require('fs');

module.exports = plugin(function({ addComponents }) {
  let opendirSync = fs.opendirSync(path.join(__dirname , 'components'));  
  let dirent;
  try {
    while(dirent = opendirSync.readSync()) {
      const filePath = path.join(dirent.path , dirent.name);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      console.log('File Content:', fileContent); // Log file content
      addComponents(JSON.parse(fileContent));
    }
  } catch(err) {
    console.warn(err.message);
  } finally {
    opendirSync.close();
  }
});
