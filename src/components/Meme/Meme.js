import './meme.css';

function Meme() {
  return (
    <main>
      <form className='meme--form'>
        <input type='text' className='form--input' placeholder='Top Text' />
        <input type='text' className='form--input' placeholder='Bottom Text' />
        <button className='form--btn'>Get a new meme image 🖼</button>
      </form>
    </main>
  );
}

export default Meme;
