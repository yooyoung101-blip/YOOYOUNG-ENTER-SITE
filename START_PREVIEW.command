#!/bin/bash
cd "$(dirname "$0")" || exit 1
PORT=8080
URL="http://localhost:${PORT}"
printf "\nYOOYOUNG ENTER SITE preview\n%s\n\nPress Control-C to stop the server.\n\n" "$URL"
(sleep 1; open "$URL") &
python3 -m http.server "$PORT"
