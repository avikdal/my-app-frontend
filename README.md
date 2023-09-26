# To-Do App

![task walkthrough gif](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmlnYjFiYm1tZWk2bDFkZGJib3NpMjNwczNzNjl6c2d5cmRvNHoxMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/46G23jBVb86gBdSDA5/giphy.gif)

This To-Do App is a web application that provides a simple and efficient way to manage your tasks and categories. It consists of a Sinatra API backend that interacts with a database using Active Record, and a separate React frontend that communicates with the backend via API requests. This README will guide you through the setup, features, and usage of this application.

## Features

- Task Management: Create, read, update, and delete tasks.
- Category Management: Create, read, and delete categories.
- One-to-Many Relationship: Tasks belong to categories, and each             category can have multiple tasks.
- RESTful API: Follows RESTful conventions with well-defined routes for CRUD operations.
Ruby & ActiveRecord Backendend: [for link]: https://github.com/avikdal/phase-3-sinatra-react-project
- State Management: Proper state management in the frontend using setState to reflect changes after API requests.
- JSON Data: JSON data is passed from the backend to the frontend for related associations.

## Getting Started with To-Do App

This project is the frontend part of To-Do App, which is built using [Create React App](https://github.com/facebook/create-react-app).


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



## Using To-Do App

To-Do App is designed to help you manage your tasks and categories efficiently. It communicates with a separate backend API to provide a seamless user experience. To get started:

1. Ensure that the backend API is up and running. You can refer to the backend README for instructions on setting up the backend.

2. Set up the frontend by following these steps:

   - Clone this repository.
   - Navigate to the project directory in your terminal.
   - Run `npm install` to install the necessary dependencies.
   - Start the development server using `npm start`.

3. Access the [http://localhost:3000](http://localhost:3000) URL in your browser to use To-Do App Name.

## Frontend Features

- The React frontend interacts with the backend to provide a user-friendly interface for managing tasks and categories. It communicates with the API to perform CRUD operations.

    - Create a New Todo: Use the "Add Task" button to create a new task and assign it to a category.
    - Create a New Category: Use the "Add Category" button to create a new category.
    - Read a List of All Todos: Tasks are displayed in a list.
    - Read List of All Categories: Categories are displayed in a separate list.
    - Update an Individual Todo: Click on a task to edit its details, then click the "Save" button to update.
    - Delete a Todo: Click on a task to edit its details, then click the "Delete" button to remove it.
    - Delete Category and All Todos in It: Deleting a category will also delete all tasks associated with that category.

## Backend Setup & Features

1. Clone this repository to your local machine. [for link]: https://github.com/avikdal/phase-3-sinatra-react-project

2. Install the required gems using:

   ```console
   $ bundle install
   ```

3. Start the backend server with:

    ```console
    $ bundle exec rake server
    ```

    This will run your server on port
    [http://localhost:9292](http://localhost:9292).

- The Sinatra backend provides the following API routes:

    - Create Task: POST /tasks
    - Read All Tasks: GET /tasks
    - Read Task by ID: GET /tasks/:id
    - Update Task: PATCH /tasks/:id
    - Delete Task: DELETE /tasks/:id
    - Create Category: POST /categories
    - Read All Categories: GET /categories
    - Read Category by ID: GET /categories/:id
    - Delete Category: DELETE /categories/:id

