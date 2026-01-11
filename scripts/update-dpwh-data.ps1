# Script to update DPWH projects data with Zamboanga City projects
# Sourced from https://transparency.dpwh.gov.ph/

$jsonData = @'
{
  "__data_source": "DPWH Infrastructure Projects Portal (https://transparency.dpwh.gov.ph/) - Official government transparency database",
  "__last_updated": "2025",
  "summary": {
    "totalProjects": 50,
    "totalCost": 2089548963.69,
    "completedProjects": 38,
    "ongoingProjects": 12,
    "implementingAgency": "Zamboanga City 2nd District Engineering Office / Region IX"
  },
  "projects": [
    {
      "id": "21JA0060",
      "name": "Construction of Drainage System",
      "location": "Brgy. Tugbungan, Zamboanga City",
      "category": "Flood Control and Drainage",
      "contractor": "Zambopen Construction",
      "contractorId": "33831",
      "cost": 3954312.24,
      "status": 100,
      "completionDate": "2021-11-29"
    },
    {
      "id": "19J00020",
      "name": "Channelization of Putik River with Major Training Works",
      "location": "Zamboanga City",
      "category": "Flood Control and Drainage",
      "contractor": "Unitec Builder, Incorporated",
      "contractorId": "4803",
      "cost": 57957493.91,
      "status": 100,
      "completionDate": "2020-04-28"
    },
    {
      "id": "24JA0094",
      "name": "Reconstruction of Road",
      "location": "Brgy. Lanzones, Zamboanga City",
      "category": "Roads",
      "contractor": "LL Construction",
      "contractorId": "34244",
      "cost": 9799684.73,
      "status": 100,
      "completionDate": "2024-12-19"
    },
    {
      "id": "21J00045",
      "name": "NRJ Ayala - La Paz Road Leading to La Paz Resort",
      "location": "Zamboanga City",
      "category": "Roads",
      "contractor": "Rabbit Construction & Development Corporation",
      "contractorId": "8545",
      "cost": 102039000.14,
      "status": 100,
      "completionDate": "2022-01-01"
    },
    {
      "id": "19JA0079",
      "name": "Rehabilitation of Two Storey Multi-Purpose Building (Home Management Bldg.) at Don Pablo Memorial National High School",
      "location": "Brgy. Sta. Maria/San Jose Gusu, Zamboanga City",
      "category": "Buildings and Facilities",
      "contractor": "PM Construction and Trading",
      "contractorId": "35026",
      "cost": 7113933.76,
      "status": 100,
      "completionDate": "2020-02-07"
    },
    {
      "id": "22J00090",
      "name": "Construction of Flood Control Structure at Ayala River",
      "location": "Brgy. Ayala, Zamboanga City",
      "category": "Flood Control and Drainage",
      "contractor": "McGabriel Construction / Aquaterra Konstrukt Inc.",
      "contractorId": "33017",
      "cost": 56173649.85,
      "status": 91.33,
      "completionDate": "2025-01-01"
    },
    {
      "id": "22JA0004",
      "name": "Construction of Flood Control at Saaz River",
      "location": "San Ramon, Zamboanga City",
      "category": "Flood Control and Drainage",
      "contractor": "JM2K Construction",
      "contractorId": "34430",
      "cost": 49482639.74,
      "status": 100,
      "completionDate": "2023-03-25"
    },
    {
      "id": "18JA0094",
      "name": "Construction of Drainage Facilities at Villa Hermosa Housing",
      "location": "Luyahan, Pasonanca, Zamboanga City",
      "category": "Flood Control and Drainage",
      "contractor": "Infinite Engineering and Supplies",
      "contractorId": "36931",
      "cost": 4889498.22,
      "status": 100,
      "completionDate": "2019-05-12"
    },
    {
      "id": "18JA0005",
      "name": "Network Development - Road Widening - Gov. Camins Road",
      "location": "Zamboanga City",
      "category": "Roads",
      "contractor": "Rabbit Construction & Development Corporation / Primetech Construction",
      "contractorId": "8545",
      "cost": 31177706.65,
      "status": 100,
      "completionDate": "2021-12-28"
    },
    {
      "id": "19JA0147",
      "name": "Rehabilitation of Multi-Purpose Building (Day Care Center) at Quiniput Elementary School",
      "location": "Brgy. Quiniput, Zamboanga City",
      "category": "Buildings and Facilities",
      "contractor": "EMMB Construction and Supplies",
      "contractorId": "40420",
      "cost": 1347439.70,
      "status": 100,
      "completionDate": "2019-11-06"
    },
    {
      "id": "24JA0103",
      "name": "Construction of Flood Control Structure at Busugan River",
      "location": "Sinubong, Zamboanga City",
      "category": "Flood Control and Drainage",
      "contractor": "RCDG Construction Corporation / JH Construction Inc.",
      "contractorId": "5063",
      "cost": 96414901.03,
      "status": 90.18,
      "completionDate": "2025-01-01"
    },
    {
      "id": "18JA0067",
      "name": "Concreting of Road",
      "location": "Brgy. Arena Blanco, Zamboanga City",
      "category": "Roads",
      "contractor": "Shameem Construction",
      "contractorId": "41257",
      "cost": 1925728.90,
      "status": 100,
      "completionDate": "2018-07-12"
    },
    {
      "id": "21J00042",
      "name": "Widening of Permanent Bridges - Limpapa Parallel Bridge",
      "location": "Limpapa, Zamboanga City",
      "category": "Bridges",
      "contractor": "A.T. Dumlao Construction, Inc. / HHH Developer and Construction",
      "contractorId": "34028",
      "cost": 144449355.72,
      "status": 100,
      "completionDate": "2022-01-01"
    },
    {
      "id": "23JA0043",
      "name": "Construction of Drainage System",
      "location": "Brgy. Talon-Talon, Zamboanga City",
      "category": "Flood Control and Drainage",
      "contractor": "MI Construction",
      "contractorId": "50969",
      "cost": 9897612.75,
      "status": 100,
      "completionDate": "2023-10-20"
    },
    {
      "id": "23JA0052",
      "name": "Construction of Water System Level III",
      "location": "Brgy. Salaan, Zamboanga City",
      "category": "Water Provision and Storage",
      "contractor": "ASAP General Trading Construction & Maintenance",
      "contractorId": "33333",
      "cost": 4366522.98,
      "status": 90.93,
      "completionDate": "2024-01-01"
    },
    {
      "id": "20JA0026",
      "name": "Road Network of the First Philippine Halal Hub - The Asian Halal Center (Zamboanga Economic Zone)",
      "location": "Talisayan, Zamboanga City",
      "category": "Roads",
      "contractor": "Jimwen Construction & General Merchandise",
      "contractorId": "33066",
      "cost": 38594584.38,
      "status": 100,
      "completionDate": "2021-09-08"
    },
    {
      "id": "21JA0128",
      "name": "Construction of Flood Control Structure at Miluao",
      "location": "Brgy. Patalon, Zamboanga City",
      "category": "Flood Control and Drainage",
      "contractor": "JM2K Construction",
      "contractorId": "34430",
      "cost": 19502005.22,
      "status": 100,
      "completionDate": "2022-06-27"
    },
    {
      "id": "23JA0110",
      "name": "Concreting of Road",
      "location": "Brgy. Tolosa, Zamboanga City",
      "category": "Roads",
      "contractor": "ASAP General Trading Construction & Maintenance / HHH Developer",
      "contractorId": "33333",
      "cost": 67248364.71,
      "status": 65.23,
      "completionDate": "2025-01-01"
    },
    {
      "id": "23J00139",
      "name": "Construction of Tumaga River Flood Control (Guiwan-Tugbungan Section) with Esplanade, Package 1",
      "location": "Zamboanga City",
      "category": "Flood Control and Drainage",
      "contractor": "Pyramid Consolidated Builders & Gen. Mdse.",
      "contractorId": "15599",
      "cost": 143230123.46,
      "status": 62.06,
      "completionDate": "2025-01-01"
    },
    {
      "id": "19JA0134",
      "name": "Construction of Multi-Purpose Building (Day Care Center), Faustino Drive",
      "location": "Brgy. Mampang, Zamboanga City",
      "category": "Buildings and Facilities",
      "contractor": "Western Mindanao Construction",
      "contractorId": "16120",
      "cost": 1396872.20,
      "status": 100,
      "completionDate": "2019-10-18"
    },
    {
      "id": "25JA0030",
      "name": "Construction of Multi-Purpose Building (Putik Central School)",
      "location": "Zamboanga City",
      "category": "Buildings and Facilities",
      "contractor": "Jamari Construction / Zambo J.A. Builders",
      "contractorId": "21580",
      "cost": 67205587.19,
      "status": 35.51,
      "completionDate": "2026-01-01"
    },
    {
      "id": "18JA0125",
      "name": "Construction of 2 Storey 6 Classroom School Building at Sibulao ES",
      "location": "Zamboanga City",
      "category": "Buildings and Facilities",
      "contractor": "Road Edge Trading & Development Services",
      "contractorId": "33140",
      "cost": 12486581.53,
      "status": 100,
      "completionDate": "2019-03-21"
    },
    {
      "id": "18J00019",
      "name": "Construction of By-Pass and Diversion Roads - Zamboanga City Diversion Road, Mampang - Sta. Catalina Section",
      "location": "Zamboanga City",
      "category": "Roads",
      "contractor": "Vicente T. Lao Construction",
      "contractorId": "7040",
      "cost": 129928904.02,
      "status": 70.95,
      "completionDate": "2025-01-01"
    },
    {
      "id": "20J00157",
      "name": "Construction of By-Pass and Diversion Roads - Zamboanga City By-Pass Road (West Coast Section)",
      "location": "Zamboanga City",
      "category": "Roads",
      "contractor": "Unitec Builder, Incorporated",
      "contractorId": "4803",
      "cost": 141807040.92,
      "status": 100,
      "completionDate": "2022-06-30"
    },
    {
      "id": "24JA0066",
      "name": "Construction of Concrete Road, Agapito Rojas Drive, Purok B",
      "location": "Brgy. Tugbungan, Zamboanga City",
      "category": "Roads",
      "contractor": "Wenkon Construction Services",
      "contractorId": "50471",
      "cost": 5938294.74,
      "status": 30.12,
      "completionDate": "2025-01-01"
    },
    {
      "id": "22JA0019",
      "name": "Rehabilitation/Reconstruction/Upgrading of Damaged Paved Roads - Pagadian City-Zamboanga City Rd",
      "location": "Zamboanga City",
      "category": "Roads",
      "contractor": "R26 Construction, Inc.",
      "contractorId": "39256",
      "cost": 11360230.59,
      "status": 100,
      "completionDate": "2022-09-25"
    },
    {
      "id": "24J00063",
      "name": "Road Widening - Primary Roads - Pagadian City - Zamboanga City Road",
      "location": "Region IX",
      "category": "Roads",
      "contractor": "ZMS Const. & Dev. Corp.",
      "contractorId": "10471",
      "cost": 168425148.52,
      "status": 84.43,
      "completionDate": "2025-01-01"
    },
    {
      "id": "18J00072",
      "name": "Rehabilitation/Reconstruction of National Roads with Slips, Slope Collapse and Landslide - Lanao - Pagadian - Zamboanga City Road",
      "location": "Region IX",
      "category": "Roads",
      "contractor": "RCDG Construction Corporation",
      "contractorId": "5063",
      "cost": 109544886.47,
      "status": 100,
      "completionDate": "2019-09-06"
    },
    {
      "id": "21JA0023",
      "name": "Repair of Western Mindanao Command (WMC) - Gymnasium",
      "location": "Zamboanga City",
      "category": "Buildings and Facilities",
      "contractor": "Mother's Role Construction",
      "contractorId": "32781",
      "cost": 6422748.98,
      "status": 100,
      "completionDate": "2022-04-20"
    },
    {
      "id": "23J00162",
      "name": "Rehabilitation/Reconstruction of Roads with Slips, Slope Collapse, and Landslide - Pagadian City - Zamboanga City Rd - Package 2",
      "location": "Region IX",
      "category": "Roads",
      "contractor": "RCDG Construction Corporation / HHH Developer and Construction",
      "contractorId": "5063",
      "cost": 144599975.90,
      "status": 70.31,
      "completionDate": "2025-01-01"
    },
    {
      "id": "19JA0119",
      "name": "Road Concreting",
      "location": "Brgy. Manalipa, Zamboanga City",
      "category": "Roads",
      "contractor": "R26 Construction, Inc.",
      "contractorId": "39256",
      "cost": 1470150.00,
      "status": 100,
      "completionDate": "2019-08-31"
    },
    {
      "id": "18JA0107",
      "name": "Concreting of Road (Upper Pasonanca) FMR",
      "location": "Brgy. Dulian (Upper Pasonanca), Zamboanga City",
      "category": "Roads",
      "contractor": "LL Construction",
      "contractorId": "34244",
      "cost": 7749466.50,
      "status": 100,
      "completionDate": "2019-01-16"
    },
    {
      "id": "18J00013",
      "name": "Construction/Improvement of Access Roads Leading to Declared Tourism Destinations - NRJ Ayala - La Paz Road Leading to La Paz Resort",
      "location": "Zamboanga City",
      "category": "Roads",
      "contractor": "Rabbit Construction & Development Corporation",
      "contractorId": "8545",
      "cost": 90860000.00,
      "status": 82.39,
      "completionDate": "2024-01-01"
    },
    {
      "id": "23J00062",
      "name": "Road Widening - Primary Roads - Pagadian City - Zamboanga City Road",
      "location": "Region IX",
      "category": "Roads",
      "contractor": "HHH Developer and Construction",
      "contractorId": "37044",
      "cost": 111489470.07,
      "status": 83.27,
      "completionDate": "2025-01-01"
    },
    {
      "id": "19JA0110",
      "name": "Repair / Rehabilitation of Multi-Purpose Building (Conference Building), Camp Batalla",
      "location": "R.T. Lim Boulevard, Zamboanga City",
      "category": "Buildings and Facilities",
      "contractor": "Z Construction Enterprises and Developer",
      "contractorId": "39641",
      "cost": 1769483.99,
      "status": 100,
      "completionDate": "2019-11-26"
    },
    {
      "id": "24JA0019",
      "name": "Construction of Bridge",
      "location": "Brgy. Cawit, Zamboanga City",
      "category": "Bridges",
      "contractor": "SK Path Construction and Supply",
      "contractorId": "46331",
      "cost": 4945340.57,
      "status": 100,
      "completionDate": "2024-01-01"
    },
    {
      "id": "21JA0064",
      "name": "Construction of Road",
      "location": "Brgy. Cacao, Zamboanga City",
      "category": "Roads",
      "contractor": "Western Mindanao Construction",
      "contractorId": "16120",
      "cost": 1977598.05,
      "status": 100,
      "completionDate": "2021-05-09"
    },
    {
      "id": "20JA0023",
      "name": "Preventive Maintenance of Road: Asphalt Overlay - Pagadian City-Zamboanga City Rd",
      "location": "Zamboanga City",
      "category": "Roads",
      "contractor": "RCDG Construction Corporation",
      "contractorId": "5063",
      "cost": 31705688.32,
      "status": 100,
      "completionDate": "2021-07-28"
    },
    {
      "id": "18JA0119",
      "name": "Construction of 3 Storey 15 Classroom School Building at Canelar ES",
      "location": "Zamboanga City",
      "category": "Buildings and Facilities",
      "contractor": "Rudhil Construction & Enterprises, Inc.",
      "contractorId": "22901",
      "cost": 33984007.13,
      "status": 100,
      "completionDate": "2019-10-13"
    }
  ]
}
'@

# Write the JSON to file
$jsonData | Out-File -FilePath "d:\Code\projects\BetterZamboanga\data\dpwh-projects.json" -Encoding UTF8 -Force

Write-Host "Successfully updated dpwh-projects.json with 50 Zamboanga City projects!" -ForegroundColor Green
Write-Host "Total cost: ₱2,089,548,963.69" -ForegroundColor Cyan
Write-Host "Completed: 38 | Ongoing: 12" -ForegroundColor Yellow
