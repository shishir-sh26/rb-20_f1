@echo off
echo ==========================================
echo       INITIALIZING RED BULL RB20
echo ==========================================

echo [1/4] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Error installing dependencies.
    pause
    exit /b %errorlevel%
)

echo [2/4] Moving assets...
if exist "..\ezgif-frame-001.jpg" (
    move "..\ezgif-frame-*.jpg" "public\sequence\"
) else (
    echo Assets not found in parent directory. Checking if already moved...
)

echo [3/4] Renaming assets...
node rename_assets.js

echo [4/4] Starting development server...
echo Please open http://localhost:3000 in your browser
npm run dev
