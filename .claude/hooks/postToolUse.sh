#!/bin/bash
# PostToolUse: TypeScript 파일 저장 후 자동 lint 실행

TOOL_NAME="$1"
TOOL_INPUT="$2"

if [[ "$TOOL_NAME" == "Write" || "$TOOL_NAME" == "Edit" ]]; then
  FILE_PATH=$(echo "$TOOL_INPUT" | grep -o '"path":"[^"]*"' | head -1 | sed 's/"path":"//;s/"//')

  if [[ "$FILE_PATH" =~ \.(ts|tsx)$ ]]; then
    echo "🔍 lint 검사 중... ($FILE_PATH)"
    pnpm exec eslint "$FILE_PATH" 2>&1
  fi
fi
