import memesData from '../../memesData';

import './meme.css';

function getMemeImage() {
  const memesArray = memesData.data.memes;
  const randomNumber = Math.floor(Math.random() * memesArray.length);
  const { url } = memesArray[randomNumber];
  console.log(url);
}

function Meme() {
  return (
    <main>
      <div className='meme--form'>
        <input type='text' className='form--input' placeholder='Top Text' />
        <input type='text' className='form--input' placeholder='Bottom Text' />
        <button className='form--btn' onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}

export default Meme;
