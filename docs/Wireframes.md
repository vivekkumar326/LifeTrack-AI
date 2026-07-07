# 🎨 Wireframes Document

## Project

**LifeTrack AI – AI-Powered Productivity & Habit Analytics Platform**

---

# Document Information

| Field | Details |
|--------|---------|
| Document | UI Wireframes |
| Version | 1.0 |
| Status | Draft |
| Author | Vivek Kumar |
| Platform | Progressive Web App (PWA) |
| Last Updated | July 2026 |

---

# Table of Contents

1. Design Goals
2. UI Guidelines
3. Navigation
4. Splash Screen
5. Login Screen
6. Register Screen
7. Dashboard
8. Habit Screen
9. Calendar
10. Analytics
11. AI Coach
12. Profile
13. Settings

---

# 1. Design Goals

The interface is designed with the following principles:

- Clean
- Modern
- Minimal
- Responsive
- Easy Navigation
- Fast User Interaction
- Mobile First
- Accessibility Friendly

The user should be able to complete common actions in fewer than three interactions whenever possible.

---

# 2. UI Guidelines

Theme

- Light Theme
- Dark Theme

Typography

- Headings
- Sub Headings
- Body Text
- Captions

Spacing

- 8px Grid System

Corner Radius

- Large Rounded Cards

Icons

- Lucide React Icons

Animations

- Framer Motion

---

# 3. Navigation Structure

```

Splash

↓

Login

↓

Dashboard

├── Habits

├── Calendar

├── Analytics

├── AI Coach

├── Profile

└── Settings

```

Bottom Navigation (Mobile)

```

Home

Habits

Analytics

AI

Profile

```

---

# 4. Splash Screen

Purpose

Display application branding while loading resources.

Wireframe

```

+--------------------------------------+

|                                      |

|                                      |

|            🚀 LifeTrack AI           |

|                                      |

|     Build Better Habits Everyday     |

|                                      |

|             Loading...               |

|                                      |

+--------------------------------------+

```

Components

- Logo
- App Name
- Tagline
- Loading Indicator

---

# 5. Login Screen

Wireframe

```

+--------------------------------------+

|            Welcome Back              |

|                                      |

|        Email Address                 |

|  [________________________]          |

|                                      |

|        Password                      |

|  [________________________]          |

|                                      |

|     ( Login Button )                 |

|                                      |

| Forgot Password?                     |

|                                      |

| Don't have an account? Register      |

+--------------------------------------+

```

Components

- Email Field
- Password Field
- Login Button
- Forgot Password
- Register Link

Validation

- Required Fields
- Valid Email
- Password Length

---

# 6. Register Screen

Wireframe

```

+--------------------------------------+

|         Create Account               |

|                                      |

| Name                                |

| [____________________]               |

|                                      |

| Email                               |

| [____________________]               |

|                                      |

| Password                            |

| [____________________]               |

|                                      |

| Confirm Password                    |

| [____________________]               |

|                                      |

| ( Register Button )                 |

+--------------------------------------+

```

Components

- Name
- Email
- Password
- Confirm Password
- Register Button

Validation

- Email Format
- Password Strength
- Password Match

---

# End of Part 1

Next Part

Dashboard

Habit Screen

Calendar

Analytics

---

# 7. Dashboard Screen

## Purpose

The Dashboard is the central screen of the application. It provides a quick overview of the user's daily productivity, habits, streaks, goals, AI insights, and progress.

The dashboard should display the most important information without requiring the user to navigate to multiple pages.

---

## Dashboard Layout

```
+------------------------------------------------------------+
| ☰ LifeTrack AI                            🔔    👤         |
+------------------------------------------------------------+

 Good Morning, Vivek 👋

 Keep your streak alive today!

+----------------------+----------------------+--------------+
| 🔥 Current Streak    | ⭐ Life Score        | 🎯 Today's   |
| 26 Days              | 84/100              | Goal 6/8     |
+----------------------+----------------------+--------------+

Today's Habits

☐ Wake Up at 6 AM

☑ Gym

☑ Reading

☐ Coding Practice

☐ Project Work

☑ Drink Water

☐ Meditation

----------------------------------------------

Today's Progress

██████████░░░░░░░░

60%

----------------------------------------------

AI Coach

💡

"You completed Reading and Gym yesterday.

Try completing Coding before 7 PM."

----------------------------------------------

Upcoming Goals

✔ Finish API Documentation

✔ Complete React Setup

----------------------------------------------

Bottom Navigation

🏠 Home

✅ Habits

📅 Calendar

📊 Analytics

🤖 AI

👤 Profile
```

