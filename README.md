# Getting Started with To-Do App

This project is the frontend part of To-Do App, which is built using [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Using To-Do App

To-Do App is designed to help you manage your tasks and categories efficiently. It communicates with a separate backend API to provide a seamless user experience. To get started:

1. Ensure that the backend API is up and running. You can refer to the backend README for instructions on setting up the backend.

2. Set up the frontend by following these steps:

   - Clone this repository.
   - Navigate to the project directory in your terminal.
   - Run `npm install` to install the necessary dependencies.
   - Start the development server using `npm start`.

3. Access the [http://localhost:3000](http://localhost:3000) URL in your browser to use [Your To-Do App Name].

## Frontend Features

- The React frontend interacts with the backend to provide a user-friendly interface for managing tasks and categories. It communicates with the API to perform CRUD operations.

    - Create a New Todo: Use the "Add Task" button to create a new task and assign it to a category.
    - Create a New Category: Use the "Add Category" button to create a new category.
    - Read a List of All Todos: Tasks are displayed in a list.
    - Read List of All Categories: Categories are displayed in a separate list.
    - Update an Individual Todo: Click on a task to edit its details, then click the "Save" button to update.
    - Delete a Todo: Click on a task to edit its details, then click the "Delete" button to remove it.
    - Delete Category and All Todos in It: Deleting a category will also delete all tasks associated with that category.

## Backend Features

- The Sinatra backend provides the following API routes:

    - Create Task: POST /tasks
    - Read All Tasks: GET /tasks
    - Read Task by ID: GET /tasks/:id
    - Update Task: PATCH /tasks/:id
    - Delete Task: DELETE /tasks/:id
    - Create Category: POST /categories
    - Read All Categories: GET /categories
    - Read Category by ID: GET /categories/:id
    - Update Category: PATCH /categories/:id
    - Delete Category: DELETE /categories/:id

