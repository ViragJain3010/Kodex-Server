#!/bin/bash

# Exit on any error
set -e

# Function to handle timeouts
timeout_handler() {
    echo "Execution timed out"
    exit 124
}

# Set timeout handler
trap timeout_handler SIGTERM

# Logging function for easier tracking
log() {
    echo "[LOG] $1"
}

# Log start of the script
# log "Starting run.sh"

# Check if input file is present and read input
if [ -f "input.txt" ]; then
    INPUT=$(cat input.txt)
    # log "Input file found. Contents: $INPUT"
else
    INPUT=""
    # log "No input file found"
fi

# Log current working directory and list files in /app
# log "Current working directory: $(pwd)"
# log "Listing files in /app:"
# ls /app


if [ "$1" = "compile" ]; then
    # Compilation phase (for compiled languages like C++)
    COMPILATION_CMD="$2"
    # echo "[LOG] Compilation command: $COMPILATION_CMD"

    # Run the compilation command
    $COMPILATION_CMD
    
    # if [ $? -eq 0 ]; then
        # echo "[LOG] Compilation successful"
        # log "Listing files in /app:"
        # ls /app
    # else
        # echo "[LOG] Compilation failed"
        # exit 1
    # fi

    # Execution phase
    EXECUTION_CMD="$3"
    # echo "[LOG] Execution command: $EXECUTION_CMD"
    
    # Execute the compiled program (or script)
    if [ -n "$INPUT" ]; then
        # echo "$INPUT" | $EXECUTION_CMD
        OUTPUT=$(echo "$INPUT" | $EXECUTION_CMD)
    else
        # $EXECUTION_CMD
        OUTPUT=$($EXECUTION_CMD)
    fi
    # echo "[LOG] Program output: "
    echo "$OUTPUT"

else
    # If no compile step (2 items in Cmd), directly execute the command
    EXECUTION_CMD="$@"
    # log "Execution command: $EXECUTION_CMD"

    # Capture the output of the execution command
    if [ -n "$INPUT" ]; then
        # log "Feeding input to the execution command"
        OUTPUT=$(echo "$INPUT" | $EXECUTION_CMD)
    else
        # log "Executing without input"
        OUTPUT=$($EXECUTION_CMD)
    fi

    # Log the output
    # echo "[LOG] Program output: "
    echo "$OUTPUT"

fi

# Log end of the script
# log "End of run.sh"
