# My Personal Notes

A simple yet powerful note-taking application built with React and Redux. This application allows users to create, view, search, archive, and delete personal notes. The notes are persisted in the browser's local storage, so your data is saved between sessions.

## Features

*   **Create Notes:** Easily add new notes with a title and body.
*   **View Notes:** See a list of all your active and archived notes.
*   **Search Notes:** Quickly find notes by searching for keywords in the title.
*   **Archive Notes:** Move notes to an archive section without deleting them.
*   **Delete Notes:** Permanently remove notes you no longer need.
*   **Persistent Storage:** Your notes are saved in local storage, so they'll be there when you come back.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/my-personal-notes.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd my-personal-notes
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the application in development mode, run the following command:

```sh
npm start
```

This will open the application in your default browser at [http://localhost:3000](http://localhost:3000). The page will automatically reload if you make any changes to the code.

## Available Scripts

In the project directory, you can run:

*   `npm start`: Runs the app in development mode.
*   `npm test`: Launches the test runner in interactive watch mode.
*   `npm run build`: Builds the app for production to the `build` folder.
*   `npm run eject`: Ejects the app from `create-react-app`, giving you full control over the configuration.

## Project Structure

The project is structured as follows:

```
my-personal-notes/
├── public/
│   └── index.html
├── src/
│   ├── components/     # React components
│   ├── redux/          # Redux store, reducers, and actions
│   ├── styles/         # CSS styles
│   ├── utils/          # Utility functions
│   ├── App.js          # Root component
│   └── index.js        # Application entry point
├── package.json
└── README.md
```

## Technologies Used

*   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
*   [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
*   [React-Redux](https://react-redux.js.org/) - Official React bindings for Redux.
*   [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development.
*   [Redux Persist](https://github.com/rt2zz/redux-persist) - Persist and rehydrate a Redux store.
*   [Create React App](https://create-react-app.dev/) - A comfortable environment for learning React, and is the best way to start building a new single-page application in React.