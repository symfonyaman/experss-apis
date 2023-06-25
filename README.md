# User Management API

This API provides endpoints for managing user data, including creating, fetching, updating, and deleting users.

## Getting Started

Follow the instructions below to get started with the User Management API.

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.
- MongoDB installed and running.

### Installation

1. Clone the repository:
git clone <repository-url>

2. Navigate to the project directory:
cd user-management-api

3. Install the dependencies:
npm install

4. Start the server:
npm start


By default, the server runs on `http://localhost:3000`.

## API Endpoints

### Create User

Create a new user.

- Endpoint: POST /users
- Request Body: JSON object containing user data (name, email, password)
- Response: JSON object containing the created user data

### Fetch User

Get user data by ID.

- Endpoint: GET /users/:userId
- Parameters:
  - `:userId`: ID of the user to fetch
- Response: JSON object containing the user data

### Update User

Update user data by ID.

- Endpoint: PUT /users/:userId
- Parameters:
  - `:userId`: ID of the user to update
- Request Body: JSON object containing user data to be updated (name, email)
- Response: JSON object containing the updated user data

### Delete User

Delete user data by ID.

- Endpoint: DELETE /users/:userId
- Parameters:
  - `:userId`: ID of the user to delete
- Response: JSON object with a success message

## Error Handling

If an error occurs while processing the requests, the API will respond with an appropriate error message and HTTP status code.

## Examples

### Create User

POST /users
Request Body:
{
"name": "John Doe",
"email": "john.doe@example.com",
"password": "password123"
}


### Fetch User
GET /users/:userId
Parameters:
:userId: 12345


### Update User
PUT /users/:userId
Parameters:
:userId: 12345
Request Body:
{
"name": "Updated Name",
"email": "updated@example.com"
}


### Delete User
DELETE /users/:userId
Parameters:
:userId: 12345


## License

This project is licensed under the [MIT License](LICENSE).



