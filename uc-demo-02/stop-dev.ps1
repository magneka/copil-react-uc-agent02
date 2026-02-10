# Stop the Vite dev server
$pidFile = ".dev-server.pid"
if (Test-Path $pidFile) {
    $pid = Get-Content $pidFile
    try {
        $proc = Get-Process -Id $pid -ErrorAction Stop
        Stop-Process -Id $pid -Force
        Write-Host "Dev server stopped (PID $pid)"
    } catch {
        Write-Host "Process $pid is not running"
    }
    Remove-Item $pidFile
} else {
    Write-Host "No .dev-server.pid file found - is the server running?"
}
