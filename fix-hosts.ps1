# Fix hosts file - run as admin
$hostsPath = "C:\Windows\System32\drivers\etc\hosts"
$content = Get-Content $hostsPath
$filtered = $content | Where-Object { $_ -notmatch "dev\.mwasalat\.ae" }
$filtered += "68.178.171.205  dev.mwasalat.ae"
Set-Content -Path $hostsPath -Value $filtered -Force
Write-Host "Done. Current mwasalat entries:"
Get-Content $hostsPath | Select-String "mwasalat"
