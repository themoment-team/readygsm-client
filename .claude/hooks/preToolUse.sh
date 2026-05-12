#!/bin/bash
# PreToolUse: 위험한 명령어 및 규칙 위반 차단

TOOL_NAME="$1"
TOOL_INPUT="$2"

# Bash: 위험 패턴 차단
if [[ "$TOOL_NAME" == "Bash" ]]; then
  DANGEROUS_PATTERNS=(
    "rm -rf /"
    "rm -rf \*"
    "curl.*sh"
    "wget.*sh"
    "chmod 777"
    "> /dev/sda"
    "dd if="
    "mkfs\."
    "DROP TABLE"
    "DROP DATABASE"
  )

  for pattern in "${DANGEROUS_PATTERNS[@]}"; do
    if echo "$TOOL_INPUT" | grep -qiE "$pattern"; then
      echo "⛔ 위험한 명령어가 감지되어 차단되었습니다: $pattern"
      echo "   명령어를 다시 확인하세요."
      exit 2
    fi
  done

  # --force-with-lease 는 허용, 일반 --force / -f 는 차단
  if echo "$TOOL_INPUT" | grep -qE "git push.*--force($|[^-])" || \
     echo "$TOOL_INPUT" | grep -qE "git push.* -f( |$)"; then
    echo "⛔ force push 차단됨"
    echo "   --force 대신 --force-with-lease 를 사용하세요."
    exit 2
  fi
fi

# Write: UI 컴포넌트 파일명 규칙 검사
if [[ "$TOOL_NAME" == "Write" ]]; then
  FILE_PATH=$(echo "$TOOL_INPUT" | grep -o '"file_path":"[^"]*"' | head -1 | sed 's/"file_path":"//;s/"//')

  if echo "$FILE_PATH" | grep -qE '.*/ui/index\.tsx$'; then
    echo "⛔ UI 컴포넌트 파일명 규칙 위반: index.tsx 사용 불가"
    echo ""
    echo "   올바른 형식: {layer}/{slice}/ui/{ComponentName}.tsx"
    echo "   예시: widgets/header/ui/Header.tsx"
    echo ""
    echo "   배럴 export는 슬라이스 루트의 index.ts 에서 하세요:"
    echo "   예시: widgets/header/index.ts"
    exit 2
  fi
fi