---

## Dashboard Components

### Header

- Logo
- Notification
- Profile Avatar

---

### Welcome Section

Displays

- User Name
- Greeting
- Daily Motivation

---

### Statistics Cards

Displays

- Current Streak
- Life Score
- Today's Goal

---

### Today's Habits

Displays

- Habit Name
- Category
- Completion Checkbox
- Progress

---

### AI Coach Card

Displays

- Daily Suggestion
- Motivation
- Productivity Tip

---

### Bottom Navigation

- Home
- Habits
- Calendar
- Analytics
- AI
- Profile

---

# 8. Habit Management Screen

## Purpose

Allows users to create, update, delete, organize, and complete habits.

---

## Wireframe

```
+--------------------------------------------------+

← Habits

----------------------------------------------------

+ Add New Habit

----------------------------------------------------

Today's Habits

☐ Wake Up

☑ Gym

☑ Reading

☐ Coding

☐ Meditation

☑ Drink Water

☐ Project

----------------------------------------------------

Categories

Fitness

Study

Health

Coding

Reading

Custom

----------------------------------------------------

Completed Today

5 / 7

----------------------------------------------------

Completion Rate

71%

+--------------------------------------------------+
```

---

## Components

- Search Habit
- Category Filter
- Habit List
- Add Habit Button
- Edit Habit
- Delete Habit
- Habit Completion Checkbox

---

## User Actions

- Create Habit
- Edit Habit
- Delete Habit
- Complete Habit
- Filter Habits

---

# 9. Calendar Screen

## Purpose

Displays long-term consistency and completion history.

---

## Wireframe

```
+--------------------------------------------------+

← Calendar

----------------------------------------------------

July 2026

Mo Tu We Th Fr Sa Su

🟩 🟩 🟨 🟥 🟩 🟩 🟩

🟩 🟩 🟩 🟩 🟨 🟩 🟩

🟩 🟥 🟩 🟩 🟩 🟩 🟩

🟨 🟩 🟩 🟩 🟩 🟨 🟩

----------------------------------------------------

Selected Date

10 July

Completed

✔ Gym

✔ Reading

✔ Water

❌ Coding

❌ Meditation

----------------------------------------------------

Completion

60%

+--------------------------------------------------+
```

---

## Calendar Legend

🟩 Excellent

🟨 Partial

🟥 Missed

---

## Features

- Monthly View
- Daily History
- Completion Details
- Heatmap
- Habit Timeline

---

# 10. Analytics Screen

## Purpose

Provides visual insights into user productivity using charts and statistics.

---

## Wireframe

```
+--------------------------------------------------+

← Analytics

----------------------------------------------------

Life Score

88%

█████████████████

----------------------------------------------------

Daily

Weekly

Monthly

Yearly

----------------------------------------------------

Bar Graph

█████

██████████

████████████

██████

----------------------------------------------------

Pie Chart

Fitness 30%

Study 40%

Health 20%

Other 10%

----------------------------------------------------

Longest Streak

26 Days

----------------------------------------------------

Completion Rate

87%

----------------------------------------------------

Best Habit

Reading

Worst Habit

Meditation

+--------------------------------------------------+
```

---

## Charts

- Line Chart
- Bar Chart
- Pie Chart
- Progress Ring
- Heatmap

---

## Metrics

- Life Score
- Weekly Progress
- Monthly Progress
- Completion Rate
- Streak
- Best Habit
- Worst Habit
- Category Distribution

---

# End of Part 2

Next Part

- AI Coach Screen
- Profile Screen
- Settings Screen
- Notifications
- Empty States
- Error Screens
---

# 7. Dashboard Screen

## Purpose

The Dashboard is the central screen of the application. It provides a quick overview of the user's daily productivity, habits, streaks, goals, AI insights, and progress.

The dashboard should display the most important information without requiring the user to navigate to multiple pages.

---

## Dashboard Layout

