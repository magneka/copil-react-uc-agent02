#!/usr/bin/env bash
# Start the Vite dev server in the background
echo "Starting dev server..."
npx vite --host &
echo $! > .dev-server.pid
echo "Dev server started (PID $(cat .dev-server.pid))"
