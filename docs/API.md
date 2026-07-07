# 🌐 API Documentation

## Project

**LifeTrack AI – AI-Powered Productivity & Habit Analytics Platform**

---

## Document Information

| Field | Details |
|--------|---------|
| Document | API Documentation |
| Version | 1.0 |
| Status | Draft |
| Author | Vivek Kumar |
| API Style | REST API |
| Data Format | JSON |
| Authentication | JWT Bearer Token |
| Base URL | http://localhost:5000/api |
| Last Updated | July 2026 |

---

# Table of Contents

1. Introduction
2. API Design Principles
3. Base URL
4. Authentication
5. Request Format
6. Response Format
7. HTTP Status Codes
8. Authentication APIs
9. Habit APIs
10. Goal APIs
11. Analytics APIs
12. AI APIs
13. Notification APIs
14. Future APIs

---

# 1. Introduction

The LifeTrack AI backend exposes RESTful APIs that allow the frontend Progressive Web Application (PWA) to communicate with the server.

The APIs are responsible for:

- User Authentication
- Habit Management
- Goal Tracking
- Analytics
- AI Suggestions
- Notifications
- User Profile Management

Every API follows consistent request and response structures.

---

# 2. API Design Principles

The API follows industry-standard REST architecture.

### Principles

- RESTful Design
- Stateless Communication
- JSON Request/Response
- Secure Authentication
- Predictable Endpoints
- Proper HTTP Methods
- Consistent Error Responses
- Version Ready

---

# 3. Base URL

Development

```
http://localhost:5000/api
```

Production

```
https://api.lifetrackai.com/api
```

---

# 4. Authentication

LifeTrack AI uses **JWT (JSON Web Token)** authentication.

After successful login, the backend returns a JWT token.

Example

```json
{
    "token":"JWT_TOKEN"
}
```

Every protected request must include:

```
Authorization: Bearer JWT_TOKEN
```

---

# 5. Request Format

Example

```http
POST /api/auth/login
Content-Type: application/json
```

Request Body

```json
{
    "email":"vivek@gmail.com",
    "password":"password123"
}
```

---

# 6. Standard Response Format

Success Response

```json
{
    "success": true,
    "message": "Operation Successful",
    "data": {}
}
```

---

Error Response

```json
{
    "success": false,
    "message": "Invalid Credentials"
}
```

---

# 7. HTTP Status Codes

| Code | Meaning |
|------|----------|
|200|Success|
|201|Created|
|204|No Content|
|400|Bad Request|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|
|409|Conflict|
|422|Validation Error|
|500|Internal Server Error|

---

# 8. Authentication APIs

## Register User

### Endpoint

```
POST /api/auth/register
```

Purpose

Create a new user account.

Authentication

Not Required

Request

```json
{
    "name":"Vivek Kumar",
    "email":"vivek@gmail.com",
    "password":"password123"
}
```

Success Response

```json
{
    "success": true,
    "message": "Registration Successful"
}
```

Possible Errors

- Email already exists
- Invalid email
- Weak password

---

## Login

Endpoint

```
POST /api/auth/login
```

Authentication

Not Required

Request

```json
{
    "email":"vivek@gmail.com",
    "password":"password123"
}
```

Success Response

```json
{
    "success": true,
    "token":"JWT_TOKEN"
}
```

---

## Get User Profile

Endpoint

```
GET /api/auth/profile
```

Authentication

Required

Header

```
Authorization: Bearer TOKEN
```

Success Response

```json
{
    "success": true,
    "data": {
        "name":"Vivek Kumar",
        "email":"vivek@gmail.com"
    }
}
```

---

## Logout

```
POST /api/auth/logout
```

Purpose

Logout current user.

Authentication

Required

---

# End of Part 1

Next Part

Habit APIs

Goal APIs

Analytics APIs

AI APIs

Notification APIs

Error Handling

API Versioning

---

# 9. Habit Management APIs

The Habit Module is responsible for creating, updating, deleting, retrieving, and tracking user habits.

All Habit APIs require authentication.

---

## 9.1 Create Habit

### Endpoint

```http
POST /api/habits
```

### Authentication

Required

```http
Authorization: Bearer JWT_TOKEN
```

### Description

Creates a new habit for the authenticated user.

---

### Request Body

```json
{
  "title": "Morning Workout",
  "description": "Complete a 45-minute workout",
  "category": "Fitness",
  "icon": "💪",
  "color": "#22C55E",
  "frequency": "Daily",
  "target": 1,
  "priority": "High",
  "reminderTime": "06:00"
}
```

---

### Success Response

```json
{
  "success": true,
  "message": "Habit created successfully",
  "data": {
    "_id": "HABIT_ID"
  }
}
```

---

### Possible Errors

- Invalid Token
- Missing Required Fields
- Validation Failed

---

## 9.2 Get All Habits

### Endpoint

```http
GET /api/habits
```

Authentication

Required

Description

Returns all habits created by the authenticated user.

---

### Success Response

```json
{
  "success": true,
  "data": [
    {
      "_id": "1",
      "title": "Morning Workout",
      "category": "Fitness"
    }
  ]
}
```

