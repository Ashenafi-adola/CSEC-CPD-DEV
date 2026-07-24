# JS Todo App

A simple, lightweight todo application built with vanilla JavaScript, HTML, and CSS.

## Overview

This is a minimalist todo list application that allows users to quickly add and remove tasks. The app features a clean, user-friendly interface with a modern design.

## Features

- **Add Tasks**: Enter task descriptions and click "Add Task" to create a new todo item
- **Remove Tasks**: Click on any task to delete it from the list
- **Clean UI**: Simple and intuitive interface with a polished appearance
- **Responsive Design**: Compact layout that's easy to use

## Project Structure

```
js-todo-app/
├── index.html       # HTML structure and layout
├── script.js        # JavaScript functionality
├── style.css        # CSS styling
└── README.md        # This file
```

## File Descriptions

### index.html
- Contains the HTML structure for the app
- Includes a title, input form with "Add Task" button, and a container for tasks
- Links to external CSS and JavaScript files

### script.js
- Handles all application logic
- `addTask()`: Adds new tasks to the list when the button is clicked
- `toggleTask()`: Removes a task when clicked
- Event listeners for user interactions

### style.css
- Provides styling for the application
- Includes a grey/brown themed design with rounded corners
- Button hover effects for better user experience
- Responsive form and input styling

## Usage

1. Open `index.html` in a web browser
2. Type a task description in the input field
3. Click the "Add Task" button to add the task to your list
4. Click on any task to remove it

## Getting Started

No installation or dependencies required! Simply open the `index.html` file in any modern web browser and start using the app.

## Browser Compatibility

Works with all modern web browsers that support:
- ES6 JavaScript
- CSS Flexbox
- DOM manipulation APIs

## Future Enhancements

Potential improvements for future versions:
- Task persistence using localStorage
- Edit task functionality
- Mark tasks as complete without deleting
- Task priority levels
- Due dates and reminders
- Dark mode toggle
