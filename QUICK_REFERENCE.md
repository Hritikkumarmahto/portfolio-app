# Portfolio App - Quick Reference Cheat Sheet

## 🚀 Quick Commands

### Using Scripts (Easiest)
```bash
# Linux/Mac
chmod +x start.sh
./start.sh

# Windows
start.bat
```

### Manual Setup

#### Backend
```bash
cd backend
mvn clean install          # Install dependencies
mvn spring-boot:run        # Run backend
mvn test                   # Run tests
mvn clean package          # Build JAR
```

#### Frontend
```bash
cd frontend
npm install                # Install dependencies
npm start                  # Start dev server
npm run build              # Build for production
npm test                   # Run tests
```

---

## 🐳 Docker Commands

### Single Container
```bash
# Backend
cd backend
docker build -t portfolio-backend .
docker run -p 8080:8080 portfolio-backend

# Frontend
cd frontend
docker build -t portfolio-frontend .
docker run -p 80:80 portfolio-frontend
```

### Docker Compose (Full Stack)
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild and start
docker-compose up -d --build

# Stop and remove volumes
docker-compose down -v
```

---

## 📡 API Endpoints

### Base URL
- Development: `http://localhost:8080`
- Production: `https://your-domain.com`

### Endpoints
```
POST   /api/contact              - Submit contact form
GET    /api/contact              - Get all contacts
GET    /api/contact/{id}         - Get contact by ID
GET    /api/contact/email/{email} - Get contacts by email
DELETE /api/contact/{id}         - Delete contact
GET    /api/contact/health       - Health check
```

### Example cURL Commands
```bash
# Submit contact
curl -X POST http://localhost:8080/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","message":"Hello"}'

# Get all contacts
curl http://localhost:8080/api/contact

# Health check
curl http://localhost:8080/api/contact/health
```

---

## 🗄️ Database Access

### H2 Console (Development)
- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:portfoliodb`
- Username: `sa`
- Password: (leave empty)

### PostgreSQL (Production)
```bash
# Connect to database
psql -U portfolio_user -d portfolio_db

# View tables
\dt

# View contacts
SELECT * FROM contacts;

# Exit
\q
```

---

## 🎨 Customization Quick Guide

### Change Colors
File: `frontend/src/App.css` (lines 3-13)
```css
:root {
  --bg-primary: #0a0e27;
  --accent-primary: #00d4ff;
}
```

### Update Personal Info
File: `frontend/src/App.jsx`
- Hero section: Lines ~100-120
- Projects: Lines ~120-135
- Skills: Lines ~135-145
- Experience: Lines ~145-160
- Contact: Lines ~370-410

### Add Project
File: `frontend/src/App.jsx`
```javascript
{
  title: "Project Name",
  description: "Description",
  tech: ["React", "Node.js"],
  image: "🚀",
  link: "https://github.com/user/repo"
}
```

---

## 🌐 Deployment

### Frontend (Netlify)
```bash
cd frontend
npm run build
netlify deploy --prod --dir=build
```

### Frontend (Vercel)
```bash
cd frontend
npm run build
vercel --prod
```

### Backend (Heroku)
```bash
cd backend
heroku create your-app-name
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
```

### Full Stack (Docker on Server)
```bash
# On your server
docker-compose up -d
```

---

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Find and kill process on port 8080
lsof -ti:8080 | xargs kill -9

# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Clear npm Cache
```bash
cd frontend
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Maven Issues
```bash
cd backend
mvn clean
rm -rf target
mvn install -U
```

### CORS Issues
- Verify backend is running on port 8080
- Check `@CrossOrigin` in `ContactController.java`
- Verify `proxy` in `frontend/package.json`

---

## 📊 File Sizes & Performance

### Optimized Build Sizes
- Frontend build: ~200KB (gzipped)
- Backend JAR: ~50MB
- Docker images: Frontend ~25MB, Backend ~200MB

### Performance Targets
- Lighthouse Score: 90+
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s
- API Response Time: <200ms

---

## 🔑 Environment Variables

### Backend (.env or application.properties)
```properties
SERVER_PORT=8080
DB_URL=jdbc:postgresql://localhost:5432/portfolio_db
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:8080
REACT_APP_ENV=development
```

---

## 📝 Common Tasks

### Add New Endpoint
1. Create method in `ContactController.java`
2. Add service method in `ContactService.java`
3. Update repository if needed
4. Test with cURL or Postman

### Add New Section to Portfolio
1. Add section in `App.jsx`
2. Add styles in `App.css`
3. Update navigation array
4. Test responsive design

### Update Dependencies
```bash
# Frontend
cd frontend
npm update
npm audit fix

# Backend
cd backend
mvn versions:display-dependency-updates
```

---

## 📞 Support Resources

### Documentation
- React: https://react.dev/
- Spring Boot: https://spring.io/projects/spring-boot
- Docker: https://docs.docker.com/

### Community
- Stack Overflow: Tag questions with `react` and `spring-boot`
- GitHub Issues: Report bugs in the repository
- Discord/Slack: Join developer communities

---

## ✅ Pre-Deployment Checklist

- [ ] Update personal information
- [ ] Add real projects and descriptions
- [ ] Update skills and experience
- [ ] Configure production database
- [ ] Set environment variables
- [ ] Test all forms and links
- [ ] Run performance tests
- [ ] Enable HTTPS
- [ ] Set up monitoring
- [ ] Configure backups
- [ ] Update meta tags for SEO
- [ ] Test mobile responsiveness
- [ ] Add Google Analytics (optional)

---

**Last Updated:** 2024
**Version:** 1.0.0
