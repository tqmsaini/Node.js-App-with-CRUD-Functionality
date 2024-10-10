# Node.js-App-with-CRUD-Functionality

This is a simple Node.js CRUD (Create, Read, Update, Delete) application designed for DevOps testing and automation pipelines. It provides an in-memory database to simulate user data and supports basic REST API operations.

Features
Create a User: Add a new user with POST /users.
Read Users: Retrieve a list of all users with GET /users.
Update a User: Update existing user information with PUT /users/:id.
Delete a User: Remove a user from the list with DELETE /users/:id.
This app is ideal for testing basic HTTP operations, DevOps CI/CD pipelines, Docker containers, and automated testing with tools like Mocha and Chai.

Project Structure
bash
Copy code
devops-crud-app/
├── Dockerfile
├── package.json
├── app.js
├── test/
│   └── test.js
└── README.md
Getting Started
Prerequisites
Before running the project, make sure you have the following installed on your system:

Node.js (v14+)
npm (Node Package Manager)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/devops-crud-app.git
cd devops-crud-app
Install dependencies:

bash
Copy code
npm install
Running the App
To start the application, run the following command:

bash
Copy code
npm start
The application will be running at:

arduino
Copy code
http://localhost:3000
API Endpoints
Method	Endpoint	Description
POST	/users	Create a new user
GET	/users	Get a list of all users
PUT	/users/:id	Update a user by ID
DELETE	/users/:id	Delete a user by ID
Example Payload for POST/PUT Requests
json
Copy code
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
Running Tests
To run the tests, use the following command:

bash
Copy code
npm test
The tests will cover all the CRUD operations using Mocha and Chai.

Docker Support
If you want to containerize the app, here is a sample Dockerfile:

Dockerfile
Copy code
FROM node:14

WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

EXPOSE 3000
CMD ["npm", "start"]
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Contact
If you have any questions or feedback, feel free to reach out!
