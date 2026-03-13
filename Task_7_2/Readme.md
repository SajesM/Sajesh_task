# Task 
A simple app using **Node.js and
Express.js**. This project demonstrates how to build a basic backend API
that performs **CRUD operations (Create, Read, Update, Delete)** using a
**mongodb**.

------------------------------------------------------------------------

## Features

-   Create a new task
-   Get all tasks
-   Delete a task
-   Data stored in a **Db**
-   Modular architecture (**controller, service, routes**)

------------------------------------------------------------------------

## Technologies Used

-   Node.js
-   Express.js
-   mongoose


    npm install

------------------------------------------------------------------------

## Running the Server

Start the server:

    npm run dev
    node src/server.js

Server runs on:

    http://localhost:3000

------------------------------------------------------------------------

## API Endpoints

### Get All Tasks

    GET /tasks

### Get Task by ID

    GET /tasks/:id

### Create Task

    POST /tasks

Example Body:

    {
      "title": "example",
      "completed": false
    }

### Update Task

    PUT /tasks/:id

### Delete Task

    DELETE /tasks/:id

------------------------------------------------------------------------

## Example JSON Data

Stored in:

    data/task.json

Example:

    [
      {
        "title": "example",
        "completed": false
      }
    ]

------------------------------------------------------------------------

## Learning Objectives

This project helps understand:

-   Express routing
-   Controller-Service architecture
-   File handling with the fs module
-   JSON-based data storage
-   Handling HTTP requests and responses

------------------------------------------------------------------------

## Future Improvements

-   Implement authentication (JWT)
-   Add request validation
-   Improve error handling
-   Build a frontend UI

