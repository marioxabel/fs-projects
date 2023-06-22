////////////////BORRARRR ///////////////////
import { dummy } from "./dummyData.js"
const contentInfo = dummy

///////////////////////////////////////////

const main = document.querySelector("main")
let title = ""

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault()
    title = document.getElementById("search-bar").value
    getImdbId()
})

// async function getImdbId() {
//     const response = await fetch(`http://www.omdbapi.com/?apikey=575185a6&s=${title}`)
//     const data = await response.json()
//     const mediaImdbID = data.Search.map(result => result.imdbID)
//     console.log(mediaImdbID)
//     getContentInfo(mediaImdbID)
// }

// function getContentInfo(IDs) {
//     const contentInfo = []
//     IDs.map(async id => {
//         const response = await fetch(`http://www.omdbapi.com/?apikey=575185a6&i=${id}`)
//         const data = await response.json()
//         contentInfo.push(data)
//     })
//     console.log(contentInfo)
    
// }

console.log(contentInfo)

function renderMedia() {
    main.innerHTML = contentInfo.map(content => {
        const {Title, Poster} = content
        return `
            <div class="content">
                <img src="${Poster}">
                <div class="content-title">
                    <h4>${Title}</h4>
                </div>
            </div>`
    }).join("")

}


//////////////////////BORRAR /////////////
renderMedia()
//////////////////////////////////////////
