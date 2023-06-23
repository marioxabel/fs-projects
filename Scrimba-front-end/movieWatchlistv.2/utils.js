let pageContent
let watchlist = JSON.parse(localStorage.getItem("watchlist")) 
const main = document.querySelector("main")

if (!watchlist) {
    watchlist = []
    localStorage.setItem("watchlist", JSON.stringify(watchlist))
}



async function getImdbId(title) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=575185a6&s=${title}`)
    const data = await response.json()
    const mediaImdbID = data.Search.map(result => result.imdbID)
    console.log(`http://www.omdbapi.com/?apikey=575185a6&s=${title}`)
    getContentInfo(mediaImdbID)
}

async function getContentInfo(IDs) {
    const contentInfo = await Promise.all(
        IDs.map(async id => {
            const response = await fetch(`http://www.omdbapi.com/?apikey=575185a6&i=${id}`)
            const data = await response.json()
            return data
        })
    )
    pageContent = contentInfo
    renderMedia(contentInfo, main)
}

function renderMedia(contentInfo, tagToRender) {  
    tagToRender.innerHTML = contentInfo.map(content => {
        const {Title, Poster, imdbRating, Runtime, Genre, imdbID, Plot} = content
        return `
            <div class="content inner-container">
                <img src="${Poster}">
                <div class="content-text">
                    <div class="content-title">
                        <h3>${Title}</h3>
                        <p class="star-icon"><i class="fa-solid fa-star"></i><p>
                        <p>${imdbRating}</p>
                    </div>
                    <div class="content-info">
                        <p>${Runtime}</p>
                        <p>${Genre}</p>
                        <button id="add-${imdbID}" data-imdb-ID="${imdbID}" data-add="add"><i class="fa-solid fa-circle-plus"></i> Watchlist</button>
                        <button  class="remove-btn" id="remove-${imdbID}" data-imdb-ID="${imdbID}" data-rm="rm"><i class="fa-solid fa-circle-minus"></i> Remove</button>
                    </div>
                    <div class="content-plot">
                        <p>${Plot}</p>
                    </div>
                </div>
            </div>`
    }).join("")
}



function addToWatchlist(ID) {
    const watchlist = JSON.parse(localStorage.getItem("watchlist"))
    pageContent.map(title => {
        if (title.imdbID === ID) {
            watchlist.push(title)
            console.log(watchlist)
        }
    })
    localStorage.setItem("watchlist", JSON.stringify(watchlist))
    document.getElementById(`add-${ID}`).style.display = "none";
    document.getElementById(`remove-${ID}`).style.display = "block";
}

function removeFromWatchlist(ID) {
    const watchlist = JSON.parse(localStorage.getItem("watchlist"))
    watchlist.map((title, index) => {
        if (title.imdbID === ID) {
            watchlist.splice(index, 1)
        }
    })
    localStorage.setItem("watchlist", JSON.stringify(watchlist))
    console.log(watchlist)
    document.getElementById(`add-${ID}`).style.display = "block";
    document.getElementById(`remove-${ID}`).style.display = "none";
}


export { getImdbId, addToWatchlist, removeFromWatchlist, renderMedia }