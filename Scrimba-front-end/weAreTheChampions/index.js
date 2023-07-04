import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://we-are-the-champions-413e7-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementsInDB = ref(database, "endorsements")

const endorsementText = document.getElementById("endorsement-text")
const endorsementFrom = document.getElementById("endorsement-from")
const endorsementTo = document.getElementById("endorsement-to")
const endorsementSpace = document.getElementById("endorsement-space")

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault()
    let inputText = endorsementText.value
    let inputFrom = endorsementFrom.value
    let inputTo = endorsementTo.value
    
    const newEndorsement = {
        text: inputText,
        from: inputFrom,
        to: inputTo
      };
    
    
    push(endorsementsInDB, newEndorsement)
    endorsementText.value = ""
    endorsementFrom.value = ""
    endorsementTo.value = ""
})

onValue(endorsementsInDB, snapshot => {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
        
        // Clear div to avoid duplicates
        endorsementSpace.innerHTML = ""
        
        itemsArray.map(endorsement => appendEndoresement(endorsement))
    } else {
        endorsementSpace.innerHTML = "No items yet..."
    }
})

function appendEndoresement(text) {
    let newEndoresementEl = document.createElement("div")
    newEndoresementEl.classList.add("endorsement-div")
    newEndoresementEl.innerHTML = `
        <p class="bold">To ${text[1].to}</p>
        <p>${text[1].text}</p>
        <p class="bold">From ${text[1].from}</p>`
    
    // Delete item if clicked
    newEndoresementEl.addEventListener("click", () => {
        let exactLocationOfText = ref(database, `endorsements/${text[0]}`)
        remove(exactLocationOfText)
    })
    
    endorsementSpace.append(newEndoresementEl)
}