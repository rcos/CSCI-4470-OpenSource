#!/bin/bash

# Launch Grunt and enable server, put the task in the background
grunt serve --hostname '0.0.0.0' --port 8000 &

# disconnect the background task from this shell, so it keeps running after we log off.
disown -h %1
