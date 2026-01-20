// Final fix script - cleans remaining encoding artifacts
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/ordinances.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Comprehensive title cleanup function
const cleanTitle = (title) => {
    if (!title) return '';

    let cleaned = title
        // Remove control characters (0-31, 127-159)
        .replace(/[\x00-\x1F\x7F-\x9F]/g, '')
        // Fix Spanish Ñ characters
        .replace(/Ã'/g, 'Ñ')
        .replace(/Ã±/g, 'ñ')
        .replace(/ZAMBOANGUEÃ'O/gi, 'ZAMBOANGUEÑO')
        .replace(/NUÃ'O/gi, 'NUÑO')
        // Fix smart quotes and apostrophes
        .replace(/"/g, '"')
        .replace(/"/g, '"')
        .replace(/'/g, "'")
        .replace(/'/g, "'")
        .replace(/â€œ/g, '"')
        .replace(/â€/g, '"')
        .replace(/â€˜/g, "'")
        .replace(/â€™/g, "'")
        // Fix tilde and other artifacts
        .replace(/˜/g, "'")
        .replace(/Â/g, '')
        .replace(/©/g, '')
        .replace(/¢/g, '')
        // Fix dashes
        .replace(/â€"/g, '-')
        .replace(/â€"/g, '—')
        .replace(/–/g, '-')
        // Clean whitespace
        .replace(/\s+/g, ' ')
        .trim();

    return cleaned;
};

// Count fixes
let fixedCount = 0;

['appropriation', 'revenue', 'regulatory'].forEach(category => {
    if (!data[category]) return;

    data[category].forEach(ord => {
        const originalTitle = ord.title;
        ord.title = cleanTitle(ord.title);

        if (originalTitle !== ord.title) {
            fixedCount++;
            console.log(`Fixed: ${ord.number}`);
        }
    });
});

// Save fixed data
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

console.log('\n========================================');
console.log('Fixed', fixedCount, 'ordinances.');
console.log('Total ordinances:', data.__metadata.totalCount);
