Student Management API
A RESTful API built with Node.js, Express, and MongoDB for managing student information. 
This application enables the creation, retrieval, updating, and deletion of student records, supporting multiple search criteria and program-specific filtering.

Features
Add Students: Add new student records to the database.
Get All Students: Retrieve all student records.
Search Students: Search for students based on specific criteria (e.g., ID, name, email, city, etc.).
Filter by Course: Retrieve students enrolled in a specific course type.
Update Student Records: Modify existing student details.
Delete Students: Remove student records by their unique ID.
Tech Stack
Node.js: Backend runtime environment.
Express.js: Web framework for creating the API endpoints.
MongoDB: NoSQL database for data persistence.
Mongoose: ODM library for MongoDB integration.
dotenv: Manage environment variables.
body-parser: Parse incoming request bodies.
cors: Enable cross-origin requests.
Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/student-management-api.git
Install dependencies:

bash
Copy code
cd student-management-api
npm install
Set up environment variables: Create a .env file in the root directory with the following keys:

env
Copy code
PORT=3000
Mongo_URL=your_mongodb_connection_string
Start the server:

bash
Copy code
npm start
The server will start at http://localhost:3000.

API Endpoints
1. POST /students
Add a new student.

Request Body: JSON object with student details.
2. GET /students
Retrieve all student records.

3. GET /students/:searchCriteria/:searchInput
Search for a student by criteria (e.g., id, firstName, lastName, etc.).

4. GET /students/:courseType
Filter students by course type.

5. PUT /students/update
Update an existing student's details.

Request Body: JSON object with updated details.
6. DELETE /students/delete/:id
Delete a student by their unique ID.

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Commit your changes and push them to your forked repository.
Submit a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for more details.
