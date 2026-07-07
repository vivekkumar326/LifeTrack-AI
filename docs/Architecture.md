Part	Topic
✅ Part 1	Introduction + High Level Architecture
Part 2	Frontend Architecture
Part 3	Backend Architecture
Part 4	Database & AI Architecture
Part 5	Request Flow + Authentication Flow
Part 6	Deployment + Scalability + Conclusion
# 🏗️ System Architecture Document

## Project

**LifeTrack AI – AI-Powered Productivity & Habit Analytics Platform**

---

# Document Information

| Field | Details |
|--------|---------|
| Document | System Architecture |
| Version | 1.0 |
| Status | Draft |
| Author | Vivek Kumar |
| Architecture Style | Three-Tier Architecture |
| Platform | Progressive Web Application (PWA) |
| Last Updated | July 2026 |

---

# Table of Contents

1. Introduction

2. Architecture Goals

3. System Overview

4. High-Level Architecture

5. Layers

6. Core Components

7. Design Principles

---

# 1. Introduction

The System Architecture document defines the overall structure of the LifeTrack AI platform.

It describes how different software components communicate with each other and how data flows throughout the application.

The objective is to create a scalable, secure, maintainable, and production-ready software architecture.

This document serves as a blueprint for frontend developers, backend developers, and future contributors.

---

# 2. Architecture Goals

The primary objectives of the architecture are:

- Scalability
- Maintainability
- Security
- High Performance
- Component Reusability
- Modular Development
- Cloud Deployment
- Easy Testing
- Future Expansion

---

# 3. System Overview

LifeTrack AI is a Progressive Web Application (PWA) that helps users build productive habits, monitor daily activities, analyze long-term performance, and receive AI-powered recommendations.

The application follows a modern three-tier architecture consisting of:

- Presentation Layer
- Application Layer
- Data Layer

Each layer is independent, allowing the application to scale without affecting other components.

---

# 4. High-Level Architecture

```
                    USER

                      │

                      ▼

      Progressive Web Application

          React + Tailwind CSS

                      │

              HTTPS REST APIs

                      │

                      ▼

         Node.js + Express Backend

                      │

        Authentication Middleware

                      │

          Business Logic Layer

                      │

        ┌─────────────┴─────────────┐

        ▼                           ▼

 MongoDB Atlas                Gemini AI API

(Database Storage)           (AI Processing)
```

---

# 5. System Layers

## Presentation Layer

Responsible for:

- User Interface
- Navigation
- User Interaction
- Form Handling
- Data Visualization
- Charts
- Heatmaps

Technology

- React
- Tailwind CSS
- Framer Motion

---

## Application Layer

Responsible for:

- Authentication
- Business Logic
- Validation
- API Processing
- Analytics
- AI Integration

Technology

- Node.js
- Express.js

---

## Data Layer

Responsible for:

- User Data
- Habits
- Goals
- Logs
- AI Reports
- Notifications

Technology

MongoDB Atlas

---

# 6. Core Components

The application consists of the following major components.

### Authentication

Handles

- Registration
- Login
- JWT
- Authorization

---

### Habit Management

Handles

- Create Habit
- Edit Habit
- Delete Habit
- Complete Habit

---

### Analytics

Handles

- Daily Reports

- Weekly Reports

- Monthly Reports

- Yearly Reports

- Life Score

---

### AI Coach

Handles

- Daily Review

- Suggestions

- Motivation

- Weekly Analysis

---

### Notifications

Handles

- Morning Reminder

- Evening Reminder

- Missed Habit Alert

---

# 7. Design Principles

LifeTrack AI follows the following software engineering principles.

- Separation of Concerns

- Single Responsibility Principle

- Reusable Components

- Modular Architecture

- RESTful APIs

- Secure Authentication

- Responsive Design

- Offline Support (PWA)

- Scalable Database

---

# End of Part 1

Next Part

Frontend Architecture

React Component Tree

