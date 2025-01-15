# E-sports Analyser

E-sports Analyser is a web application designed to analyze and track e-sports match statistics. The app allows users to input match data such as kills, time survived, damage dealt, assists, and more, and provides insights based on the entered data.

## Features
- Add match statistics such as kills, time survived, revives, knocks, ranking, damage dealt, assists, and healing used.
- View analytics and insights based on the match data entered.
- User-friendly interface for submitting match details.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Backend Setup

### 1. Clone the repository
Clone the repository to your local machine:

`git clone https://github.com/your-username/e-sports-analyser.git`
cd e-sports-analyser

### 2. Install dependencies
Navigate to the `backend` directory and install the required dependencies:

`cd backend`
`npm install`
`npm install dotenv`

### 3. Configure environment variables
Create a `.env` file in the `backend` directory and add the following environment variables:

PORT=4000
MONGO_URI=your_mongo_database_uri

- Replace `your_mongo_database_uri` with your MongoDB connection string.

### 4. Run the backend server
Start the backend server:

`npm run dev`

This will start the backend server on the specified port (default is 5000).

## Frontend Setup

### 1. Navigate to the frontend directory
Go to the `frontend` directory:

`cd frontend`

### 2. Install dependencies
Install the required dependencies:

`npm install`

### 3. Configure proxy
Open the `frontend/package.json` file and add the proxy field to point to the backend server's port:

"proxy": "http://localhost:4000"

- Make sure the port matches the one you're using for the backend.

### 4. Start the frontend server
Run the frontend development server:

`npm start`

This will start the frontend server and open the application in your default web browser.

## Usage
- After setting up both the backend and frontend, you can add match statistics through the frontend interface.
- The backend will handle the submission and store the data in the MongoDB database.
- The frontend will display the data and analytics based on the entered match statistics.


## Screenshots
![image](https://github.com/user-attachments/assets/9df5c0b8-e71a-4fe4-aed5-051a648f6686)
![image](https://github.com/user-attachments/assets/ef60bb27-c454-4052-abbd-1c67eabe560a)





## Acknowledgements
- Thanks to the developers of React.js, Node.js, Express.js, and MongoDB for providing the tools that made this project possible.

## Authors

Arun Thakur  
@exquisitehabibi
