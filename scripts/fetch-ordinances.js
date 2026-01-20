// Script to fetch all ordinances from Zamboanga City website
const https = require('https');
const fs = require('fs');

// The website uses DataTables which loads data via AJAX
// We'll need to scrape the actual pages

const PAGES = {
    revenue: { url: 'https://zamboangacity.gov.ph/revenue/', count: 270 },
    appropriation: { url: 'https://zamboangacity.gov.ph/appropriation/', count: 65 },
    regulatory: { url: 'https://zamboangacity.gov.ph/regulatory/', count: 916 }
};

console.log('This script would need a headless browser to properly scrape DataTables content.');
console.log('The data has been extracted via browser - we need to manually copy it from browser console.');
console.log('\nAlternatively, run these commands in the browser console on each page:');
console.log(`
// On each ordinances page, set to OVERALL tab and 100 entries per page, then run:
(async () => {
  const allData = [];
  const pages = Math.ceil(parseInt(document.querySelector('.dt-info').textContent.match(/of (\\d+)/)[1]) / 100);
  
  for (let p = 0; p < pages; p++) {
    const tables = Array.from(document.querySelectorAll('table.dataTable'));
    const visibleTable = tables.find(t => t.offsetWidth > 0 && t.offsetHeight > 0);
    const rows = Array.from(visibleTable.querySelectorAll('tbody tr'));
    
    rows.forEach(row => {
      const cols = row.querySelectorAll('td');
      if (cols.length >= 3) {
        allData.push({
          number: cols[0].innerText.trim(),
          title: cols[1].innerText.trim(),
          remarks: cols[2].innerText.trim()
        });
      }
    });
    
    const nextBtn = document.querySelector('button.dt-paging-button.next:not(.disabled)');
    if (nextBtn && p < pages - 1) {
      nextBtn.click();
      await new Promise(r => setTimeout(r, 500));
    }
  }
  
  console.log('Total entries:', allData.length);
  console.log(JSON.stringify(allData, null, 2));
  copy(JSON.stringify(allData, null, 2)); // Copies to clipboard
})();
`);
