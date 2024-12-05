# **BlueHarvestBanking App**

A modern web application for managing user accounts and retrieving user information, built with a structured Node.js backend and a React frontend.

## **Project Overview**

The **BlueHarvestBanking App** is designed to handle banking-related operations, such as creating accounts and retrieving user details. It follows a clean architecture with clear separation of concerns between controllers, services, and repositories.

### **Backend:**
- Built with Node.js and Express.js
- Implements a layered architecture:
  - **Controllers:** Handle HTTP requests and responses.
  - **Services:** Contain the business logic.
  - **Repositories:** Handle data operations.

### **Frontend:**
- Built with React.js.
- Provides an intuitive user interface for account creation and fetching user data.

---


## **API Endpoints**

### **Account APIs**
- **Create a New Account**
  - **Endpoint:** `POST /api/accounts`
  - **Description:** Create a new account for a user.
  - **Request Body:**
    ```json
    {
        "customerID": "12345",
        "initialCredit": 100.0
    }
    ```
  - **Response Example:**
    ```json
    {
        "accountID": "67890",
        "message": "Account created successfully"
    }
    ```

### **User APIs**
- **Get User Information**
  - **Endpoint:** `GET /api/users/:customerID`
  - **Description:** Retrieve detailed information about a user, including balance and transactions.
  - **Path Parameters:**
    - `customerID` (string): The ID of the customer.
  - **Response Example:**
    ```json
    {
        "name": "John",
        "surname": "Doe",
        "balance": 150.0,
        "transactions": [
            { "id": "txn1", "amount": 100.0 },
            { "id": "txn2", "amount": 50.0 }
        ]
    }
    ```

---

## **Project Overview**

The **BlueHarvestBanking App** is designed to handle banking-related operations, such as creating accounts and retrieving user details. It follows a clean architecture with clear separation of concerns between controllers, services, and repositories.

### **Backend:**
- Built with Node.js and Express.js
- Implements a layered architecture:
  - **Controllers:** Handle HTTP requests and responses.
  - **Services:** Contain the business logic.
  - **Repositories:** Handle data operations.

### **Frontend:**
- Built with React.js.
- Provides an intuitive user interface for account creation and fetching user data.



## **Running the Application**

### **Backend**

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

4. The backend server will be running at:
   ```
   http://localhost:3333
   ```

---

### **Frontend**

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

4. The frontend application will be available at:
   ```
   http://localhost:3000
   ```

---

### **Testing the Application**

1. Use **Postman**, **curl**, or a similar tool to interact with the backend APIs at `http://localhost:3333`.
2. Open the frontend in your browser by navigating to:
   ```
   http://localhost:3000
   ```

3. Test the following functionalities:
   - Create a new account.
   - Fetch user information, including balance and transactions.
