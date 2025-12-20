@echo off
echo ================================================
echo    SERVIDOR WEB - MALLAS JEREZ
echo ================================================
echo.
echo Iniciando servidor web...
echo.

REM Verificar si Python está instalado
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python no está instalado o no está en el PATH
    echo    Descarga Python desde: https://python.org
    pause
    exit /b 1
)

REM Iniciar servidor
echo ✅ Python detectado
echo 🌐 Abriendo http://localhost:8000
echo 💡 Presiona Ctrl+C para detener el servidor
echo.
python start_server.py

pause