Routing

State Management

Folder Responsibilities
---

# 8. Frontend Architecture

## 8.1 Overview

The frontend of LifeTrack AI is built using **React.js** and follows a **Component-Based Architecture**. The application is designed as a Progressive Web Application (PWA) to provide a fast, responsive, and installable user experience across desktop and mobile devices.

The frontend communicates with the backend through REST APIs using Axios and manages server state using TanStack Query while global application state is handled through React Context.

The architecture emphasizes:

- Reusable Components
- Separation of Concerns
- Responsive Design
- Maintainability
- Performance
- Scalability

---

# 8.2 Frontend Technology Stack

| Technology | Purpose |
|------------|----------|
| React.js | User Interface |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| React Router DOM | Routing |
| Axios | API Communication |
| TanStack Query | Server State Management |
| React Context API | Global State |
| Framer Motion | Animations |
| React Hook Form | Form Handling |
| Recharts | Graphs & Analytics |

---

# 8.3 Frontend Folder Structure

```
client/

src/

├── assets/

├── components/

│      ├── common/

│      ├── dashboard/

│      ├── habits/

│      ├── analytics/

│      ├── ai/

│      └── profile/

├── context/

├── hooks/

├── layouts/

├── pages/

├── routes/

├── services/

├── styles/

├── utils/

├── App.jsx

└── main.jsx
```

---

# 8.4 React Component Tree

```
App

│

├── Router

│

├── Public Layout

│       ├── Login

│       └── Register

│

└── Protected Layout

        │

        ├── Navbar

        ├── Sidebar

        │

        ├── Dashboard

        │

        ├── Habits

        │

        ├── Calendar

        │

        ├── Analytics

        │

        ├── AI Coach

        │

        ├── Profile

        │

        └── Settings
```

---

# 8.5 Routing Architecture

The application follows client-side routing.

```
/

↓

Splash Screen

↓

/login

↓

/register

↓

/dashboard

↓

/habits

↓

/calendar

↓

/analytics

↓

/ai

↓

/profile

↓

/settings
```

Protected routes require authentication before rendering.

---

# 8.6 Layout Architecture

The application uses reusable layouts.

### Public Layout

Contains

- Login
- Register

---

### Private Layout

Contains

- Navbar
- Sidebar
- Main Content
- Footer

This prevents duplication across pages.

---

# 8.7 State Management

## Local State

Managed using:

- useState
- useReducer

Used for:

- Forms
- Modals
- Dropdowns
- Search
- Filters

---

## Global State

Managed using React Context.

Stores

- User
- Theme
- Authentication
- Preferences

---

## Server State

Managed using TanStack Query.

Responsible for

- API Requests
- Data Caching
- Background Refetching
- Optimistic Updates
- Error Handling

---

# 8.8 Component Classification

### Common Components

- Button
- Input
- Modal
- Card
- Loader
- Avatar
- Badge

---

### Dashboard Components

- Welcome Card
- Progress Circle
- Today's Habits
- Quick Stats
- Streak Card

---

### Habit Components

- Habit Card
- Habit List
- Habit Progress
- Habit Form
- Habit History

---

### Analytics Components

- Bar Chart
- Pie Chart
- Line Chart
- Heatmap
- Calendar
- Productivity Card

---

### AI Components

- AI Coach Card
- Suggestions
- Daily Review
- Weekly Review
- Productivity Tips

---

# 8.9 Responsive Design Strategy

Supported Devices

| Device | Width |
|---------|------|
| Mobile | ≤767px |
| Tablet | 768px–1023px |
| Laptop | 1024px–1439px |
| Desktop | ≥1440px |

Responsive Features

- Flexible Grid
- Responsive Typography
- Collapsible Sidebar
- Bottom Navigation (Mobile)
- Adaptive Cards
- Touch-Friendly Controls

---

# 8.10 Theme Management

Supported Themes

- Light Theme
- Dark Theme

