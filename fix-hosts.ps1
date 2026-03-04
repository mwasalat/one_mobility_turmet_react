# Fix hosts file - run as admin
# Usage: .\fix-hosts.ps1 -IP <server-ip>
param(
    [Parameter(Mandatory=$true)]
    [string]$IP
)
$hostsPath = "C:\Windows\System32\drivers\etc\hosts"
$content = Get-Content $hostsPath
$filtered = $content | Where-Object { $_ -notmatch "dev\.mwasalat\.ae" }
$filtered += "$IP  dev.mwasalat.ae"
Set-Content -Path $hostsPath -Value $filtered -Force
Write-Host "Done. Current mwasalat entries:"
Get-Content $hostsPath | Select-String "mwasalat"
