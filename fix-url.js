const fs = require('fs');
const path = require('path');
function updateUrls(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updateUrls(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('https://seven-donuts-tease.loca.lt')) {
        content = content.replace(/https:\/\/seven-donuts-tease\.loca\.lt/g, 'http://localhost:5000');
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}
updateUrls(path.join(__dirname, 'src'));
console.log('URLs updated!');
