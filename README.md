# To-Do List

This project is a simple web-based To-Do List application that allows users to add, mark as complete, and remove tasks. The tasks are stored locally in the browser using `localStorage`, ensuring that the task list persists even after the page is refreshed.

## Features
- Add new tasks to the list.
- Mark tasks as complete by clicking on them (toggle functionality).
- Remove tasks by clicking the delete button (`×`).
- Tasks are automatically saved in the browser's local storage.
- Automatically restores tasks from local storage when the page is loaded.

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/todo-list.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-list
   ```
3. Open the `index.html` file in your browser to view the application.

## Usage
1. Type a task into the input field.
2. Click the "Add" button to add the task to the list.
3. Click on a task to mark it as completed (it will toggle a "checked" style).
4. Click the `×` button next to a task to delete it from the list.

## Code Structure
- **HTML:** Provides the structure of the webpage, including the input field, add button, and task list container.
- **CSS:** Handles the styling of the task list, including visual feedback for completed tasks.
- **JavaScript:** Manages the interactivity of the application, including adding tasks, marking them as complete, deleting tasks, and saving/restoring data in `localStorage`.

## Key Functions
### `saveData()`
Saves the current state of the task list to `localStorage`.

### `showTask()`
Loads and displays tasks stored in `localStorage` when the page is loaded.

### Event Listeners
1. **Button Click:** Adds a new task to the list.
2. **List Click:** Toggles the "checked" state of a task or removes a task if the delete button is clicked.

## Project Requirements
- A modern web browser with JavaScript enabled.

## How It Works
1. When a new task is added, an `<li>` element is created and appended to the task list.
2. A delete button (`×`) is dynamically added to each task.
3. Clicking on the task toggles its completion status by adding/removing a `checked` class.
4. Tasks and their states are saved in `localStorage` to ensure persistence.
5. On page load, the `showTask()` function restores the saved tasks.

## Contributing
Feel free to contribute by submitting issues or pull requests. Follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push them to your forked repository.
4. Submit a pull request to the main repository.

