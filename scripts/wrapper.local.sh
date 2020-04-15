#!/bin/sh

if [ ! -z "${GITLAB_MONITOR_CONFIG}" ]; then
    echo "${GITLAB_MONITOR_CONFIG}" > config.json
fi
