@echo off
cd /d "%~dp0"
title CropOS Python Backend
color 0b
echo ==================================================
echo              CropOS Python Backend
echo ==================================================
echo.
echo [1/2] Checking Python Requirements...
py -m pip install -r backend/requirements.txt --disable-pip-version-check

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Failed to install Python packages. Make sure pip is active.
    pause
    exit /b %errorlevel%
)

echo [OK] Requirements ready.
echo.
echo [2/2] Starting Local Server...
echo The app will automatically open in your browser exactly when ready.
echo IMPORTANT: Leave this window OPEN while you use the app!
echo.
py backend/server.py
pause