---

## 9.3 Get Single Habit

### Endpoint

```http
GET /api/habits/:habitId
```

Description

Returns complete information for one habit.

Authentication

Required

---

## 9.4 Update Habit

### Endpoint

```http
PUT /api/habits/:habitId
```

Authentication

Required

Description

Updates habit information.

---

### Example Request

```json
{
  "title":"Morning Workout",
  "priority":"Medium",
  "target":2
}
```

---

### Success Response

```json
{
  "success": true,
  "message":"Habit updated successfully"
}
```

---

## 9.5 Delete Habit

### Endpoint

```http
DELETE /api/habits/:habitId
```

Authentication

Required

Description

Deletes a habit permanently.

---

### Success Response

```json
{
  "success": true,
  "message":"Habit deleted successfully"
}
```

---

## 9.6 Complete Habit

### Endpoint

```http
POST /api/habits/:habitId/complete
```

Description

Marks today's habit as completed.

---

### Success Response

```json
{
  "success": true,
  "message":"Habit completed"
}
```

---

## 9.7 Habit History

### Endpoint

```http
GET /api/habits/:habitId/history
```

Returns

- Daily History
- Completion Percentage
- Streak
- Missed Days

---

# 10. Goal APIs

The Goal Module helps users define long-term objectives and monitor progress.

---

## 10.1 Create Goal

### Endpoint

```http
POST /api/goals
```

Authentication

Required

---

### Request

```json
{
  "title":"Complete MERN Stack",
  "description":"Become Full Stack Developer",
  "deadline":"2026-12-31"
}
```

---

### Success Response

```json
{
  "success": true,
  "message":"Goal created successfully"
}
```

---

## 10.2 Get All Goals

### Endpoint

```http
GET /api/goals
```

Authentication

Required

Description

Returns all user goals.

---

## 10.3 Update Goal

### Endpoint

```http
PUT /api/goals/:goalId
```

Description

Updates goal details.

---

## 10.4 Delete Goal

### Endpoint

```http
DELETE /api/goals/:goalId
```

Description

Deletes a goal permanently.

---

## 10.5 Update Goal Progress

### Endpoint

```http
PATCH /api/goals/:goalId/progress
```

Request

```json
{
  "progress":75
}
```

---

### Success Response

```json
{
  "success": true,
  "message":"Progress updated successfully"
}
```

---

## Goal Status Values

- Pending
- In Progress
- Completed
- Archived

---

# End of Part 2

Next Part

- Analytics APIs
- AI Coach APIs
- Notification APIs
- User Profile APIs
---

# 11. Analytics APIs

The Analytics Module provides productivity insights by analyzing the user's habit completion history.

These APIs generate daily, weekly, monthly, and yearly reports.

All Analytics APIs require authentication.

---

## 11.1 Daily Analytics

### Endpoint

```http
GET /api/analytics/daily
```

### Authentication

Required

### Description

Returns today's productivity report.

---

### Success Response

```json
{
  "success": true,
  "data": {
    "completedHabits": 8,
    "totalHabits": 10,
    "productivityScore": 80,
    "streak": 15
  }
}
```

---

## 11.2 Weekly Analytics

### Endpoint

```http
GET /api/analytics/weekly
```

### Description

Returns weekly productivity summary.

---

### Response

```json
{
  "success": true,
  "data": {
    "averageScore": 84,
    "completedHabits": 52,
    "missedHabits": 11
  }
}
```

---

## 11.3 Monthly Analytics

### Endpoint

```http
GET /api/analytics/monthly
```

Returns

- Monthly Progress
- Completion Percentage
- Best Day
- Worst Day
- Longest Streak

---

## 11.4 Yearly Analytics

### Endpoint

```http
GET /api/analytics/yearly
```

Returns

- Total Habits Completed
- Productivity Trend
- Average Score
- Yearly Heatmap
- Achievement Summary

---

## 11.5 Life Score

### Endpoint

```http
GET /api/analytics/life-score
```

Description

Calculates an overall productivity score based on:

- Fitness
- Study
- Coding
- Reading
- Sleep
- Health

---

Example Response

```json
{
  "success": true,
  "lifeScore": 88
}
```

---

# 12. AI Coach APIs

LifeTrack AI integrates Gemini AI to provide intelligent recommendations.

---

## 12.1 Daily Review

### Endpoint

```http
POST /api/ai/daily-review
```

Description

Generates today's AI productivity review.

---

### Response

```json
{
  "success": true,
  "message":"Great job today! Try sleeping earlier to improve tomorrow's productivity."
}
```

---

## 12.2 Weekly Review

### Endpoint

```http
POST /api/ai/weekly-review
```

Returns

- Weekly Summary
- Strengths
- Weaknesses
- Suggestions

---

## 12.3 Monthly Review

### Endpoint

```http
POST /api/ai/monthly-review
```

Description

Generates a complete monthly performance report.

---

## 12.4 Ask AI

### Endpoint

```http
POST /api/ai/chat
```

Example Request

```json
{
  "question":"How can I improve my reading habit?"
}
```

---

Example Response

