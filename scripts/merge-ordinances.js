/**
 * Script to save extracted ordinance data from browser localStorage
 * Run this in a Node.js environment after copying data from browser
 * 
 * Usage:
 * 1. Run this script with node
 * 2. Paste the clipboard content when prompted
 * 3. The data will be merged with existing appropriation ordinances
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const ORDINANCES_PATH = path.join(__dirname, '../src/data/ordinances.json');

async function main() {
    // Read existing data
    const existing = JSON.parse(fs.readFileSync(ORDINANCES_PATH, 'utf8'));
    console.log('Existing appropriation ordinances:', existing.appropriation.length);

    // Read stdin for pasted JSON data
    console.log('\nPaste the JSON data from browser clipboard (press Ctrl+D when done):');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let input = '';

    rl.on('line', (line) => {
        input += line;
    });

    rl.on('close', () => {
        try {
            const extracted = JSON.parse(input);

            // Merge data
            const merged = {
                __metadata: {
                    source: 'Official Zamboanga City Government Website (zamboangacity.gov.ph)',
                    extractedDate: new Date().toISOString().split('T')[0],
                    totalCount: existing.appropriation.length + extracted.revenue.length + extracted.regulatory.length,
                    categories: {
                        revenue: extracted.revenue.length,
                        appropriation: existing.appropriation.length,
                        regulatory: extracted.regulatory.length
                    },
                    yearRange: '1974-2025'
                },
                appropriation: existing.appropriation,
                revenue: extracted.revenue.map(o => ({
                    number: o.n || o.number,
                    title: o.t || o.title,
                    year: o.y || o.year || 'Prior'
                })),
                regulatory: extracted.regulatory.map(o => ({
                    number: o.n || o.number,
                    title: o.t || o.title,
                    year: o.y || o.year || 'Prior'
                }))
            };

            // Write merged data
            fs.writeFileSync(ORDINANCES_PATH, JSON.stringify(merged, null, 2));
            console.log(`\nSuccessfully merged and saved!`);
            console.log(`- Appropriation: ${merged.appropriation.length}`);
            console.log(`- Revenue: ${merged.revenue.length}`);
            console.log(`- Regulatory: ${merged.regulatory.length}`);
            console.log(`- Total: ${merged.__metadata.totalCount}`);
        } catch (e) {
            console.error('Error parsing input:', e.message);
        }
    });
}

main();
