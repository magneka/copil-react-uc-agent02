# Start the Vite dev server in the background
Write-Host "Starting dev server..."
$process = Start-Process -FilePath "node" -ArgumentList "node_modules/vite/bin/vite.js", "--host" -PassThru -NoNewWindow
$process.Id | Out-File -FilePath ".dev-server.pid" -Encoding ascii
Write-Host "Dev server started (PID $($process.Id))"