Color Palette

| Purpose | Color |
|----------|--------|
| Primary | #4F46E5 |
| Success | #22C55E |
| Warning | #F59E0B |
| Danger | #EF4444 |
| Background | #0F172A |

Theme preference is stored in the user's profile and applied automatically on login.

---

# End of Part 2

Next Part

- Backend Architecture
- Controller Layer
- Service Layer
- Middleware
- Authentication Flow
- Request Lifecycle
- Error Handling
---

# 9. Backend Architecture

## 9.1 Overview

The backend of LifeTrack AI is developed using **Node.js** and **Express.js**. It is responsible for processing business logic, managing user authentication, handling API requests, communicating with MongoDB Atlas, generating analytics, and integrating with Gemini AI.

The backend follows a **Layered Architecture** that separates routing, business logic, database operations, and middleware into independent modules. This approach improves maintainability, scalability, and testability.

---

# 9.2 Backend Architecture Diagram

```
                  React Frontend
                         │
                         ▼
                    Express Router
                         │
                         ▼
                  Authentication
                    Middleware
                         │
                         ▼
                    Route Handler
                         │
                         ▼
                     Controller
                         │
                         ▼
                      Service
                         │
                         ▼
                   Mongoose Model
                         │
                         ▼
                   MongoDB Atlas
```

---

# 9.3 Backend Folder Structure

```
server/

├── config/
│   ├── database.js
│   └── env.js
│
├── controllers/
│   ├── auth.controller.js
│   ├── habit.controller.js
│   ├── goal.controller.js
│   ├── analytics.controller.js
│   ├── ai.controller.js
│   └── notification.controller.js
│
├── middleware/
│   ├── auth.middleware.js
│   ├── validation.middleware.js
│   ├── error.middleware.js
│   └── logger.middleware.js
│
├── models/
│   ├── User.js
│   ├── Habit.js
│   ├── HabitLog.js
│   ├── Goal.js
│   ├── AIReport.js
│   ├── Notification.js
│   └── Achievement.js
│
├── routes/
│   ├── auth.routes.js
│   ├── habit.routes.js
│   ├── goal.routes.js
│   ├── analytics.routes.js
│   ├── ai.routes.js
│   └── notification.routes.js
│
├── services/
│   ├── auth.service.js
│   ├── habit.service.js
│   ├── analytics.service.js
│   ├── ai.service.js
│   └── notification.service.js
│
├── utils/
│   ├── response.js
│   ├── logger.js
│   ├── jwt.js
│   └── helpers.js
│
├── app.js
└── server.js
```

---

# 9.4 Route Layer

The Route Layer defines all API endpoints and forwards incoming requests to the appropriate controller.

Responsibilities

- Define REST endpoints
- Apply middleware
- Forward requests to controllers

Example

```
POST /api/auth/login

↓

Auth Route

↓

Auth Controller
```

---

# 9.5 Controller Layer

Controllers receive requests from routes and coordinate the execution of business logic.

Responsibilities

- Receive HTTP Requests
- Validate Input
- Call Service Layer
- Return HTTP Response
- Handle Exceptions

Controllers do not contain complex business logic.

---

# 9.6 Service Layer

The Service Layer contains the core business logic.

Responsibilities

- Habit Calculations
- Goal Progress Calculation
- Productivity Score Calculation
- AI Prompt Preparation
- Analytics Generation
- Notification Scheduling

Advantages

- Reusable Code
- Easy Unit Testing
- Better Maintainability
- Separation of Concerns

---

# 9.7 Model Layer

The Model Layer represents MongoDB collections using Mongoose schemas.

Models

- User
- Habit
- HabitLog
- Goal
- AIReport
- Notification
- Achievement

Responsibilities

- Database Schema
- Validation
- Relationships
- Database Queries

---

# 9.8 Middleware Layer

Middleware executes before the request reaches the controller.

### Authentication Middleware

Purpose

