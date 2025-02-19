# Express.js Documentation
## Installation and Setup

### Prerequisites
- Node.js installed
- npm installed

### Setup Instructions
1. Clone the repository:

   git clone <repository-url>
   cd express-assignment
   
2. Install dependencies:
 
   npm install
   
3. Create a `.env` file and define the `PORT` variable:
   
   PORT=5000

4. Start the server:
   node index.js
5. The server will run at `http://localhost:5000`.

## Project Structure
```
express-assignment/
│-- routes/
│    ├── userRoutes.js
│    ├── productRoutes.js
│-- middleware/
│    ├── logger.js
│-- controllers/
│    ├── userController.js
│    ├── productController.js
│-- index.js
│-- package.json
│-- README.md
│-- .env
```

## API Endpoints

### User Routes (`/api/users`)
- **GET** `/api/users` - Retrieves a list of users.
- **POST** `/api/users` - Adds a new user.
- **PUT** `/api/users/:id` - Updates an existing user.
- **DELETE** `/api/users/:id` - Deletes a user.

### Product Routes (`/api/products`)
- **GET** `/api/products` - Retrieves a list of products.
- **POST** `/api/products` - Adds a new product.
- **PUT** `/api/products/:id` - Updates an existing product.
- **DELETE** `/api/products/:id` - Deletes a product.

## Middleware
- **Logger Middleware (`logger.js`)**: Logs request details (method, URL, timestamp).
- **Global Error Handler**: Catches and handles errors gracefully.



  

