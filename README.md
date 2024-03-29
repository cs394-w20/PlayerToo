# Player, Too
Player, Too is a marketplace for lending and borrowing boardgames. It's a one-stop point for all boardgame lovers to rent and share their love for boardgames.

How to use the app:
Go to the link: https://boar-d6042.firebaseapp.com/ 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software
* nodejs
* npm
* git

###### Note: A Firebase account is required as the project directory is setup specifically following Firebase's standard, using their build configurations, Firebase's sdk, and their cloud/db functions.

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the repository

```
git clone https://github.com/cs394-w20/PlayerToo.git
```

cd into the project

```
cd Playertoo
```

Install dependencies

```
npm i
```

Below, you will find utilities for the project and also the way to start up the local development server. In addition to setting up a firebase project for this.

### Setting up the project and files
API Keys Setup for firebase and other APIs.

Before starting the development server, be sure to have the API keys setup such that the project is able to function correctly and fetch the appropriate data from firebase. Listed below are step by step directions for getting that running.

Create a file called `api-key.js` in the project `src` directory
```
touch api-key.js
```

Add the following contents inside the file
```js
export const apiKey = {YOUR_FIREBASE_API_KEY};
```

In addition if you wish to scrape a new set of `board_games` data using the scrape script `api-scrape.js` from the `src` directory, request an API key from [Board Game Atlas](https://www.boardgameatlas.com/api/docs) and add the following line following the existing contents in the `api-key.js` file.
```js
export const scrapeApiKey = {YOUR_BOARDGAME_ATLAS_API_KEY};
```

Lastly, in `src/firebase.js`, replace the `firebaseConfig` with the Firebase project configuration. The configuration for your firebase project can be found in the Firebase console, in the left side panel in `Project Overview` under `Project Settings` (On the page, look for Firebase SDK snippet and toggle the Config radio button). To provide an example, this is an example configuration.
```js
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "playertoo-43706.firebaseapp.com",
  databaseURL: "https://playertoo-43706.firebaseio.com",
  projectId: "playertoo-43706",
  storageBucket: "playertoo-43706.appspot.com",
  messagingSenderId: "382880258359",
  appId: "1:382880258359:web:3ee6699944a42f35c7e2b2",
  measurementId: "G-L95RXSW981"
};
```
###### Note the apiKey is imported from the `api-key.js` file you created.

## Available Scripts for Backend Dev

In the src directory, you can run:
### `node -r esm api-scrape.js`

Scrapes a new batch of board games data from board game atlas API and dumps the data into public/board_games.json.

### `node -r esm gen-mock-users.js`

Generates a new set of users using mock data and dumps the data into public/users.json.

### `node -r esm gen-mock-listings.js`

Generates a new bunch of listings by matching current game_ids and user_ids found in users.json and board_games.json and dumps data into public/listings.json

### `node -r esm migrate-data-db.js`

Migrate generated json files to the fire-store database.

## Available Scripts for Frontend Dev

In the project directory, you can run:

### `npm install`

You should run this command before either of the commands below. 
This will ensure you have the updated dependencies to view the app correctly. 

### `npm start`

This will run the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Documentation

Please see the [docs](docs/README.md) for details on the REST API routes implemented using the cloud functions.

## Logs
Features that were mentioned before the app would be ready for release.
* Saving personal user information through user authentication.
* Filter and sort functionality for searching on the marketplace.
* Securing API routes with JWT or authentication tokens for modifying data.

## Known bugs and issues
* Some inconsistent CSS with text in card components in some pages.
* Application should not be accessed by more than one user at a time, since the app just uses one set user account at the moment. Multiple posts from simultaneous user will lead to confusion due to shared account instance.
* Possible simplification of states could be made in files such as `context.js` where there is a lot of state assignment.

## Deployment

Add additional notes about how to deploy this on a live system.

* Add a firebase project from your gmail console, name it, then create it. Afterwards, select your project from the dashboard.
* Click the `Database` tab in the left panel under the Project Overview. Select to start using the feature, make sure to have `firestore` enabled (very-important) such that the project supports both `firestore` and `real-time db`.
* Click the `Functions` tab in the left panel, have that set up as well.
* Now, make sure to import all the initial mock data from the `public` folder which includes `listings`, `users`, and `boardgames`.
* Run the `migrate-data-db.js` script with one of the three functions uncommented to upload each of the `listings`, `users`, and `boardgames` in the file. e.g.
```js
uploadGames().then(() => {
    console.log('migration complete');
    process.exit();
});
```
* Login to the firebase cli, `firebase login`, the firebase project configuration is already set up, so just link your project to this repo by doing `firebase use {PROJECT_NAME}`
* Deploy frontend by doing `npm run build` then `firebase deploy --only hosting`
* Deploy cloud functions by doing `firebase deploy --only functions`

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Semantic UI](https://react.semantic-ui.com/) - Styling/component framework

## Authors

* [clrpoon](https://github.com/clrpoon), [ut2k](https://github.com/ut2k), [2022karanbhasin](https://github.com/2022karanbhasin), [htmercury](https://github.com/htmercury), [meeeech](https://github.com/meeeech), [omofish](https://github.com/omofish)