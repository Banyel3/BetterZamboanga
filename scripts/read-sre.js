// Extract complete Zamboanga City SRE data
const XLSX = require('xlsx');

const workbook = XLSX.readFile('SRE-QTR-2025.xlsx');

console.log('='.repeat(80));
console.log('ZAMBOANGA CITY STATEMENT OF RECEIPTS & EXPENDITURES - VERIFICATION');
console.log('='.repeat(80));
console.log('');

// Process Q1 and Q2 sheets
['Q12025', 'Q22025'].forEach(sheetName => {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`${sheetName} DATA`);
    console.log('='.repeat(60));

    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });

    // Find header row (contains column names)
    let headerRow = null;
    let headerIdx = -1;

    for (let i = 0; i < 30; i++) {
        const row = data[i];
        if (row && row.some(c => String(c).includes('LGU NAME') || String(c).includes('LGU TYPE'))) {
            headerRow = row;
            headerIdx = i;
            break;
        }
    }

    if (headerRow) {
        console.log('\nColumn Headers Found:');
        headerRow.forEach((h, i) => {
            if (h && String(h).trim()) {
                console.log(`  Col ${i}: ${String(h).substring(0, 50)}`);
            }
        });
    }

    // Find Zamboanga City row
    const zamboRow = data.find(row => {
        const rowText = row.map(c => String(c)).join(' ');
        return rowText.includes('Zamboanga City');
    });

    if (zamboRow) {
        console.log('\nZamboanga City Data:');
        zamboRow.forEach((val, i) => {
            if (val !== '' && val !== undefined) {
                const header = headerRow ? headerRow[i] || `Col ${i}` : `Col ${i}`;
                const value = typeof val === 'number' ? val.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' }) : String(val);
                console.log(`  ${String(header).substring(0, 40).padEnd(45)}: ${value}`);
            }
        });
    } else {
        console.log('Zamboanga City not found in this sheet');
    }
});
