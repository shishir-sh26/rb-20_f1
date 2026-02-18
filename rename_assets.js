const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'sequence');

if (!fs.existsSync(dir)) {
    console.error("Directory not found:", dir);
    process.exit(1);
}

const files = fs.readdirSync(dir).filter(f => f.startsWith('ezgif-frame-') && f.endsWith('.jpg'));

console.log(`Found ${files.length} files to rename.`);

files.sort(); // Ensure 001, 002 order

files.forEach((file, index) => {
    const oldPath = path.join(dir, file);
    const newPath = path.join(dir, `frame_${index}.jpg`);
    fs.renameSync(oldPath, newPath);
});

console.log("Renaming complete.");
