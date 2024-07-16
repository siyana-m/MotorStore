# MotorStore

## Overview

This project is about managing a motor store's inventory, including adding, editing, and deleting vehicles and accessories. The frontend is built with React and the backend is written in Java. This repository contains the source code and resources required to deploy and run the application.

## Directory Structure

The project is structured as follows:

```
MotorStore/
├── public/
│ ├── index.html
│ ├── manifest.json
│ └── robots.txt
├── src/
├── .gitignore
├── README.md
├── motorstore_db.txt
├── package-lock.json
├── package.json
```

### Key Directories and Files

- **public/**: Contains the public assets such as the HTML file and manifest.
- **src/**: Contains the React components and source code.
- **.gitignore**: Specifies which files and directories to ignore in the repository.
- **README.md**: The readme file you are currently reading.
- **motorstore_db.txt**: Contains the database setup script.
- **package-lock.json**: Automatically generated file that locks the version of dependencies.
- **package.json**: Lists the project dependencies and scripts.

## Prerequisites

- [Node.js](https://nodejs.org/) (for managing frontend dependencies)

## Setup and Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/siyana-m/MotorStore.git
    cd MotorStore
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Run the application:**
    ```sh
    npm start
    ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Database Setup

1. **Create a new database in your preferred database management system:**
    - Open your database management tool and connect to your database instance.
    - Create a new database named `MotorStoreDB`.

2. **Run the provided SQL script:**
    - Open a new query window in your database management tool.
    - Copy the contents of the `motorstore_db.txt` file into the query window.
    - Execute the script to create the necessary tables, triggers, and seed data.

    If you log into SSMS with a username and password:
    ```json
    "ConnectionStrings": {
        "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=MotorStoreDB;User Id=YOUR_USERNAME;Password=YOUR_PASSWORD;"
    }
    ```

    If you log into SSMS directly with the server (Windows Authentication):
    ```json
    "ConnectionStrings": {
        "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=MotorStoreDB;Trusted_Connection=True;"
    }
    ```

## Running Tests

To run the tests for the application, use the following command:

```sh
npm test
```

## Deployment

For deployment, you can publish the application using:

```sh
dotnet publish --configuration Release
```

Follow your hosting provider's instructions to deploy the published files.

## Contributing

Contributions are welcome! Please create an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [siskataam32@gmail.com](mailto:siskataam32@gmail.com).

## Notes

The project is still under development. There may be issues. In case of finding one, please contact [siskataam32@gmail.com](mailto:siskataam32@gmail.com).




(# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
#   r e a c t - w e b - s t o r e - f r o n t e n d - e x e r c i s e)
 
 
