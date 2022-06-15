import './header.css';
import troll from '../../images/troll-face.png';

function Header() {
  return (
    <header>
      <img className='header--img' src={troll} alt='troll-face' />
      <h1 className='header--title'>Meme Generator</h1>

      <h3 className='course--title'>React Course - Project 3</h3>
    </header>
  );
}

export default Header;
