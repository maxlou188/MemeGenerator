import pictureFrame from '../images/picture-frame.png';
import React from 'react';
import memesArray from '../memesData';

function Meme(props) {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://imgflip.com/s/meme/One-Does-Not-Simply.jpg'}
    );

    const [allMemeImages, setAllMemeImages] = React.useState(memesArray);

    const newMemeImage = () => {
        const randInt = Math.floor(Math.random() * allMemeImages.length);
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: allMemeImages[randInt]
            }
        });
    };

    return (
        <div className='meme'>
            <input type="text" placeholder="Top text" className='meme-input' />
            <input type="text" placeholder="Bottom text" className='meme-input' />
            <button onClick={newMemeImage} className='meme-button'>
                <h3>Get a new meme image</h3> <img src={pictureFrame} className='meme-button-image'/>
            </button>
            <img src={meme.randomImage} className='meme-image' />
        </div>
    );
};

export default Meme;