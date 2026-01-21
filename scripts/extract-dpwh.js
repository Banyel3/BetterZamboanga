/**
 * DPWH Contract Extraction Instructions
 * =====================================
 * 
 * This script provides instructions for extracting ALL contracts from the
 * DPWH Transparency Portal (https://transparency.dpwh.gov.ph/)
 * 
 * STEPS:
 * 1. Go to https://transparency.dpwh.gov.ph/
 * 2. Search for "Zamboanga City" in the search box
 * 3. Wait for results to load (should show ~1,648 contracts)
 * 4. Open Browser DevTools (F12) -> Console tab
 * 5. Paste the extraction script below and press Enter
 * 6. Wait for extraction to complete (will process all 33 pages)
 * 7. Copy the JSON output from the console
 * 8. Create a new file: scripts/dpwh_new_contracts.json
 * 9. Paste the JSON into that file
 * 10. Run: node scripts/merge-dpwh.js
 */

// ============================================================================
// EXTRACTION SCRIPT - COPY EVERYTHING BELOW INTO BROWSER CONSOLE
// ============================================================================

/*

async function extractAllDPWHContracts() {
    const allContracts = [];
    let currentPage = 1;
    let totalPages = 1;
    
    console.log('🔄 Starting DPWH contract extraction...');
    
    // Get total pages from pagination
    const updateTotalPages = () => {
        const pageButtons = document.querySelectorAll('.v-pagination__item button');
        if (pageButtons.length > 0) {
            const lastBtn = Array.from(pageButtons).pop();
            const pageNum = parseInt(lastBtn?.innerText || lastBtn?.getAttribute('aria-label')?.match(/\d+/)?.[0] || '1');
            if (pageNum > totalPages) totalPages = pageNum;
        }
    };
    
    // Extract contracts from current page
    const extractPage = () => {
        const rows = Array.from(document.querySelectorAll('tbody tr'));
        return rows.map(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length < 6) return null;
            
            const firstCell = cells[0];
            const descDivs = firstCell.querySelectorAll('div > div');
            const contractDesc = descDivs[0]?.innerText || '';
            const category = descDivs[1]?.innerText?.trim() || '';
            
            // Parse contract ID and name
            const idMatch = contractDesc.match(/^([A-Z0-9]+)\s*-\s*(.*)$/s);
            const contractId = idMatch ? idMatch[1].trim() : '';
            const projectName = idMatch ? idMatch[2].trim() : contractDesc.trim();
            
            // Extract location from project name
            const locMatch = projectName.match(/,\s*([^,]+,?\s*Zamboanga\s*(?:City|Del\s*Sur)?)/i);
            const location = locMatch ? locMatch[1].trim() : 'Zamboanga City';
            
            // Parse cost
            const costText = cells[3]?.innerText || '0';
            const cost = parseFloat(costText.replace(/[^0-9.]/g, '')) || 0;
            
            // Parse accomplishment %
            const accText = cells[4]?.querySelector('span')?.innerText || cells[4]?.innerText || '0';
            const accomplishment = parseFloat(accText.replace(/[^0-9.]/g, '')) || 0;
            
            // Parse completion date
            const dateText = cells[5]?.innerText?.trim() || '';
            let completionDate = '';
            if (dateText && dateText !== '-') {
                const parts = dateText.split('/');
                if (parts.length === 3) {
                    completionDate = `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;
                }
            }
            
            return {
                id: contractId,
                name: projectName.split(',')[0].trim(),
                location: location,
                category: category,
                contractor: cells[2]?.innerText?.trim() || '',
                cost: cost,
                status: accomplishment,
                completionDate: completionDate,
                source: 'DPWH'
            };
        }).filter(Boolean);
    };
    
    // Click page button
    const goToPage = async (page) => {
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise(r => setTimeout(r, 500));
        
        const buttons = Array.from(document.querySelectorAll('.v-pagination__item button'));
        const targetBtn = buttons.find(b => b.innerText === String(page));
        if (targetBtn) {
            targetBtn.click();
            await new Promise(r => setTimeout(r, 2000)); // Wait for data to load
            return true;
        }
        return false;
    };
    
    // Initial extraction
    updateTotalPages();
    console.log(`📊 Found ${totalPages} pages to extract`);
    
    // Extract all pages
    for (let page = 1; page <= totalPages; page++) {
        if (page > 1) {
            const success = await goToPage(page);
            if (!success) {
                console.log(`⚠️ Could not navigate to page ${page}, stopping`);
                break;
            }
        }
        
        const pageContracts = extractPage();
        allContracts.push(...pageContracts);
        console.log(`✅ Page ${page}/${totalPages}: Extracted ${pageContracts.length} contracts (Total: ${allContracts.length})`);
    }
    
    console.log(`\n✅ EXTRACTION COMPLETE!`);
    console.log(`📦 Total contracts extracted: ${allContracts.length}`);
    console.log(`\n📋 Copy the JSON below:\n`);
    
    const output = JSON.stringify(allContracts, null, 2);
    console.log(output);
    
    // Also copy to clipboard
    try {
        await navigator.clipboard.writeText(output);
        console.log('\n✅ JSON copied to clipboard!');
    } catch (e) {
        console.log('\n⚠️ Could not copy to clipboard. Please manually copy the JSON above.');
    }
    
    return allContracts;
}

// Run the extraction
extractAllDPWHContracts();

*/

console.log(`
================================================================================
DPWH CONTRACT EXTRACTION INSTRUCTIONS
================================================================================

1. Go to: https://transparency.dpwh.gov.ph/
2. Search for "Zamboanga City"
3. Open DevTools (F12) -> Console
4. Copy and run the BIG script above (between /* and */)
5. Wait for extraction to complete (may take 5-10 minutes)
6. Copy the JSON output
7. Save to: scripts/dpwh_new_contracts.json
8. Run: node scripts/merge-dpwh.js

================================================================================
`);