```
+------------------------------------------------------------+
| ☰ LifeTrack AI                            🔔    👤         |
+------------------------------------------------------------+

 Good Morning, Vivek 👋

 Keep your streak alive today!

+----------------------+----------------------+--------------+
| 🔥 Current Streak    | ⭐ Life Score        | 🎯 Today's   |
| 26 Days              | 84/100              | Goal 6/8     |
+----------------------+----------------------+--------------+

Today's Habits

☐ Wake Up at 6 AM

☑ Gym

☑ Reading

☐ Coding Practice

☐ Project Work

☑ Drink Water

☐ Meditation

----------------------------------------------

Today's Progress

██████████░░░░░░░░

60%

----------------------------------------------

AI Coach

💡

"You completed Reading and Gym yesterday.

Try completing Coding before 7 PM."

----------------------------------------------

Upcoming Goals

✔ Finish API Documentation

✔ Complete React Setup

----------------------------------------------

Bottom Navigation

🏠 Home

✅ Habits

📅 Calendar

📊 Analytics

🤖 AI

👤 Profile
```

---

## Dashboard Components

### Header

- Logo
- Notification
- Profile Avatar

---

### Welcome Section

Displays

- User Name
- Greeting
- Daily Motivation

---

### Statistics Cards

Displays

- Current Streak
- Life Score
- Today's Goal

---

### Today's Habits

Displays

- Habit Name
- Category
- Completion Checkbox
- Progress

---

### AI Coach Card

Displays

- Daily Suggestion
- Motivation
- Productivity Tip

---

### Bottom Navigation

- Home
- Habits
- Calendar
- Analytics
- AI
- Profile

---

# 8. Habit Management Screen

## Purpose

Allows users to create, update, delete, organize, and complete habits.

---

## Wireframe

```
+--------------------------------------------------+

← Habits

----------------------------------------------------

+ Add New Habit

----------------------------------------------------

Today's Habits

☐ Wake Up

☑ Gym

☑ Reading

☐ Coding

☐ Meditation

☑ Drink Water

☐ Project

----------------------------------------------------

Categories

Fitness

Study

Health

Coding

Reading

Custom

----------------------------------------------------

Completed Today

5 / 7

----------------------------------------------------

Completion Rate

71%

+--------------------------------------------------+
```

---

## Components

- Search Habit
- Category Filter
- Habit List
- Add Habit Button
- Edit Habit
- Delete Habit
- Habit Completion Checkbox

---

## User Actions

- Create Habit
- Edit Habit
- Delete Habit
- Complete Habit
- Filter Habits

---

# 9. Calendar Screen

## Purpose

Displays long-term consistency and completion history.

---

## Wireframe

```
+--------------------------------------------------+

← Calendar

----------------------------------------------------

July 2026

Mo Tu We Th Fr Sa Su

🟩 🟩 🟨 🟥 🟩 🟩 🟩

🟩 🟩 🟩 🟩 🟨 🟩 🟩

🟩 🟥 🟩 🟩 🟩 🟩 🟩

🟨 🟩 🟩 🟩 🟩 🟨 🟩

----------------------------------------------------

Selected Date

10 July

Completed

✔ Gym

✔ Reading

✔ Water

❌ Coding

❌ Meditation

----------------------------------------------------

Completion

60%

+--------------------------------------------------+
```

---

## Calendar Legend

🟩 Excellent

🟨 Partial

🟥 Missed

---

## Features

- Monthly View
- Daily History
- Completion Details
- Heatmap
- Habit Timeline

---

# 10. Analytics Screen

## Purpose

Provides visual insights into user productivity using charts and statistics.

---

## Wireframe

```
+--------------------------------------------------+

← Analytics

----------------------------------------------------

Life Score

88%

█████████████████

----------------------------------------------------

Daily

Weekly

Monthly

Yearly

----------------------------------------------------

Bar Graph

█████

██████████

████████████

██████

----------------------------------------------------

Pie Chart

Fitness 30%

Study 40%

Health 20%

Other 10%

----------------------------------------------------

Longest Streak

26 Days

----------------------------------------------------

Completion Rate

87%

----------------------------------------------------

Best Habit

Reading

Worst Habit

Meditation

+--------------------------------------------------+
```

---

## Charts

- Line Chart
- Bar Chart
- Pie Chart
- Progress Ring
- Heatmap

---

## Metrics

- Life Score
- Weekly Progress
- Monthly Progress
- Completion Rate
- Streak
- Best Habit
- Worst Habit
- Category Distribution

---

# End of Part 2

Next Part

- AI Coach Screen
- Profile Screen
- Settings Screen
- Notifications
- Empty States
- Error Screens
---

# 11. AI Coach Screen

## Purpose

The AI Coach is one of the core features of LifeTrack AI. It analyzes user activity and provides personalized suggestions, motivation, and productivity insights.

Unlike a simple chatbot, the AI Coach acts as a personal productivity mentor based on the user's real progress.

