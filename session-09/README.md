# React.js and Next.js Mastering Course

## Session 09

### 1. Introduction to RESTful API's

A RESTful API (Representational State Transfer API) is a way for two systems to communicate over the internet using standard HTTP methods such as GET, POST, PUT, and DELETE. REST is an architectural style that provides guidelines for creating scalable and stateless web services.

Key principles of RESTful APIs:

1. **Statelessness**: Each request from a client to a server must contain all the information needed to process the request. The server does not store any client context between requests.

   - Authentication Token
   - Relevant Cookies
   - Required Data Body

2. **Resource-Based**: Resources (e.g., users, products) are identified using URLs, and operations on these resources are performed using HTTP methods.

3. **Uniform Interface**: REST APIs follow a consistent structure, making them predictable and easy to use. For example:

   - `GET /users` retrieves a list of users.
   - `POST /users` creates a new user.
   - `PUT /users/{id}` updates an existing user.
   - `DELETE /users/{id}` deletes a user.

4. **Representation**: Resources can be represented in different formats, such as JSON or XML, with JSON being the most commonly used format.

5. **Stateless Caching**: Responses can be cached to improve performance, as long as the server indicates that the response is cacheable.

RESTful APIs are widely used because they are simple, scalable, and language-agnostic, making them a popular choice for building modern web applications and services.

### 2. Retrieving Backend Data with `fetch` and `ky`

### 3. Error Handling and Loading States

### 4. Integrating CRUD operations with Next.js Route Handlers

### 5. Create MongoDB Account

### 6. Create a MongoDB Cluster

### 7. Create `.env` file with MongoDB Connection URI

### 8. Create Next.js API endpoint to receive test data from MongoDB
