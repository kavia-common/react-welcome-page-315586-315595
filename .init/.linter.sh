#!/bin/bash
cd /home/kavia/workspace/code-generation/react-welcome-page-315586-315595/frontend_react_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

