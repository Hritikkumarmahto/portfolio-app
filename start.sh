#!/bin/bash

# Portfolio App - Quick Start Script
# This script helps you set up and run the portfolio application

echo "=================================="
echo "Developer Portfolio - Quick Start"
echo "=================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo -e "${BLUE}Checking prerequisites...${NC}"
echo ""

# Check Node.js
if command_exists node; then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}✓ Node.js installed: $NODE_VERSION${NC}"
else
    echo -e "${RED}✗ Node.js not found. Please install Node.js 16+ from https://nodejs.org/${NC}"
    exit 1
fi

# Check npm
if command_exists npm; then
    NPM_VERSION=$(npm -v)
    echo -e "${GREEN}✓ npm installed: $NPM_VERSION${NC}"
else
    echo -e "${RED}✗ npm not found${NC}"
    exit 1
fi

# Check Java
if command_exists java; then
    JAVA_VERSION=$(java -version 2>&1 | head -n 1)
    echo -e "${GREEN}✓ Java installed: $JAVA_VERSION${NC}"
else
    echo -e "${RED}✗ Java not found. Please install Java 17+ from https://www.oracle.com/java/technologies/downloads/${NC}"
    exit 1
fi

# Check Maven
if command_exists mvn; then
    MVN_VERSION=$(mvn -v | head -n 1)
    echo -e "${GREEN}✓ Maven installed: $MVN_VERSION${NC}"
else
    echo -e "${RED}✗ Maven not found. Please install Maven from https://maven.apache.org/download.cgi${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}All prerequisites met!${NC}"
echo ""

# Menu
echo "What would you like to do?"
echo "1) Setup and start both frontend and backend"
echo "2) Start backend only"
echo "3) Start frontend only"
echo "4) Build for production"
echo "5) Clean and reset"
echo "0) Exit"
echo ""
read -p "Enter your choice: " choice

case $choice in
    1)
        echo ""
        echo -e "${BLUE}Setting up and starting full application...${NC}"
        
        # Setup and start backend
        echo ""
        echo -e "${YELLOW}[1/4] Setting up backend...${NC}"
        cd backend
        mvn clean install
        
        # Start backend in background
        echo ""
        echo -e "${YELLOW}[2/4] Starting backend server...${NC}"
        mvn spring-boot:run > ../backend.log 2>&1 &
        BACKEND_PID=$!
        echo "Backend PID: $BACKEND_PID"
        
        # Setup frontend
        cd ../frontend
        echo ""
        echo -e "${YELLOW}[3/4] Setting up frontend...${NC}"
        npm install
        
        # Start frontend
        echo ""
        echo -e "${YELLOW}[4/4] Starting frontend server...${NC}"
        npm start
        ;;
    
    2)
        echo ""
        echo -e "${BLUE}Starting backend only...${NC}"
        cd backend
        mvn clean install
        mvn spring-boot:run
        ;;
    
    3)
        echo ""
        echo -e "${BLUE}Starting frontend only...${NC}"
        cd frontend
        if [ ! -d "node_modules" ]; then
            echo "Installing dependencies..."
            npm install
        fi
        npm start
        ;;
    
    4)
        echo ""
        echo -e "${BLUE}Building for production...${NC}"
        
        # Build backend
        echo ""
        echo -e "${YELLOW}Building backend...${NC}"
        cd backend
        mvn clean package
        echo -e "${GREEN}✓ Backend JAR created: target/portfolio-backend-1.0.0.jar${NC}"
        
        # Build frontend
        echo ""
        echo -e "${YELLOW}Building frontend...${NC}"
        cd ../frontend
        npm run build
        echo -e "${GREEN}✓ Frontend build created: build/${NC}"
        
        echo ""
        echo -e "${GREEN}Production build complete!${NC}"
        echo ""
        echo "To run the production backend:"
        echo "  cd backend && java -jar target/portfolio-backend-1.0.0.jar"
        echo ""
        echo "To deploy the frontend:"
        echo "  Upload the 'frontend/build' directory to your hosting service"
        ;;
    
    5)
        echo ""
        echo -e "${YELLOW}Cleaning project...${NC}"
        
        # Clean backend
        cd backend
        mvn clean
        echo -e "${GREEN}✓ Backend cleaned${NC}"
        
        # Clean frontend
        cd ../frontend
        rm -rf node_modules build
        echo -e "${GREEN}✓ Frontend cleaned${NC}"
        
        echo ""
        echo -e "${GREEN}Project cleaned successfully!${NC}"
        ;;
    
    0)
        echo "Exiting..."
        exit 0
        ;;
    
    *)
        echo -e "${RED}Invalid choice${NC}"
        exit 1
        ;;
esac
