# 🚀 Developer Portfolio - Full Stack Application

[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Java](https://img.shields.io/badge/Java-17-orange.svg)](https://www.oracle.com/java/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, responsive full-stack developer portfolio application with exceptional UX design, smooth animations, and a powerful backend API.

![Portfolio Preview](https://via.placeholder.com/800x400/0a0e27/00d4ff?text=Developer+Portfolio+Preview)

---

## ✨ Features

### 🎨 Frontend (React)
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Engaging animations using CSS keyframes
- **Dark Theme**: Modern dark theme with gradient accents
- **Interactive UI**: Hover effects, floating cards, and smooth scrolling
- **Contact Form**: Fully functional form with validation and status feedback
- **Project Showcase**: Display your best projects with tech stack badges
- **Skills Display**: Categorized skills with interactive tags
- **Experience Timeline**: Professional timeline view of your work history
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Scroll Progress**: Visual indicator of page scroll progress

### ⚙️ Backend (Spring Boot)
- **RESTful API**: Clean REST endpoints for all operations
- **JPA/Hibernate**: ORM for database operations
- **Input Validation**: Server-side validation using Jakarta Validation
- **CORS Configured**: Ready for cross-origin requests
- **H2 Database**: In-memory database for development
- **PostgreSQL Ready**: Production-ready with PostgreSQL support
- **Logging**: Comprehensive logging with SLF4J
- **Health Checks**: Actuator endpoints for monitoring
- **Exception Handling**: Proper error handling and responses

---

## 🛠️ Tech Stack

### Frontend
- **React** 18.2 - UI library
- **CSS3** - Styling with animations
- **JavaScript (ES6+)** - Modern JavaScript
- **Custom Fonts** - Space Grotesk & JetBrains Mono

### Backend
- **Spring Boot** 3.2 - Backend framework
- **Spring Data JPA** - Database access
- **Spring Web** - REST API
- **H2 Database** - Development database
- **PostgreSQL** - Production database
- **Lombok** - Reduce boilerplate code
- **Maven** - Build tool

---

## 📋 Prerequisites

Before running this application, ensure you have:

- **Node.js** (v16+) - [Download](https://nodejs.org/)
- **Java JDK** (17+) - [Download](https://www.oracle.com/java/technologies/downloads/)
- **Maven** (3.6+) - [Download](https://maven.apache.org/download.cgi)
- **Git** - [Download](https://git-scm.com/)

---

## 🚀 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio-app.git
cd portfolio-app
```

### 2️⃣ Start Backend

```bash
cd backend

# Install dependencies and run
mvn clean install
mvn spring-boot:run
```

Backend will be available at: **http://localhost:8080**

### 3️⃣ Start Frontend

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

Frontend will be available at: **http://localhost:3000**

---

## 📖 Detailed Setup

For a complete step-by-step implementation guide, see [IMPLEMENTATION_GUIDE.md](IMPLEMENTATION_GUIDE.md)

---

## 🌐 API Endpoints

### Contact Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all contacts |
| GET | `/api/contact/{id}` | Get contact by ID |
| GET | `/api/contact/email/{email}` | Get contacts by email |
| DELETE | `/api/contact/{id}` | Delete contact |
| GET | `/api/contact/health` | Health check |

### Example Request

```bash
curl -X POST http://localhost:8080/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I would like to discuss a project."
  }'
```

### Example Response

```json
{
  "success": true,
  "message": "Contact message received successfully!",
  "contactId": 1
}
```

---

## 🎨 Customization

### Update Personal Information

Edit `frontend/src/App.jsx`:

```javascript
// Update your name and tagline
<h1 className="hero-title">
  Your Name
  <span className="gradient-text"> Your Tagline</span>
</h1>

// Update contact info
<div className="contact-method">
  <span className="contact-icon">📧</span>
  <span>your.email@example.com</span>
</div>
```

### Change Colors

Edit `frontend/src/App.css`:

```css
:root {
  --bg-primary: #0a0e27;
  --accent-primary: #00d4ff;
  /* Customize other colors */
}
```

### Add Projects

Edit the `projects` array in `frontend/src/App.jsx`:

```javascript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    tech: ["React", "Node.js", "MongoDB"],
    image: "🚀",
    link: "https://github.com/yourusername/project"
  }
];
```

---

## 🗄️ Database Configuration

### Development (H2)

Default configuration in `application.properties`:

```properties
spring.datasource.url=jdbc:h2:mem:portfoliodb
spring.h2.console.enabled=true
```

Access H2 Console: http://localhost:8080/h2-console

### Production (PostgreSQL)

Update `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/portfolio_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

---

## 📦 Build for Production

### Frontend

```bash
cd frontend
npm run build
```

Output: `frontend/build/` directory

### Backend

```bash
cd backend
mvn clean package
```

Output: `backend/target/portfolio-backend-1.0.0.jar`

### Run Production Build

```bash
java -jar backend/target/portfolio-backend-1.0.0.jar
```

---

## 🚢 Deployment

### Frontend Options
- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod --dir=build`
- **GitHub Pages**: Configure in `package.json`
- **AWS S3 + CloudFront**

### Backend Options
- **Heroku**: `git push heroku main`
- **AWS Elastic Beanstalk**
- **DigitalOcean App Platform**
- **Docker**: Create `Dockerfile` and deploy to any container platform

---

## 🔍 Testing

### Test Backend

```bash
cd backend

# Run all tests
mvn test

# Test specific endpoint
curl http://localhost:8080/api/contact/health
```

### Test Frontend

```bash
cd frontend

# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

---

## 📊 Project Structure

```
portfolio-app/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/portfolio/backend/
│   │   │   │   ├── controller/      # REST controllers
│   │   │   │   ├── model/           # JPA entities
│   │   │   │   ├── repository/      # Data repositories
│   │   │   │   ├── service/         # Business logic
│   │   │   │   └── PortfolioBackendApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.jsx              # Main React component
│   │   ├── App.css              # Styles
│   │   ├── index.jsx            # Entry point
│   │   └── index.css
│   └── package.json
│
├── IMPLEMENTATION_GUIDE.md      # Detailed setup guide
└── README.md                    # This file
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by top developer portfolios from Brittany Chiang, Bruno Simon, and others
- Design principles from modern web development best practices
- Built with love using React and Spring Boot

---

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/) - your.hritik7645@example.com

Project Link: [https://github.com/Hritikkumarmahto/portfolio-app](https://github.com/Hritikkumarmahto/portfolio-app)

---

## 🌟 Show your support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ by [Your Name]**