- Verify JWT Token
- Identify Current User

---

### Validation Middleware

Purpose

- Validate Request Body
- Check Required Fields
- Prevent Invalid Data

---

### Error Middleware

Purpose

- Handle Application Errors
- Return Standard Error Responses

---

### Logger Middleware

Purpose

- Log Incoming Requests
- Log Errors
- Record Response Time

---

# 9.9 Utility Layer

Utility functions are shared across the application.

Examples

- JWT Helper
- Response Formatter
- Logger
- Date Formatter
- Productivity Calculator

---

# 9.10 Request Lifecycle

Example: User Creates a Habit

```
User

↓

React Form

↓

Axios Request

↓

Express Route

↓

Authentication Middleware

↓

Validation Middleware

↓

Habit Controller

↓

Habit Service

↓

Habit Model

↓

MongoDB Atlas

↓

Response Formatter

↓

Frontend Dashboard Update
```

---

# 9.11 Error Handling Strategy

Errors are handled centrally using Error Middleware.

Types of Errors

- Validation Error
- Authentication Error
- Authorization Error
- Database Error
- AI Service Error
- Internal Server Error

Example Response

```json
{
  "success": false,
  "message": "Validation Failed",
  "errors": [
    "Habit title is required"
  ]
}
```

---

# 9.12 Logging Strategy

The application records:

- User Login
- Failed Login
- API Requests
- API Errors
- Database Errors
- AI Response Time
- Server Startup
- Unexpected Exceptions

Future Integration

- Winston
- Morgan
- Sentry

---

# 9.13 Design Principles

The backend follows:

- Clean Architecture
- Layered Design
- RESTful APIs
- Reusable Services
- Secure Authentication
- Centralized Error Handling
- Modular Development
- High Scalability

---

# End of Part 3

Next Part

- Database Architecture
- AI Integration Architecture
- Authentication Flow
- Authorization Flow
- Data Flow Diagram (DFD)
- Sequence Diagram
---

# 10. Database Architecture

## 10.1 Overview

The database layer is responsible for storing, retrieving, updating, and managing all application data. LifeTrack AI uses **MongoDB Atlas**, a cloud-based NoSQL database, to ensure high availability, scalability, and flexibility.

The database is designed using a document-oriented approach where each collection represents a major business entity of the application.

---

# 10.2 Database Components

The primary collections are:

- Users
- Habits
- HabitLogs
- Goals
- AIReports
- Notifications
- Achievements

Each collection is linked using MongoDB ObjectId references where required.

---

# 10.3 Database Relationship Diagram

```
                     Users
                       │
      ┌────────────────┼────────────────┐
      │                │                │
      ▼                ▼                ▼
   Habits           Goals         Achievements
      │
      ▼
 HabitLogs
      │
      ▼
 AIReports

Users
  │
  ▼
Notifications
```

---

# 10.4 Data Ownership

Every document belongs to exactly one authenticated user.

Example

```
User

↓

Habit

↓

Habit Log

↓

Analytics

↓

AI Report
```

No user can access another user's records.

---

# 10.5 Database Access Flow

```
Frontend

↓

REST API

↓

Controller

↓

Service

↓

Mongoose

↓

MongoDB Atlas

↓

JSON Response

↓

Frontend
```

---

# 10.6 Indexing Strategy

The following indexes are recommended.

Users

- email (Unique)

Habits

- userId
- category

HabitLogs

- userId
- habitId
- date

Goals

- userId

Notifications

- userId
- notificationTime

AIReports

- userId
- reportDate

Indexes improve read performance and reduce query execution time.

---

# 10.7 Backup Strategy

Database backups are managed by MongoDB Atlas.

Backup Types

- Automatic Daily Backup
- Manual Backup
- Export JSON
- Export CSV

Recovery Goals

- Minimal Data Loss
- Fast Restoration
- High Availability

---

# 11. AI Integration Architecture

## 11.1 Overview

