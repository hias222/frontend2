const fs = require('fs');
const path = require('path');

const metaPath = path.join(__dirname, '../public/meta.json');
const now = new Date();
const version = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}-${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}`;
const build = now.toISOString();

const meta = {
  version,
  build,
  description: "Frontend build for auto-reload on new version"
};

fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2));
console.log(`meta.json updated: ${version}`);