import style from './Profile.module.css'
import user from '../assets/arrow.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_INCOME } from '../store/Actions/ExpensesActions';
import { SET_NAME } from '../store/Actions/ExpensesActions';

const Profile = () => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(SET_NAME(e.target.name.value));
        dispatch(SET_INCOME(e.target.income.value));
    }
  return (
    <div>
        <Link to='/' className={style.arrowBtn}><img className={style.arrow} src={user}/></Link>
        <h1 className={style.profile}>Profile</h1>
        <form className={style.main} onSubmit={handleSubmit}>
            <label className={style.name}>
                Name:
                <input type="text" name="name" />
            </label>
            <label className={style.income}>
                Your monthly income: 
                <input type="number" name="income" />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Profile
