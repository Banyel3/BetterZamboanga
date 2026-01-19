/* Better Zamboanga - Resolution Table JavaScript (forked from BetterSolano.org) */

/**
 * Fetches resolution data from the JSON file
 * @returns {Promise<Array>} Array of resolution objects
 */
async function fetchResolutions() {
  try {
    const response = await fetch("../data/resolutions.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.resolutions || [];
  } catch (error) {
    console.error("Error fetching resolutions:", error);
    return [];
  }
}

/**
 * Sorts resolutions by year and resolution number in descending order (newest first)
 * @param {Array} resolutions - Array of resolution objects
 * @returns {Array} Sorted array of resolutions
 */
function sortResolutionsByNumber(resolutions) {
  return [...resolutions].sort((a, b) => {
    // First sort by year
    const yearA = parseInt(a.year, 10) || 0;
    const yearB = parseInt(b.year, 10) || 0;
    if (yearB !== yearA) {
      return yearB - yearA;
    }
    
    // Then by resolution number (extract numeric part)
    const numA = parseInt(a.resolutionNo.replace(/\D/g, ''), 10) || 0;
    const numB = parseInt(b.resolutionNo.replace(/\D/g, ''), 10) || 0;
    return numB - numA;
  });
}

/**
 * Formats resolution number for display
 * @param {string} resolutionNo - Resolution number (e.g., "2025-001")
 * @returns {string} Resolution number as-is
 */
function formatResolutionNo(resolutionNo) {
  return resolutionNo;
}

/**
 * Formats date for display
 * @param {string} dateString - Date string (e.g., "Dec 20, 2025" or "2025-01-06")
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
 * Renders the resolution table to the DOM
 * @param {Array} resolutions - Array of resolution objects
 */
function renderResolutionTable(resolutions) {
  const tableBody = document.getElementById("resolution-table-body");

  if (!tableBody) {
    console.error("Resolution table body element not found");
    return;
  }

  // Clear existing content
  tableBody.innerHTML = "";

  // Handle empty data
  if (!resolutions || resolutions.length === 0) {
    const emptyRow = document.createElement("tr");
    emptyRow.innerHTML = `
            <td colspan="3" class="text-center text-muted">
                No resolutions found for 2025
            </td>
        `;
    tableBody.appendChild(emptyRow);
    return;
  }

  // Render each resolution
  resolutions.forEach((resolution) => {
    // Skip invalid records
    if (
      !resolution.resolutionNo ||
      !resolution.title
    ) {
      console.warn("Skipping invalid resolution record:", resolution);
      return;
    }

    const row = document.createElement("tr");
    const dateToDisplay = resolution.adopted || resolution.sessionDate || 'N/A';
    
    row.innerHTML = `
            <td data-label="Resolution No.">${formatResolutionNo(
              resolution.resolutionNo
            )}</td>
            <td data-label="Title">${resolution.title}</td>
            <td data-label="Adopted">${formatSessionDate(dateToDisplay)}</td>
        `;
    tableBody.appendChild(row);
  });
}

/**
 * Main initialization function for the resolution table
 */
async function initResolutionTable() {
  try {
    const resolutions = await fetchResolutions();
    const sortedResolutions = sortResolutionsByNumber(resolutions);
    renderResolutionTable(sortedResolutions);
  } catch (error) {
    console.error("Error initializing resolution table:", error);
    const tableBody = document.getElementById("resolution-table-body");
    if (tableBody) {
      tableBody.innerHTML = `
                <tr>
                    <td colspan="3" class="text-center text-muted">
                        Unable to load resolutions. Please try again later.
                    </td>
                </tr>
            `;
    }
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", initResolutionTable);

// Export functions for testing (if module system is available)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    fetchResolutions,
    sortResolutionsByNumber,
    formatResolutionNo,
    formatSessionDate,
    renderResolutionTable,
    initResolutionTable,
  };
}