LifeTrack AI integrates **Google Gemini API** to provide intelligent recommendations based on user productivity data.

The AI system does not directly access the database.

Instead, the backend prepares structured data before sending requests to the AI service.

---

## 11.2 AI Request Flow

```
User

↓

Dashboard

↓

Analytics Service

↓

AI Service

↓

Gemini API

↓

AI Response

↓

Backend Processing

↓

Frontend Dashboard
```

---

## 11.3 AI Responsibilities

The AI module performs the following tasks:

- Daily Productivity Review
- Weekly Report Generation
- Monthly Analysis
- Personalized Suggestions
- Habit Improvement Tips
- Motivation Messages
- Goal Recommendations

---

## 11.4 AI Prompt Pipeline

```
Habit Logs

↓

Analytics Engine

↓

Prompt Builder

↓

Gemini API

↓

AI Response

↓

Response Formatter

↓

Frontend
```

---

## 11.5 AI Safety

To ensure privacy:

- Passwords are never shared.
- JWT tokens are never shared.
- Sensitive information is excluded.
- Only productivity-related data is processed.

---

# 12. Authentication Architecture

## 12.1 Login Flow

```
User

↓

Login Page

↓

POST /api/auth/login

↓

Authentication Controller

↓

User Service

↓

MongoDB

↓

Password Verification

↓

JWT Generation

↓

Response

↓

Dashboard
```

---

## 12.2 Protected Route Flow

```
User

↓

Frontend

↓

JWT Token

↓

Authentication Middleware

↓

Controller

↓

Service

↓

Database

↓

Response
```

If the token is invalid, the request is rejected with HTTP 401 Unauthorized.

---

# 12.3 Authorization Flow

Each request follows the sequence below.

```
Request

↓

Extract JWT

↓

Verify Token

↓

Identify User

↓

Validate Ownership

↓

Execute Operation

↓

Return Response
```

This prevents users from accessing or modifying data that belongs to other users.

---

# 13. Data Flow Diagram (Level 0)

```
          +----------------+
          |     User       |
          +-------+--------+
                  |
                  v
        +-------------------+
        |   LifeTrack AI    |
        +-------------------+
          |     |      |
          |     |      |
          v     v      v
     MongoDB  Gemini  Notifications
```

---

# 14. Data Flow Diagram (Level 1)

```
User
  |
  v
Frontend (React)
  |
  v
REST API
  |
  v
Authentication
  |
  v
Controllers
  |
  v
Services
  |
  +--------> MongoDB Atlas
  |
  +--------> Gemini AI
  |
  v
JSON Response
  |
  v
Frontend UI
```

---

# 15. Architecture Design Principles

The architecture follows these principles:

- Separation of Concerns (SoC)
- Single Responsibility Principle (SRP)
- Layered Architecture
- Reusable Components
- Stateless REST APIs
- Secure Authentication
- Modular Folder Structure
- Cloud-Native Design
- Scalable Database
- AI Service Isolation

---

# End of Part 4

Next Part

- Deployment Architecture
- CI/CD Pipeline
- Monitoring & Logging
- Performance Optimization
- Scalability Strategy
- Disaster Recovery
- Final Architecture Summary
---

# 16. Deployment Architecture

## 16.1 Overview

LifeTrack AI is designed to be deployed as a cloud-native Progressive Web Application (PWA). The frontend, backend, database, and AI services are deployed independently to improve scalability, maintainability, and fault isolation.

The deployment architecture follows a distributed model where each service has a dedicated responsibility.

---

# 16.2 Deployment Diagram

```
                    Internet

                        │

                        ▼

                Vercel CDN (Frontend)

                        │

                        ▼

          HTTPS REST API Communication

                        │

                        ▼

          Render Cloud (Node.js Backend)

             │                    │

             ▼                    ▼

     MongoDB Atlas          Gemini AI API

(Database Storage)       (AI Processing)
```

---

