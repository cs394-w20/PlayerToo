# Player, Too
Player, Too is a marketplace for lending and borrowing boardgames. It's a one-stop point for all boardgame lovers to rent and share their love for boardgames.

How to use the app:
Go to the link: https://boar-d6042.firebaseapp.com/ 

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
