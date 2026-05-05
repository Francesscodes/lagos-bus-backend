Lagos School Bus Management System — Backend API


A RESTful API for managing school bus routes, student attendance, and parent notifications for the Ago Palace/Okota area in Lagos.

Tech Stack

- Node.js + Express
- MySQL + Sequelize ORM
- JWT Authentication
- bcryptjs for password hashing

 Getting Started

 Prerequisites
- Node.js installed
- MySQL installed and running
- A database called `lagos_bus_db` created in MySQL

 Installation

1. Clone the repo
   git clone https://github.com/Francesscodes/lagos-bus-backend.git
   cd lagos-bus-backend

2. Install dependencies
   npm install

3. Create a .env file in the root folder
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=lagos_bus_db
   DB_PORT=3306
   PORT=5000
   JWT_SECRET=your_secret_key

4. Run the server
   npm run dev

 API Endpoints

 Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register a Parent or Driver |
| POST | /api/auth/login | Login and get JWT token |

 Students
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/students | Add a student |
| GET | /api/students | Get all students |
| GET | /api/students/parent/:parentId | Get students by parent |

 Attendance
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/attendance | Log Boarded or Dropped |
| GET | /api/attendance | Get all attendance logs |
| GET | /api/attendance/student/:studentId | Get attendance by student |

 Drivers
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/drivers | Add a driver |
| GET | /api/drivers | Get all drivers |

Project Structure

lagos-bus-backend/
├── config/         # Database connection
├── controllers/    # Route logic
├── middleware/     # JWT auth protection
├── models/         # Sequelize models
├── routes/         # API routes
└── server.js       # Entry point