---

## AI Coach Layout

```
+----------------------------------------------------------+

← AI Coach

------------------------------------------------------------

🤖 Good Morning Vivek!

Today's Productivity Score

88 / 100

⭐⭐⭐⭐☆

------------------------------------------------------------

Today's Review

✔ Gym Completed

✔ Reading Completed

❌ Coding Missed

✔ Water Goal Achieved

------------------------------------------------------------

AI Suggestions

• Complete Coding before 8 PM

• Sleep before 11 PM

• Read at least 20 pages

• Reduce Instagram usage

------------------------------------------------------------

Weekly Insights

Best Habit

📚 Reading

Needs Improvement

💻 Coding

------------------------------------------------------------

Motivational Quote

"Small consistent actions create extraordinary results."

------------------------------------------------------------

Ask AI

[___________________________________]

            ( Ask )

+----------------------------------------------------------+
```

---

## Components

- Productivity Score
- Daily Review Card
- AI Suggestions
- Weekly Insights
- Motivation Card
- AI Chat Input

---

## Features

- Daily Summary
- Weekly Review
- Monthly Report
- AI Chat
- Personalized Suggestions
- Motivation
- Habit Improvement Plan

---

# 12. Profile Screen

## Purpose

Displays personal information, achievements, and overall statistics.

---

## Profile Layout

```
+------------------------------------------------+

← Profile

--------------------------------------------------

👤

Vivek Kumar

Level 14

XP 3,480

--------------------------------------------------

Statistics

Current Streak

26 Days

Total Habits

31

Completed Habits

486

Life Score

84

--------------------------------------------------

Achievements

🏆 First Habit

🔥 30 Day Streak

📚 Reading Master

💻 Coding Warrior

--------------------------------------------------

Edit Profile

Logout

+------------------------------------------------+
```

---

## Components

- Avatar
- Username
- XP
- Level
- Statistics
- Achievements
- Edit Button
- Logout Button

---

# 13. Settings Screen

## Purpose

Allows users to customize application preferences.

---

## Settings Layout

```
+------------------------------------------------+

← Settings

--------------------------------------------------

Appearance

🌙 Dark Mode

☀ Light Mode

--------------------------------------------------

Notifications

Morning Reminder

Evening Reminder

Weekly Review

--------------------------------------------------

Security

Change Password

Two-Factor Authentication (Future)

--------------------------------------------------

Data

Export Data

Backup

Restore

--------------------------------------------------

About

Privacy Policy

Terms

App Version

--------------------------------------------------

Logout

+------------------------------------------------+
```

---

## Components

- Theme Switch
- Notification Toggle
- Account Settings
- Backup & Restore
- About Section

---

# 14. Notification Center

## Purpose

Displays reminders and important application events.

---

## Layout

```
+------------------------------------------------+

← Notifications

--------------------------------------------------

🔔 Morning Reminder

Complete your first habit today.

--------------------------------------------------

🎯 Goal Deadline

Complete MERN Stack Roadmap

2 Days Left

--------------------------------------------------

🤖 AI Coach

You have improved 12% this week.

--------------------------------------------------

🔥 Streak Alert

Don't miss today's habits!

--------------------------------------------------

+------------------------------------------------+
```

---

## Features

- Mark as Read
- Delete Notification
- Filter by Type
- Search Notifications

---

# 15. Empty States

When there is no available data, the application should display meaningful empty-state screens.

---

## No Habits

```
No Habits Found

+

Create Your First Habit
```

---

## No Goals

```
No Goals Available

Start Your First Goal
```

---

## No Notifications

```
You're All Caught Up 🎉

No Notifications
```

---

## No Analytics

```
Complete More Habits

to Unlock Analytics
```

---

# 16. Error States

The application should gracefully handle errors.

---

## Internet Error

```
⚠ No Internet Connection

Retry
```

---

## Server Error

```
500

Something Went Wrong

Try Again
```

---

## Unauthorized

```
Session Expired

Please Login Again
```

---

## Page Not Found

```
404

Oops!

Page Not Found

Go Back Home
```

---

# 17. Loading States

The application should provide feedback while data is loading.

Examples

- Skeleton Cards
- Loading Spinner
- Progress Indicator
- Animated Placeholder

---

# 18. Accessibility Guidelines

The interface should support accessibility best practices.

- Keyboard Navigation
- Screen Reader Labels
- High Contrast Support
- Focus Indicators
- Minimum Touch Target Size (44×44 px)
- Semantic HTML
- Accessible Form Labels

