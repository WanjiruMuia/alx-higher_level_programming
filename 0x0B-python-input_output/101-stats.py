#!/usr/bin/python3
"""Reads from standard input and computes metrics.
import sys
import signal

# Define a signal handler to catch keyboard interrupts
def signal_handler(sig, frame):
    print_stats()
    sys.exit(0)

# Register the signal handler
signal.signal(signal.SIGINT, signal_handler)

# Initialize variables to hold the statistics
total_file_size = 0
status_counts = {200: 0, 301: 0, 400: 0, 401: 0, 403: 0, 404: 0, 405: 0, 500: 0}
line_count = 0

# Define a function to print the statistics
def print_stats():
    print(f"Total file size: {total_file_size}")
    for status_code in sorted(status_counts.keys()):
        if status_counts[status_code] > 0:
            print(f"{status_code}: {status_counts[status_code]}")

# Read from stdin line by line
for line in sys.stdin:
    # Parse the line to extract the file size and status code
    fields = line.split()
    file_size = int(fields[4])
    status_code = int(fields[3])

    # Update the statistics
    total_file_size += file_size
    status_counts[status_code] += 1
    line_count += 1

    # Print the statistics every 10 lines
    if line_count % 10 == 0:
        print_stats()

# Print the final statistics when the input ends
print_stats()
