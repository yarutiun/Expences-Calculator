import style from './Header.module.css';
import menu from '../assets/menu.png';
import user from '../assets/user.png';

const Header = () => {
  return (
    <div>
        <header className={style.mainContainer}>
          <button><img src={menu} alt='menu'/></button>
          <h1>Where&apos;s the money gone?</h1>
          <button><img src={user} alt='user'/></button>
        </header>
    </div>
  )
}

export default Header;
