const fs = require('fs');
const JSON5 = require('json5');
const configFile = './config/renovate.json5';

try {
    fs.writeFileSync(
      configFile.replace(/\.json5$/, '.json'),
      JSON.stringify(
        JSON5.parse( fs.readFileSync(configFile) ),
        null,
        ' '
      )
    );
    
    console.log('Finished converting JSON5 file to JSON.')
} catch (error) {
    console.log('There was an error converting JSON5 to JSON. ', error);
}