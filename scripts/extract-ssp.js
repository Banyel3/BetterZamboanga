// =============================================================
// Sumbong sa Pangulo (SSP) Data Extraction Script
// =============================================================
// Run this in the browser console on the SSP portal after loading all data
// Make sure all rows are visible on the page before running

(() => {
    const allProjects = [];

    // Select all table rows (skip header)
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach((row, index) => {
        const cells = row.querySelectorAll('td');
        if (cells.length < 5) return;

        // Column mapping based on screenshot:
        // 0: Project Description
        // 1: Location
        // 2: Contractor
        // 3: Cost
        // 4: Completion Date
        // 5: Report button (ignore)

        const description = cells[0]?.innerText?.trim() || '';
        const location = cells[1]?.innerText?.trim() || '';
        const contractor = cells[2]?.innerText?.trim() || '';

        // Parse cost - remove commas and convert to number
        const costText = cells[3]?.innerText?.trim() || '0';
        const cost = parseFloat(costText.replace(/[₱,\s]/g, '')) || 0;

        // Completion date
        const completionDate = cells[4]?.innerText?.trim() || '';

        if (description) {
            allProjects.push({
                id: `SSP-${String(index + 1).padStart(4, '0')}`,
                name: description,
                location: location,
                contractor: contractor,
                cost: cost,
                completionDate: completionDate,
                source: 'Sumbong sa Pangulo'
            });
        }
    });

    console.log(`✅ Extracted ${allProjects.length} SSP projects`);

    // Store in localStorage
    const output = JSON.stringify(allProjects, null, 4);
    localStorage.setItem('ssp_projects', output);

    // Try to copy to clipboard
    try {
        navigator.clipboard.writeText(output);
        console.log('✅ JSON copied to clipboard!');
    } catch (e) {
        console.log('⚠️ Could not copy to clipboard. Run: copy(localStorage.getItem("ssp_projects"))');
    }

    // Display in console
    console.log('\n📋 Extracted Data:');
    console.log(output);

    return allProjects;
})();