```json
{
  "success":true,
  "answer":"Try reading immediately after waking up. Morning habits usually have a higher completion rate."
}
```

---

## 12.5 Habit Suggestions

### Endpoint

```http
GET /api/ai/suggestions
```

Returns

- Habit Recommendations
- Improvement Tips
- Smart Advice

---

# 13. Notification APIs

Notifications remind users to stay consistent.

---

## 13.1 Get Notifications

```http
GET /api/notifications
```

---

## 13.2 Create Notification

```http
POST /api/notifications
```

---

## 13.3 Update Notification

```http
PUT /api/notifications/:notificationId
```

---

## 13.4 Delete Notification

```http
DELETE /api/notifications/:notificationId
```

---

## 13.5 Mark Notification as Read

```http
PATCH /api/notifications/:notificationId/read
```

---

# 14. User Profile APIs

---

## Get Profile

```http
GET /api/users/profile
```

---

## Update Profile

```http
PUT /api/users/profile
```

---

Example Request

```json
{
  "name":"Vivek Kumar",
  "avatar":"profile.png",
  "theme":"dark"
}
```

---

## Change Password

```http
PUT /api/users/change-password
```

---

## Delete Account

```http
DELETE /api/users/delete-account
```

---

### Security

Requires password confirmation before deletion.

---

# End of Part 3

Next Part

- Error Handling
- Validation Rules
- API Versioning
- Rate Limiting
- Best Practices
- Future APIs
- Conclusion

---

# 15. API Validation Rules

All incoming requests are validated before processing to ensure data integrity and security.

---

## User Validation

| Field | Validation Rule |
|--------|-----------------|
| Name | Required, Minimum 3 Characters |
| Email | Required, Valid Email Format |
| Password | Minimum 8 Characters |
| Confirm Password | Must Match Password |

---

## Habit Validation

| Field | Validation Rule |
|--------|-----------------|
| Title | Required |
| Category | Required |
| Frequency | Daily, Weekly, Monthly |
| Target | Must be Positive |
| Priority | Low, Medium, High |

---

## Goal Validation

| Field | Validation Rule |
|--------|-----------------|
| Title | Required |
| Deadline | Future Date |
| Progress | Between 0–100 |

---

## Profile Validation

- Email must be unique.
- Avatar must be an image URL.
- Theme must be Light or Dark.

---

# 16. Error Handling

Every API returns meaningful error messages.

Example

```json
{
    "success": false,
    "message": "Habit not found"
}
```

---

## Common Errors

| HTTP Code | Description |
|-----------|-------------|
|400|Bad Request|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|
|409|Conflict|
|422|Validation Failed|
|500|Internal Server Error|

---

# 17. Rate Limiting

To protect the server from abuse, rate limiting will be applied.

Examples

- Login API → 5 requests/minute
- AI APIs → 20 requests/hour
- Analytics APIs → 100 requests/hour

Future implementation

- Express Rate Limit

---

# 18. API Security

Security Features

- JWT Authentication
- Password Hashing using bcrypt
- HTTPS Communication
- Input Validation
- Authorization Middleware
- Protected Routes
- Environment Variables
- CORS Protection

---

# 19. API Versioning

Current Version

```
v1
```

Example

```
/api/v1/auth/login

/api/v1/habits

/api/v1/analytics
```

Future versions

```
v2

v3
```

This ensures backward compatibility when introducing new features.

---

# 20. Future APIs

The following APIs are planned for future releases.

## Friends Module

```
POST /api/friends/add

GET /api/friends

DELETE /api/friends/:id
```

---

## Leaderboard

```
GET /api/leaderboard
```

---

## Journal

```
POST /api/journal

GET /api/journal
```

---

## Mood Tracker

```
POST /api/mood

GET /api/mood
```

---

## Water Tracker

```
POST /api/water

GET /api/water
```

---

## Sleep Tracker

```
POST /api/sleep

GET /api/sleep
```

---

## Focus Timer

```
POST /api/focus/start

POST /api/focus/end
```

---

## Backup

```
GET /api/export/pdf

GET /api/export/csv
```

---

# 21. Best Practices

The backend follows industry best practices.

- RESTful API Design
- Stateless Requests
- JSON Communication
- Secure Authentication
- Proper Status Codes
- Consistent Response Format
- Centralized Error Handling
- Modular Folder Structure
- Clean Code Principles

---

# 22. API Documentation Standards

All APIs include:

- Purpose
- Endpoint
- HTTP Method
- Authentication Requirement
- Request Body
- Success Response
- Error Response
- Validation Rules

This makes the APIs easy to understand and maintain.

---

# 23. Conclusion

The LifeTrack AI API is designed to provide a secure, scalable, and maintainable backend for the application.

Key Highlights

- RESTful Architecture
- JWT Authentication
- AI Integration
- Habit Management
- Analytics Engine
- Notification System
- Future-Ready Design

The API design ensures seamless communication between the frontend, backend, database, and AI services while maintaining security, consistency, and high performance.

---

# Revision History

| Version | Date | Author | Description |
|----------|------|--------|-------------|
|1.0|July 2026|Vivek Kumar|Initial API Documentation|

---

# End of API Documentation