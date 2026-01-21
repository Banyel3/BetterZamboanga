/**
 * Merge DPWH Contracts Script
 * ===========================
 * 
 * This script merges newly extracted DPWH contracts with existing data.
 * 
 * Usage:
 * 1. Save extracted contracts to: scripts/dpwh_new_contracts.json
 * 2. Run: node scripts/merge-dpwh.js
 */

const fs = require('fs');
const path = require('path');

const NEW_CONTRACTS_FILE = path.join(__dirname, 'dpwh_new_contracts.json');
const EXISTING_FILE = path.join(__dirname, '../src/data/dpwh-projects.json');
const OUTPUT_FILE = EXISTING_FILE;

console.log('='.repeat(60));
console.log('DPWH Contract Merge Script');
console.log('='.repeat(60));

// Check if new contracts file exists
if (!fs.existsSync(NEW_CONTRACTS_FILE)) {
    console.error(`\n❌ Error: ${NEW_CONTRACTS_FILE} not found!`);
    console.log('\nPlease:');
    console.log('1. Go to https://transparency.dpwh.gov.ph/');
    console.log('2. Search for "Zamboanga City"');
    console.log('3. Run the extraction script from scripts/extract-dpwh.js');
    console.log('4. Save the JSON output to scripts/dpwh_new_contracts.json');
    process.exit(1);
}

// Read new contracts
let newContracts;
try {
    const rawData = fs.readFileSync(NEW_CONTRACTS_FILE, 'utf8');
    newContracts = JSON.parse(rawData);
    console.log(`\n✅ Loaded ${newContracts.length} new contracts from extraction`);
} catch (e) {
    console.error('\n❌ Error parsing new contracts JSON:', e.message);
    process.exit(1);
}

// Read existing file
let existingData;
try {
    existingData = JSON.parse(fs.readFileSync(EXISTING_FILE, 'utf8'));
    console.log(`✅ Loaded existing data with ${existingData.projects.length} projects`);
} catch (e) {
    console.log('⚠️ No existing file found, creating new');
    existingData = {
        summary: {},
        projects: []
    };
}

// Keep Sumbong sa Pangulo projects (source: SSP or Sumbong sa Pangulo)
const sspProjects = existingData.projects.filter(p =>
    p.source === 'Sumbong sa Pangulo' || p.id?.startsWith('SSP')
);
console.log(`✅ Preserved ${sspProjects.length} Sumbong sa Pangulo projects`);

// Combine: New DPWH contracts + existing SSP projects
const allProjects = [...newContracts, ...sspProjects];

// Remove duplicates by ID
const uniqueProjects = [];
const seenIds = new Set();
for (const project of allProjects) {
    if (!seenIds.has(project.id)) {
        seenIds.add(project.id);
        uniqueProjects.push(project);
    }
}
console.log(`✅ After deduplication: ${uniqueProjects.length} unique projects`);

// Calculate totals
const totalCost = uniqueProjects.reduce((sum, p) => sum + (p.cost || 0), 0);
const completed = uniqueProjects.filter(p => p.status >= 100).length;
const ongoing = uniqueProjects.filter(p => p.status < 100).length;

// Create updated data structure
const updatedData = {
    "__data_source": "Combined data from DPWH Infrastructure Projects Portal (https://transparency.dpwh.gov.ph/) and Sumbong sa Pangulo Presidential Transparency Portal (https://sumbongsapangulo.ph/)",
    "__last_updated": new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    "__note": `Full dataset extracted from DPWH Portal. Contains ${uniqueProjects.length} verified infrastructure projects for Zamboanga City.`,
    "summary": {
        "totalProjects": uniqueProjects.length,
        "totalCost": totalCost,
        "completedProjects": completed,
        "ongoingProjects": ongoing,
        "implementingAgency": "Zamboanga City 2nd District Engineering Office / Region IX",
        "dpwhPortalTotal": newContracts.length,
        "dpwhPortalNote": `Extracted ${newContracts.length} contracts from DPWH Transparency Portal`,
        "dataSources": {
            "dpwh": {
                "projects": newContracts.length,
                "totalAvailable": newContracts.length,
                "cost": newContracts.reduce((sum, p) => sum + (p.cost || 0), 0),
                "description": "Full infrastructure projects from DPWH portal"
            },
            "sumbongSaPangulo": {
                "projects": sspProjects.length,
                "cost": sspProjects.reduce((sum, p) => sum + (p.cost || 0), 0),
                "description": "Completed flood control, drainage, and shoreline protection projects (2022-2024)"
            }
        }
    },
    "projects": uniqueProjects
};

// Write output
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(updatedData, null, 2));
console.log(`\n✅ Saved to ${OUTPUT_FILE}`);

// Summary
console.log('\n' + '='.repeat(60));
console.log('MERGE COMPLETE');
console.log('='.repeat(60));
console.log(`Total Projects: ${uniqueProjects.length}`);
console.log(`Total Investment: ₱${(totalCost / 1e9).toFixed(2)}B`);
console.log(`Completed: ${completed}`);
console.log(`Ongoing: ${ongoing}`);
console.log(`\nDPWH Projects: ${newContracts.length}`);
console.log(`SSP Projects: ${sspProjects.length}`);
console.log('='.repeat(60));
