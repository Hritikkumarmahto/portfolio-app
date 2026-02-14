@echo off
REM Portfolio App - Quick Start Script for Windows
REM This script helps you set up and run the portfolio application

title Developer Portfolio - Quick Start

echo ==================================
echo Developer Portfolio - Quick Start
echo ==================================
echo.

REM Check Node.js
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js not found. Please install Node.js 16+ from https://nodejs.org/
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
    echo [OK] Node.js installed: %NODE_VERSION%
)

REM Check npm
where npm >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] npm not found
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
    echo [OK] npm installed: %NPM_VERSION%
)

REM Check Java
where java >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Java not found. Please install Java 17+ from https://www.oracle.com/java/technologies/downloads/
    pause
    exit /b 1
) else (
    echo [OK] Java installed
)

REM Check Maven
where mvn >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Maven not found. Please install Maven from https://maven.apache.org/download.cgi
    pause
    exit /b 1
) else (
    echo [OK] Maven installed
)

echo.
echo All prerequisites met!
echo.

:menu
echo What would you like to do?
echo 1) Setup and start both frontend and backend
echo 2) Start backend only
echo 3) Start frontend only
echo 4) Build for production
echo 5) Clean and reset
echo 0) Exit
echo.
set /p choice="Enter your choice: "

if "%choice%"=="1" goto fullsetup
if "%choice%"=="2" goto backend
if "%choice%"=="3" goto frontend
if "%choice%"=="4" goto build
if "%choice%"=="5" goto clean
if "%choice%"=="0" goto end
echo Invalid choice
goto menu

:fullsetup
echo.
echo Setting up and starting full application...
echo.

echo [1/4] Setting up backend...
cd backend
call mvn clean install
if %ERRORLEVEL% NEQ 0 (
    echo Backend setup failed!
    pause
    exit /b 1
)

echo.
echo [2/4] Starting backend server...
start "Portfolio Backend" cmd /k "mvn spring-boot:run"
timeout /t 5

echo.
echo [3/4] Setting up frontend...
cd ..\frontend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo Frontend setup failed!
    pause
    exit /b 1
)

echo.
echo [4/4] Starting frontend server...
call npm start
goto end

:backend
echo.
echo Starting backend only...
cd backend
call mvn clean install
call mvn spring-boot:run
goto end

:frontend
echo.
echo Starting frontend only...
cd frontend
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)
call npm start
goto end

:build
echo.
echo Building for production...
echo.

echo Building backend...
cd backend
call mvn clean package
if %ERRORLEVEL% NEQ 0 (
    echo Backend build failed!
    pause
    exit /b 1
)
echo [OK] Backend JAR created: target\portfolio-backend-1.0.0.jar
echo.

echo Building frontend...
cd ..\frontend
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo Frontend build failed!
    pause
    exit /b 1
)
echo [OK] Frontend build created: build\
echo.

echo Production build complete!
echo.
echo To run the production backend:
echo   cd backend ^&^& java -jar target\portfolio-backend-1.0.0.jar
echo.
echo To deploy the frontend:
echo   Upload the 'frontend\build' directory to your hosting service
echo.
pause
goto menu

:clean
echo.
echo Cleaning project...
echo.

cd backend
call mvn clean
echo [OK] Backend cleaned
echo.

cd ..\frontend
if exist "node_modules" rmdir /s /q node_modules
if exist "build" rmdir /s /q build
echo [OK] Frontend cleaned
echo.

echo Project cleaned successfully!
echo.
pause
goto menu

:end
echo Exiting...
exit /b 0
