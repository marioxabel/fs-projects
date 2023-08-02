import { useState, useEffect } from 'react'
import memeData from '../data.js'

export default function Meme() {
    
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "walk into mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    const [allMemeImages, setAllMemeImages] = useState(memeData)    
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => { 
                setAllMemeImages(data.data.memes)
                })
    },[])

    
    function getMemeImg() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length) 
        const url = memeData.data.memes[randomNumber].url
        setMeme(prevState => ({ ...prevState,
                                randomImage: url
                            }))
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        
        setMeme(prevState => (
            {
                ...prevState,
                [name]: value
            }
        ))
    }
    
    return (
        <main>
            <div className='form container'>
            <div className="form--input">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    name='topText'
                    onChange={handleChange}
                    
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    name='bottomText'
                    onChange={handleChange}    
                    
                />
            </div>
            <button onClick={getMemeImg}>Get a new meme image</button>
            </div>
            
            <div className='meme container'>
                <img src={meme.randomImage} alt="" aria-label='meme' />
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}
 
