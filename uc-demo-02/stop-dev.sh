#!/usr/bin/env bash
# Stop the Vite dev server
if [ -f .dev-server.pid ]; then
  PID=$(cat .dev-server.pid)
  if kill -0 "$PID" 2>/dev/null; then
    kill "$PID"
    echo "Dev server stopped (PID $PID)"
  else
    echo "Process $PID is not running"
  fi
  rm -f .dev-server.pid
else
  echo "No .dev-server.pid file found — is the server running?"
fi
