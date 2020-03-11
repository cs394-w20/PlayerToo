import React, { useEffect, createContext, useState } from 'react';
import { getAllGames, getAllListings, getAllUsers, getGameOptions } from './client';

const AppState = createContext(null);
const { Provider } = AppState;


const StateProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [listings, setListings] = useState([]);
  const [users, setUsers] = useState([]);
  const [options, setOptions] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    getAllListings(listingCallback);
    getAllGames(setGames);
    getAllUsers(setUsers);
    getGameOptions(setOptions);
    //postListing();
  }, []);
  
  let marketplaceListings = [];
  let myListings = [];

  const updateMarketplaceListings = (listings) => {
    marketplaceListings = listings.length > 0 && users.length > 0 && games.length > 0 ?
      listings.map(
        listing => {
          const user = users[users.findIndex(u => u.id === listing.lender_id)];
          const game = games[games.findIndex(g => g.id === listing.game_id)];
          return {
            game: game.name,
            description: game.description,
            images: Object.values(game.images),
            id: listing.id,
            rating: Math.round(user.rating),
            tags: game.tags,
            minPlayers: game.min_players,
            maxPlayers: game.max_players,
            distance: user.distance,
            borrowed: listing.borrowed,
            lender: {
              username: user.id.slice(0, -2),
              firstname: user.name.split(" ")[0],
              lastname: user.name.split(" ")[1],
              email: user.email,
              profile: user.display_pic
            }
          }
        }
      ) : []
  };
      
  const updateMyListings = (listings) => {
    myListings = listings.length > 0 && users.length > 0 && games.length > 0 ?
    listings.filter(
      listing => { return listing.lender_id === "Silva91_^" }) : [];

    console.log("myListings", myListings)
  }

  const listingCallback = (newListings) => {
    setListings(newListings);
    updateMarketplaceListings(newListings);
    updateMyListings(newListings);
  }

  updateMarketplaceListings(listings);
  updateMyListings(listings);

  const myRequests = myListings.length > 0 && users.length > 0 && games.length > 0 ?
    myListings.filter(listings => { return listings.requests.length > 0 }) : [];

  const api = { setMenuVisible, menuVisible, marketplaceListings, myListings, myRequests, games, options, users, listingCallback };
  return <Provider value={api}>{children}</Provider>;
};

export { AppState, StateProvider };