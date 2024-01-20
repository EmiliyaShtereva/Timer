# Timer

This is a Timer made in both React and Vanilla JavaScript.

![image](https://github.com/EmiliyaShtereva/Timer/assets/123276538/6f8d0741-5f6f-4c56-91b6-a3862bb8ee1e)

## Table of Contents

- [Setup](#setup)
- [Technologies Used](#technologies-used)
- [Architecture and Directories](#architecture-and-directories)

## Setup
Download GitHub repo

React init:
- Open a new terminal in the client folder and enter "npm install" to install the app dependencies.
- Enter "npm run dev" in the command prompt in the same folder to start the app in developement mode.
- To open the app in the browser, open the link provided in the terminal after entering the previous command.

JavaScript init:
There are no additional setups for this folder.

## Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/en/main)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) & [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [NPM](https://www.npmjs.com/)

## Architecture and Directories
```
JS-Timer
├── .styles
│   ├── form.css
|   ├── main.css
|   ├── styles.css
|   ├── src
├── app.js
├── index.html

React-Timer
├── public
├── src
│   ├── assets: Project assets
│   ├── components
|   |   ├── Form.jsx
|   |   ├── Form.module.css
|   |   ├── Timer.jsx
|   |   ├── Timer.module.css
|   ├── utils
|   |   ├── formatTime.js
│   ├── App.jsx: Main application component and router
│   ├── main.jsx: EntryPoint of application.
├── index.html
├── package.json: File that manages all the dependecies and contains script definitions.
├── vite.config.js: vite configuration
```
