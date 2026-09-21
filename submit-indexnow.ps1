# IndexNow Auto-Submission Script for Tech Mind Developers
# Usage: powershell -ExecutionPolicy Bypass -File .\submit-indexnow.ps1

$sitemapPath = Join-Path $PSScriptRoot "sitemap.xml"
if (-not (Test-Path $sitemapPath)) {
    Write-Error "sitemap.xml not found in $PSScriptRoot"
    exit 1
}

[xml]$sitemap = Get-Content $sitemapPath
$urls = @($sitemap.urlset.url.loc)

Write-Host "Found $($urls.Count) URLs in sitemap.xml to submit..." -ForegroundColor Cyan

$payload = @{
    host = "techminddevelopers.in"
    key = "43b9176d4eb642079042ff1abd738af4"
    keyLocation = "https://techminddevelopers.in/43b9176d4eb642079042ff1abd738af4.txt"
    urlList = $urls
} | ConvertTo-Json -Depth 5

# 1. Bing Endpoint
try {
    $resBing = Invoke-WebRequest -Uri "https://www.bing.com/indexnow" -Method Post -Body $payload -ContentType "application/json; charset=utf-8" -UseBasicParsing
    Write-Host " [OK] Submitted to Bing IndexNow (HTTP $($resBing.StatusCode))" -ForegroundColor Green
} catch {
    Write-Host " [!] Bing Response: $($_.Exception.Message)" -ForegroundColor Yellow
}

# 2. Universal IndexNow Endpoint (Bing, Yandex, Naver, Seznam)
try {
    $resIndexNow = Invoke-WebRequest -Uri "https://api.indexnow.org/indexnow" -Method Post -Body $payload -ContentType "application/json; charset=utf-8" -UseBasicParsing
    Write-Host " [OK] Submitted to IndexNow.org API (HTTP $($resIndexNow.StatusCode))" -ForegroundColor Green
} catch {
    Write-Host " [!] IndexNow Response: $($_.Exception.Message)" -ForegroundColor Yellow
}

Write-Host "IndexNow notification completed successfully!" -ForegroundColor Cyan
