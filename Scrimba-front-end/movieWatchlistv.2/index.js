import { getImdbId, addToWatchlist, removeFromWatchlist } from "./utils.js"



document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault()
    let title = document.getElementById("search-bar").value
    title = title.replace(/\s+/g, '+').replace(/&/g, "%26")
    getImdbId(title)
})



document.addEventListener("click", (e) => {
    if (e.target.dataset.imdbId) {
        const ID = e.target.dataset.imdbId
        if (e.target.dataset.add) {
            return addToWatchlist(ID)  
        } 
        removeFromWatchlist(ID)
    }
  });




