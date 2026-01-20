// Merge script for ordinances data
const fs = require('fs');
const path = require('path');

// Read existing file for appropriation data
const existingPath = path.join(__dirname, '../src/data/ordinances.json');
const existing = JSON.parse(fs.readFileSync(existingPath, 'utf8'));

// Read new data with revenue and regulatory
const newDataPath = path.join(__dirname, 'new_ordinance.json');
const newData = JSON.parse(fs.readFileSync(newDataPath, 'utf8'));

// Clean up titles (remove unicode issues)
const cleanTitle = (title) => {
    return title
        .replace(/â€œ/g, '"')
        .replace(/â€/g, '"')
        .replace(/â€˜/g, "'")
        .replace(/â€™/g, "'")
        .replace(/Ã'/g, 'Ñ')
        .replace(/Â©/g, '')
        .replace(/Â¢/g, '')
        .replace(/\n/g, ' ')
        .trim();
};

// Process arrays - filter out empty entries
const revenue = newData.revenue
    .filter(o => o.number && o.number.trim())
    .map(o => ({
        number: o.number,
        title: cleanTitle(o.title),
        year: o.year || 'Prior'
    }));

const regulatory = newData.regulatory
    .filter(o => o.number && o.number.trim())
    .map(o => ({
        number: o.number,
        title: cleanTitle(o.title),
        year: o.year || 'Prior'
    }));

// Create merged data
const merged = {
    __metadata: {
        source: 'Official Zamboanga City Government Website (zamboangacity.gov.ph)',
        extractedDate: '2026-01-21',
        totalCount: existing.appropriation.length + revenue.length + regulatory.length,
        categories: {
            revenue: revenue.length,
            appropriation: existing.appropriation.length,
            regulatory: regulatory.length
        },
        yearRange: '1974-2025'
    },
    appropriation: existing.appropriation,
    revenue: revenue,
    regulatory: regulatory
};

// Save merged data
fs.writeFileSync(existingPath, JSON.stringify(merged, null, 2));

console.log('\n✅ SUCCESS! Merged data saved to ordinances.json');
console.log('   Appropriation:', merged.appropriation.length);
console.log('   Revenue:', merged.revenue.length);
console.log('   Regulatory:', merged.regulatory.length);
console.log('   Total:', merged.__metadata.totalCount);
