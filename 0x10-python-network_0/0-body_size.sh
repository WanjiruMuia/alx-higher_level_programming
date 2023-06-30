#!/usr/bin/python3

url="$1"

response=$(curl -sI "$url")
content_length=$(echo "$response" | awk '/Content-Length/ {print $2}' | tr -d '\r')

if [ -n "$content_length" ]; then
    echo "Response body size: ${content_length} bytes"
else
    echo "Unable to determine response body size"
fi
