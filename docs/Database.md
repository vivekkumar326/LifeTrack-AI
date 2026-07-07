# 🗄 Database Design Document

## Project

LifeTrack AI

Version 1.0

Author

Vivek Kumar

Last Updated

July 2026

# 1. Introduction

This document describes the complete database architecture of the LifeTrack AI platform.

The primary objective of this document is to define the database schema, collections, relationships, validation rules, indexing strategy, and future scalability of the application.

The database is designed to support a scalable, secure, and high-performance productivity platform capable of handling thousands of users while maintaining efficient query performance.

The design follows MongoDB best practices and focuses on flexibility, maintainability, and long-term scalability.

# 2. Database Selection

LifeTrack AI uses MongoDB Atlas as the primary database.

Reasons:

- Flexible Schema
- High Performance
- JSON Document Storage
- Easy Scaling
- Cloud Hosted
- Excellent Node.js Support
- Aggregation Framework
- Fast Development

MongoDB allows the application to evolve without requiring frequent schema migrations, making it ideal for rapidly growing products.

# 3. Database Overview

Database Name

lifetrack_ai

Collections

• Users

• Habits

• HabitLogs

• Goals

• Notifications

• AIReports

• Achievements

Future Collections

• Journals

• MoodTracker

• Expenses

• Friends

• Leaderboard

• WaterLogs

• SleepLogs

# 4. Database Architecture

```
User

│

├──── Habits

│        │

│        ├──── HabitLogs

│

├──── Goals

│

├──── AI Reports

│

├──── Notifications

│

└──── Achievements
```
# 5. Users Collection

Purpose

Stores user profile information.

Collection Name

users

Fields

| Field | Type | Required | Description |
|------|------|----------|-------------|
| _id | ObjectId | Yes | Primary Key |
| name | String | Yes | User Name |
| email | String | Yes | Unique Email |
| password | String | Yes | Encrypted Password |
| avatar | String | No | Profile Image |
| theme | String | Yes | Dark / Light |
| timezone | String | Yes | User Timezone |
| createdAt | Date | Yes | Account Created |
| updatedAt | Date | Yes | Last Updated |

Indexes

email

Unique

Validation

• Email must be unique

• Password minimum 8 characters

• Name minimum 3 characters

Example Document

```json
{
  "name":"Vivek Kumar",
  "email":"vivek@gmail.com",
  "theme":"dark"
}
```

Relationships

One User

↓

Many Habits

Many Goals

Many Reports