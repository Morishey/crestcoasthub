#!/bin/bash

# Fix Header.tsx - replace Bank with Building2
if [ -f "Header.tsx" ]; then
  echo "Fixing Header.tsx..."
  # Remove Bank from imports
  sed -i "s/{[^}]*Bank[^}]*}/&/" Header.tsx
  sed -i "s/Bank,//g; s/, Bank//g; s/{ Bank/{ Building2/g" Header.tsx
  
  # Replace Bank in JSX with Building2
  sed -i 's/<Bank/<Building2/g; s/Bank>/Building2>/g' Header.tsx
  
  # Make sure Building2 is imported
  if ! grep -q "Building2" Header.tsx; then
    sed -i "1s/import.*from 'lucide-react'/import { Building2, Menu, X } from 'lucide-react'/" Header.tsx
  fi
fi

# Fix other common icon issues
declare -A fixes=(
  ["Handshake"]="HandshakeIcon"
  ["Sun"]="SunMedium"
  ["Target"]="TargetIcon"
)

for file in *.tsx; do
  echo "Checking $file..."
  for old in "${!fixes[@]}"; do
    new="${fixes[$old]}"
    if grep -q "\b$old\b" "$file" && ! grep -q "$new" "$file"; then
      echo "  Replacing $old with $new in imports"
      sed -i "s/\b$old\b/$new/g" "$file"
    fi
  done
done

echo "✅ Done fixing icons!"
