import style from './Header.module.css';
import menu from '../assets/menu.png';
import user from '../assets/user.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <header className={style.mainContainer}>
          <button className={style.headBut}><img src={menu} alt='menu' className={style.headButImg}/></button>
          <h1>Where&apos;s the money gone?</h1>
          <Link to='/profile'><button className={style.headBut}><img src={user} alt='user' className={style.headButImg}/></button></Link>
        </header>
    </div>
  )
}

export default Header;
