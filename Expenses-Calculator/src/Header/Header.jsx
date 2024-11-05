import style from './Header.module.css';
import menu from '../assets/menu.png';
import user from '../assets/user.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <header className={style.mainContainer}>
          <button><img src={menu} alt='menu'/></button>
          <h1>Where&apos;s the money gone?</h1>
          <Link to='/profile'><button><img src={user} alt='user'/></button></Link>
        </header>
    </div>
  )
}

export default Header;
