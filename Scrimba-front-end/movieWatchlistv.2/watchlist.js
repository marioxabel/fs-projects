import { renderMedia, addToWatchlist, removeFromWatchlist } from "./utils.js"
// import { dummy as watchlist } from "./dummyData.js"
  
const main = document.querySelector("main")
let watchlist = JSON.parse(localStorage.getItem("watchlist"))

renderMedia(watchlist, main)