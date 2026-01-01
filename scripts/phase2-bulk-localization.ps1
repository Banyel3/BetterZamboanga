# Better Zamboanga - Phase 2 Bulk Localization Script
# Processes all HTML and JS files (excluding dist/) with branding updates

$ErrorActionPreference = 'Continue'
$basePath = "Q:\Code - LAPTOP\Code\projects\BetterZamboanga"

Write-Host "`n=== Better Zamboanga Phase 2 Localization ===" -ForegroundColor Cyan
Write-Host "Starting bulk content localization...`n" -ForegroundColor Cyan

# Define replacement patterns (brand/UI only, not data)
$patterns = @(
    @{Old = 'BetterSolano\.org'; New = 'Better Zamboanga'; Type = 'Brand'},
    @{Old = 'bettersolano\.org'; New = 'betterzamboanga.org'; Type = 'Domain'},
    @{Old = 'Better Solano Logo'; New = 'Better Zamboanga Logo'; Type = 'Logo Alt'},
    @{Old = 'Better Solano logo'; New = 'Better Zamboanga logo'; Type = 'Logo Alt'},
    @{Old = 'better-solano-logo'; New = 'better-zamboanga-logo'; Type = 'Logo File'},
    @{Old = 'Solano, Nueva Vizcaya'; New = 'Zamboanga City'; Type = 'Location'},
    @{Old = 'Nueva Vizcaya 3708'; New = 'Zamboanga City 7000'; Type = 'Postal'},
    @{Old = 'Municipality of Solano'; New = 'City of Zamboanga'; Type = 'LGU Name'},
    @{Old = 'LGU Solano'; New = 'City Government of Zamboanga'; Type = 'LGU Short'},
    @{Old = 'Municipal Hall'; New = 'City Hall'; Type = 'Building'},
    @{Old = 'Municipal Mayor'; New = 'City Mayor'; Type = 'Title'},
    @{Old = 'Municipal Vice Mayor'; New = 'City Vice Mayor'; Type = 'Title'},
    @{Old = 'Sangguniang Bayan'; New = 'Sangguniang Panlungsod'; Type = 'Council'},
    @{Old = 'sangguniangbayan'; New = 'sangguniangpanlungsod'; Type = 'Council URL'},
    @{Old = 'the people of Solano'; New = 'the people of Zamboanga City'; Type = 'Copy'},
    @{Old = 'serving Solano'; New = 'serving Zamboanga City'; Type = 'Copy'},
    @{Old = 'about Solano'; New = 'about Zamboanga City'; Type = 'Copy'}
)

# Get all HTML files (excluding dist)
$htmlFiles = Get-ChildItem -Path $basePath -Filter *.html -Recurse | Where-Object { 
    $_.FullName -notmatch '\\dist\\' 
}

# Get all JS files in assets/js (excluding dist)
$jsFiles = Get-ChildItem -Path "$basePath\assets\js" -Filter *.js -Recurse

Write-Host "Files to process:" -ForegroundColor Yellow
Write-Host "  HTML files: $($htmlFiles.Count)" -ForegroundColor White
Write-Host "  JS files: $($jsFiles.Count)" -ForegroundColor White
Write-Host ""

$totalUpdated = 0
$allFiles = $htmlFiles + $jsFiles

foreach ($file in $allFiles) {
    try {
        $relativePath = $file.FullName.Replace("$basePath\", "")
        $content = Get-Content $file.FullName -Raw -Encoding UTF8
        $originalContent = $content
        $changesInFile = 0
        
        # Apply all patterns
        foreach ($pattern in $patterns) {
            $beforeLength = $content.Length
            $content = $content -replace $pattern.Old, $pattern.New
            if ($content.Length -ne $beforeLength) {
                $changesInFile++
            }
        }
        
        # Write back if changed
        if ($content -ne $originalContent) {
            Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
            $totalUpdated++
            Write-Host "[OK] $relativePath" -ForegroundColor Green
        }
    }
    catch {
        Write-Host "[ERROR] $relativePath - $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "=== Localization Complete ===" -ForegroundColor Cyan
Write-Host "Updated $totalUpdated of $($allFiles.Count) files" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Review changes with: git diff" -ForegroundColor White
Write-Host "2. Search for remaining Solano references: grep -rn 'Solano' --include='*.html' --exclude-dir=dist" -ForegroundColor White
Write-Host "3. Test build: npm run build" -ForegroundColor White
