# Smart Productivity Suite: AI-Powered Tools for All

## Overview
Smart Productivity Suite is a comprehensive web-based platform offering AI-driven utilities designed to enhance productivity and simplify everyday tasks. The platform integrates various tools including English Typing, Barcode Generation, Text-to-Speech, Speech-to-Text, and Paraphrasing capabilities.

## Features
- **English Typing Assistant**: AI-powered typing assistance and correction
- **Barcode Generation**: Create various types of barcodes
- **Text-to-Speech**: Convert written text into natural-sounding speech
- **Speech-to-Text**: Transcribe spoken words into written text
- **Paraphraser**: Rephrase text while maintaining original meaning

## Tech Stack
### Frontend
- Next.js
- TypeScript
- Tailwind CSS
- Jest for testing

### Backend
- Spring Boot
- PostgreSQL
- JUnit for testing
- Spring Security

### DevOps
- Docker
- Kubernetes
- GitHub Actions
- Prometheus & Grafana for monitoring

## Prerequisites
- Node.js 18.x or higher
- Java JDK 17
- PostgreSQL 15.x
- Docker
- Kubernetes

## Getting Started

### Frontend Setup
```bash
# Clone the repository
git clone <repository-url>

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

### Environment Variables
Create a `.env` file in the frontend directory:
```
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
```

Create a `.env` file in the backend directory:
```
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/productivity_suite
SPRING_DATASOURCE_USERNAME=your_username
SPRING_DATASOURCE_PASSWORD=your_password
```

## Project Structure
```
.
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   └── utils/
│   ├── public/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── main/
│   │   └── test/
│   └── pom.xml
├── k8s/
└── docker/
```

## API Documentation
API documentation is available at:
- Development: `http://localhost:8080/swagger-ui.html`
- Production: `https://api.productivitysuite.com/swagger-ui.html`

## Testing
### Frontend Tests
```bash
npm test
```

### Backend Tests
```bash
mvn test
```

## Deployment
The application uses GitHub Actions for CI/CD. Each push to main triggers:
1. Automated tests
2. Build process
3. Docker image creation
4. Deployment to staging/production

## Monitoring
- Application metrics: Available through Spring Actuator
- System monitoring: Prometheus & Grafana dashboards
- Error tracking: Sentry

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## Team Members
- Senarathna GMLD (EG/2020/4202)
- Abenayaka D (EG/2021/4376)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