# 16.3 Deployment Components

## Frontend

Technology

- React.js
- Vite
- Tailwind CSS

Hosting

- Vercel

Responsibilities

- User Interface
- PWA Installation
- Offline Support
- API Communication

---

## Backend

Technology

- Node.js
- Express.js

Hosting

- Render

Responsibilities

- Business Logic
- Authentication
- Analytics
- AI Integration

---

## Database

Technology

MongoDB Atlas

Responsibilities

- Store User Data
- Habit Data
- Goal Data
- Analytics
- Notifications

---

## AI Service

Technology

Gemini API

Responsibilities

- Productivity Analysis
- Daily Review
- Weekly Suggestions
- Goal Recommendations

---

# 17. Environment Configuration

Sensitive information is stored using environment variables.

Example

```
PORT=5000

MONGODB_URI=

JWT_SECRET=

GEMINI_API_KEY=

CLIENT_URL=
```

The `.env` file is excluded from Git version control using `.gitignore`.

---

# 18. CI/CD Pipeline

## Continuous Integration

Every code push triggers:

- Source Code Validation
- Build Process
- Dependency Installation
- Automated Tests

---

## Continuous Deployment

After successful validation:

```
GitHub

↓

GitHub Actions

↓

Build Project

↓

Deploy Frontend

↓

Deploy Backend

↓

Production Ready
```

Future integrations

- Docker
- Kubernetes
- Terraform

---

# 19. Performance Optimization

## Frontend Optimization

- Code Splitting
- Lazy Loading
- Tree Shaking
- Image Optimization
- Responsive Images
- Memoization

---

## Backend Optimization

- Async Processing
- Efficient Database Queries
- Pagination
- API Caching (Future)
- Compression Middleware

---

## Database Optimization

- Proper Indexing
- Aggregation Pipelines
- Optimized Queries
- Connection Pooling

---

# 20. Monitoring Strategy

The application should continuously monitor system health.

Metrics

- CPU Usage
- Memory Usage
- Response Time
- Error Rate
- API Latency
- Database Performance

Future Tools

- Grafana
- Prometheus
- MongoDB Atlas Monitoring

---

# 21. Logging Strategy

The backend logs:

- Server Startup
- User Login
- Failed Login
- API Requests
- API Errors
- Database Errors
- AI Response Time

Future Logging Stack

- Winston
- Morgan
- Sentry

---

# 22. Scalability Strategy

The architecture is designed to support future growth.

Future Improvements

- Horizontal Scaling
- Load Balancer
- Docker Containers
- Kubernetes Cluster
- Redis Cache
- Background Workers
- Queue System
- CDN Support

---

# 23. Disaster Recovery

Recovery Plan

- Automatic Database Backup
- Daily Backup Verification
- Source Code on GitHub
- Environment Variable Backup

Recovery Goals

- Minimal Downtime
- Fast Recovery
- No Data Loss

---

# 24. Security Architecture

Security Layers

```
User

↓

HTTPS

↓

JWT Authentication

↓

Authorization Middleware

↓

Validation Middleware

↓

Business Logic

↓

MongoDB
```

Security Features

- JWT Authentication
- bcrypt Password Hashing
- HTTPS
- CORS
- Input Validation
- Protected Routes
- Secure Environment Variables

---

# 25. Architecture Summary

The LifeTrack AI architecture follows a modern cloud-native software architecture based on:

- Three-Tier Architecture
- RESTful API Design
- Component-Based Frontend
- Layered Backend
- Secure Authentication
- MongoDB NoSQL Database
- AI Integration
- Progressive Web Application (PWA)
- Cloud Deployment
- Future Scalability

This architecture provides a strong foundation for building a secure, scalable, maintainable, and production-ready application.

---

# Revision History

| Version | Date | Author | Description |
|----------|------|--------|-------------|
| 1.0 | July 2026 | Vivek Kumar | Initial Architecture Document |

---

# End of Part 5