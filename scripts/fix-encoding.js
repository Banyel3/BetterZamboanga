// Final fix for Ã followed by LEFT SINGLE QUOTATION MARK (U+2018)
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/ordinances.json');
let content = fs.readFileSync(filePath, 'utf8');

// The pattern is Ã (U+00C3) followed by LEFT SINGLE QUOTATION MARK (U+2018)
// This should be Ñ (U+00D1)
content = content.replace(/\u00C3\u2018/g, 'Ñ');

// Also lowercase version
content = content.replace(/\u00E3\u2018/g, 'ñ');

// Save
fs.writeFileSync(filePath, content, 'utf8');

// Verify
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
const all = [...data.appropriation, ...data.revenue, ...data.regulatory];
const remaining = all.filter(o => o.title && o.title.includes('Ã'));

console.log('Total ordinances:', data.__metadata.totalCount);
if (remaining.length > 0) {
    console.log('Remaining issues:', remaining.length);
    remaining.forEach(o => console.log('  ' + o.number));
} else {
    console.log('All encoding issues fixed!');
}