---

# End of Part 3

Next Part

- Design System
- Color Palette
- Typography
- Spacing Rules
- Component Library
- Icons
- Animations
- Final UI Guidelines
---

# 19. Design System

## Overview

The LifeTrack AI interface follows a consistent design system to ensure a modern, clean, and accessible user experience.

Every screen, component, spacing rule, typography style, and color palette follows a unified standard.

This improves maintainability and provides visual consistency across the application.

---

# 20. Color Palette

## Primary Colors

| Purpose | Color |
|----------|--------|
| Primary | #4F46E5 |
| Secondary | #6366F1 |
| Accent | #8B5CF6 |

---

## Status Colors

| Status | Color |
|---------|--------|
| Success | #22C55E |
| Warning | #F59E0B |
| Danger | #EF4444 |
| Info | #3B82F6 |

---

## Background Colors

| Type | Color |
|------|--------|
| Dark | #0F172A |
| Light | #F8FAFC |
| Card | #1E293B |
| Border | #CBD5E1 |

---

## Text Colors

| Type | Color |
|------|--------|
| Primary | #FFFFFF |
| Secondary | #94A3B8 |
| Disabled | #64748B |

---

# 21. Typography

## Font Family

```
Inter
```

Fallback

```
system-ui
```

---

## Font Sizes

| Element | Size |
|----------|------|
| H1 | 36px |
| H2 | 30px |
| H3 | 24px |
| H4 | 20px |
| Body | 16px |
| Caption | 14px |
| Small | 12px |

---

## Font Weight

| Type | Weight |
|------|---------|
| Regular | 400 |
| Medium | 500 |
| SemiBold | 600 |
| Bold | 700 |

---

# 22. Spacing System

The UI follows an **8px Grid System**.

Spacing Scale

```
4px

8px

16px

24px

32px

48px

64px
```

---

## Card Radius

```
16px
```

---

## Button Radius

```
12px
```

---

# 23. Icons

Library

```
Lucide React
```

Categories

- Dashboard
- Fitness
- Study
- Coding
- Reading
- Calendar
- Analytics
- AI
- Profile
- Settings

---

# 24. Buttons

## Primary Button

```
Background

Primary Color

White Text
```

---

## Secondary Button

```
Border

Primary Color

Transparent Background
```

---

## Danger Button

```
Red Background

White Text
```

---

# 25. Cards

Types

- Statistics Card
- Habit Card
- Goal Card
- AI Card
- Analytics Card
- Notification Card

Each card contains

- Title
- Icon
- Content
- Optional Action Button

---

# 26. Animations

Animation Library

Framer Motion

Supported Animations

- Fade
- Slide
- Scale
- Hover
- Page Transition
- Loading Animation
- Progress Animation

Animation Duration

```
200ms

300ms

500ms
```

---

# 27. Responsive Layout

Desktop

```
3 Column Dashboard
```

Tablet

```
2 Column Dashboard
```

Mobile

```
Single Column Dashboard
```

Navigation

Desktop

Sidebar

Mobile

Bottom Navigation

---

# 28. UI Principles

The interface follows these principles:

- Consistency
- Simplicity
- Accessibility
- Fast Navigation
- Visual Feedback
- Minimal Clicks
- Responsive Design
- Clear Hierarchy

---

# 29. User Experience Goals

The application aims to provide:

- Fast habit completion
- Easy navigation
- Clear progress visualization
- Motivational feedback
- AI-powered guidance
- Low cognitive load
- Smooth interactions

---

# 30. Future UI Enhancements

The following improvements are planned for future versions:

- Custom Themes
- Dynamic Wallpapers
- Widget Support
- Voice Commands
- Smart Dashboard Personalization
- Multi-language Support
- Tablet Optimized Layout
- Desktop Widgets
- Drag-and-Drop Dashboard
- Interactive Habit Timeline

---

# 31. Final UI Vision

LifeTrack AI is designed to feel like a premium productivity application rather than a simple habit tracker.

The interface combines:

- Habit Tracking
- AI Coaching
- Analytics
- Goal Management
- Calendar
- Progress Visualization
- Gamification

into one unified experience.

The design focuses on helping users stay consistent, understand their progress, and continuously improve through actionable insights.

---

# Revision History

| Version | Date | Author | Description |
|----------|------|--------|-------------|
| 1.0 | July 2026 | Vivek Kumar | Initial Wireframe & UI Design |

---

# End of Wireframes Document