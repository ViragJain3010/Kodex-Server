# Kodex Server

The **Kodex Server** is the backend service for the Kodex platform, handling code execution, API requests, and database interactions. Built with **Express.js**, **Docker**, and **Prisma**, it supports dynamic, multi-language code execution environments and integrates seamlessly with the Kodex frontend.

---

## Requirements

- **Node.js** (version 14 or higher)
- **Docker** (with dynamic container management support)
- **Docker Compose**

---

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-repo/kodex.git
   cd kodex/server
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure the Environment:**

   - Create a `.env` file in the `kodex/server` directory based on the provided `.env.example` template.
   - Configure environment variables for database connection, Docker settings, and other server options.

4. **Build and Run Docker Containers:**

   ```bash
   docker compose build
   docker compose up   # For testing, if ran successfully then execute `docker compose down`
   ```
   > **Tip:** If you encounter errors, restart the terminal and rerun the commands.

---

## Directory Structure

- **`api/`**: Express routes for handling API requests.
- **`config/`**: Configuration files for server setup and environment variables.
- **`docker/`**: Dockerfile and related configuration files for dynamic code execution.
- **`executors/`**: Code execution logic for supported programming languages.
- **`middleware/`**: Custom Express middleware functions.
- **`prisma/`**: Prisma ORM schema and client configuration.
- **`standalone/`**: Standalone Next.js build for the frontend (used in production).
- **`utils/`**: Utility functions and helper classes.

---

## Running the Server

- **Development Mode:**
   ```bash
   npm run dev
   ```
   Uses the frontend build in the `standalone` folder for testing.

- **Production Mode:**
   ```bash
   npm start
   ```
   Starts the backend server at `localhost:3001`. The frontend needs to be started separately in another terminal, after which it can communicate with the backend via API requests.

---

## API Endpoints

### **Code Execution**

- **`POST /api/execute`**  
  Executes code in the specified programming language.  
  **Request Body**:
  ```json
  {
    "language": "python",
    "code": "print('Hello, World!')",
    "input": ""
  }
  ```

### **Supported Languages**

- **`GET /api/languages`**  
  Retrieves a list of supported programming languages.

- **`Get /api/languages/{language}`**
  Retrieves the configuration of a specific language.

### **Testing Endpoint**

- **`POST /api/test`**
  A utility endpoint for server testing (development purposes only).

---

## Docker Configuration

- Docker dynamically creates and manages containers for secure, isolated code execution.
- **Key Configuration:**
  - `docker-compose.yml`: Defines services and networks for the backend and execution environments.
  - **Docker Services:**
    - `javascript-runner`: Runs JavaScript code.
    - `python-runner`: Runs Python code.
    - `cpp-runner`: Runs C++ code.
  - **Docker Networks:**
    - `code-network`: A bridge network for communication between containers.
    > **Note:** Ensure this network is created to avoid errors.

    - **Create the Docker Network**
        Run the following command to create the network:
        ```bash
        docker network create code-network
        ```
        `code-network` is the name of the network used in your docker-compose.yml file. You can replace it with any other name, but ensure consistency in your configuration.

---

<!-- ## Prisma Setup

Prisma is used for seamless database interactions.

- **Schema Location:** `prisma/schema.prisma`
- **Client Configuration:** Generated in `node_modules/.prisma/client`.
- **Database Connection:** Defined in the `.env` file.

**Common Commands:**
```bash
# Generate Prisma client
npx prisma generate

# Apply database migrations
npx prisma migrate dev
``` -->

---

## Middleware

Custom middleware functions are implemented in the `middleware/` directory.

<!-- - **Authentication Middleware:** Configured in `middleware/authMiddleware.js`.
  - Ensures requests are authorized where required. -->

---

## Deployment Notes

For deployment:
1. Use a single deployment for both backend and frontend.
2. Ensure Docker is configured properly on the hosting platform.
3. Use AWS or Railway.app for simplified deployment workflows.

---
