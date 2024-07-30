# Todo List Application

This is a frontend Todo List application built with React. The application allows users to manage their tasks efficiently by providing features to add, update, delete, mark as completed, and search tasks. Tasks are displayed in an expandable list format, with descriptions and timestamps shown when expanded.

## Features

- **Create Task**: Add new tasks with a title and description.
- **Update Task**: Edit existing tasks.
- **Mark as Done**: Mark tasks as completed.
- **Search Tasks**: Search tasks by title.
- **Expandable List**: Display tasks in an expandable list format, showing a description and a timestamp of the last update when expanded.
- **Data Storage**: Uses a dummy JSON file as a data repository (in-memory for simplicity).

## System Design

### Components

- **TaskForm**: A form component to add or edit tasks.
- **TaskItem**: A component that displays individual tasks in a table row format. Expands to show the description and timestamp when the task title is clicked.
- **TaskList**: The main component that manages the state of the tasks and renders the task list and search functionality.

### State Management

State is managed using React's `useState` and `useEffect` hooks. Tasks are stored in the component state, and interactions (add, update, delete, toggle complete) modify this state.

### Search Functionality

The search functionality filters tasks by title. The filtered tasks are displayed in the table, providing an intuitive way for users to find specific tasks.

## Implementation

The application is implemented with the following key components and files:

- `src/components/TaskForm.js`: Handles task creation and editing.
- `src/components/TaskItem.js`: Displays individual tasks and their details.
- `src/components/TaskList.js`: Manages the list of tasks and implements the search functionality.
- `src/utils/storage.js`: Provides functions to get and save tasks to localStorage (simulating a dummy JSON file for data storage).
- `src/App.js`: The main application component that brings everything together.
- `src/App.css`: Styles for the application.

### Dependencies

- React
- UUID (for generating unique task IDs)

## Setup and Run Instructions

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/todo-list-react.git
cd todo-list-react
