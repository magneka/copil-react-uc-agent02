# Build the project for production
Write-Host "Building for production..."
node node_modules/vite/bin/vite.js build
Write-Host "Build complete - output in dist/"
