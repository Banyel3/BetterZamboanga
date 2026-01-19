/* Better Zamboanga - Ordinance Table JavaScript (forked from BetterSolano.org) */

/**
 * Fetches ordinance data from the JSON file
 * @returns {Promise<Array>} Array of ordinance objects
 */
async function fetchOrdinances() {
  try {
    const response = await fetch("../data/ordinances.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.ordinances || [];
  } catch (error) {
    console.error("Error fetching ordinances:", error);
    return [];
  }
}

/**
 * Sorts ordinances by year and ordinance number in descending order (newest first)
 * @param {Array} ordinances - Array of ordinance objects
 * @returns {Array} Sorted array of ordinances
 */
function sortOrdinancesByNumber(ordinances) {
  return [...ordinances].sort((a, b) => {
    // First sort by year
    const yearA = parseInt(a.year, 10) || 0;
    const yearB = parseInt(b.year, 10) || 0;
    if (yearB !== yearA) {
      return yearB - yearA;
    }
    
    // Then by ordinance number (extract numeric part)
    const numA = parseInt(a.ordinanceNo.replace(/\D/g, ''), 10) || 0;
    const numB = parseInt(b.ordinanceNo.replace(/\D/g, ''), 10) || 0;
    return numB - numA;
  });
}

/**
 * Formats ordinance number for display
 * @param {string} ordinanceNo - Ordinance number (e.g., "2025-001")
 * @returns {string} Ordinance number as-is
 */
function formatOrdinanceNo(ordinanceNo) {
  return ordinanceNo;
}

/**
 * Formats date for display
 * @param {string} dateString - Date string (e.g., "Dec 20, 2025" or "2025-01-15")
 * @returns {string} Formatted date
 */
function formatSessionDate(dateString) {
  if (!dateString) return 'N/A';
  
  // If already in a readable format (e.g., "Dec 20, 2025"), return as-is
  if (dateString.match(/[A-Za-z]/)) {
    return dateString;
  }
  
  // Otherwise, try to parse and format
  try {
    const date = new Date(dateString + "T00:00:00");
    if (isNaN(date.getTime())) {
      return dateString;
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    console.warn("Invalid date format:", dateString);
    return dateString;
  }
}

/**
 * Renders the ordinance table to the DOM
 * @param {Array} ordinances - Array of ordinance objects
 */
function renderOrdinanceTable(ordinances) {
  const tableBody = document.getElementById("ordinance-table-body");

  if (!tableBody) {
    console.error("Ordinance table body element not found");
    return;
  }

  // Clear existing content
  tableBody.innerHTML = "";

  // Handle empty data
  if (!ordinances || ordinances.length === 0) {
    const emptyRow = document.createElement("tr");
    emptyRow.innerHTML = `
            <td colspan="3" class="text-center text-muted">
                No ordinances found for 2025
            </td>
        `;
    tableBody.appendChild(emptyRow);
    return;
  }

  // Render each ordinance
  ordinances.forEach((ordinance) => {
    // Skip invalid records
    if (!ordinance.ordinanceNo || !ordinance.title) {
      console.warn("Skipping invalid ordinance record:", ordinance);
      return;
    }

    const row = document.createElement("tr");
    const dateToDisplay = ordinance.enacted || ordinance.approved || ordinance.sessionDate || 'N/A';
    
    row.innerHTML = `
            <td data-label="Ordinance No.">${formatOrdinanceNo(
              ordinance.ordinanceNo
            )}</td>
            <td data-label="Title">${ordinance.title}</td>
            <td data-label="Enacted">${formatSessionDate(dateToDisplay)}</td>
        `;
    tableBody.appendChild(row);
  });
}

/**
 * Main initialization function for the ordinance table
 */
async function initOrdinanceTable() {
  try {
    const ordinances = await fetchOrdinances();
    const sortedOrdinances = sortOrdinancesByNumber(ordinances);
    renderOrdinanceTable(sortedOrdinances);
    
    // Set up filter buttons
    setupFilterButtons(ordinances);
  } catch (error) {
    console.error("Error initializing ordinance table:", error);
    const tableBody = document.getElementById("ordinance-table-body");
    if (tableBody) {
      tableBody.innerHTML = `
                <tr>
                    <td colspan="3" class="text-center text-muted">
                        Unable to load ordinances. Please try again later.
                    </td>
                </tr>
            `;
    }
  }
}

/**
 * Sets up filter button event listeners
 * @param {Array} ordinances - Full array of ordinance objects
 */
function setupFilterButtons(ordinances) {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.style.background = 'transparent';
        btn.style.color = 'var(--color-text)';
      });
      button.classList.add('active');
      button.style.background = 'var(--color-primary)';
      button.style.color = 'white';
      
      // Filter ordinances
      const category = button.getAttribute('data-category');
      let filtered = ordinances;
      
      if (category !== 'all') {
        filtered = ordinances.filter(ord => ord.category === category);
      }
      
      const sorted = sortOrdinancesByNumber(filtered);
      renderOrdinanceTable(sorted);
    });
  });
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", initOrdinanceTable);

// Export functions for testing (if module system is available)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    fetchOrdinances,
    sortOrdinancesByNumber,
    formatOrdinanceNo,
    formatSessionDate,
    renderOrdinanceTable,
    initOrdinanceTable,
    setupFilterButtons,
  };
}
