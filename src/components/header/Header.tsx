import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/userSlice';
import useTypedSelector from '../../hooks/useTypedSelector';
import './header.css';
import { useState } from 'react';


const Header = () => {
    const dispatch = useDispatch();
    const user = useTypedSelector((state) => state.user);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleLogOut = () => {
        dispatch(logOut());
        setIsDropdownOpen(false)
    }

    return (
        <header className='header'>
            <h1 className='header__title'>Tita's Code Challenge</h1>
            {
                user.name &&

                <div className="avatar">
                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="avatar__button">
                        <img src={user.picture} alt="user picture" className="avatar__image" />
                    </button>
                    <div className={isDropdownOpen ? 'dropdown' : 'dropdown dropdown--hidden'}>
                        <div className="dropdown__info">
                            <img src={user.picture} alt="user picture" className="dropdown__image" />
                            <span>{user.name}</span>
                        </div>
                        <ul className='dropdown__list'>
                            <li className='dropdown__item'>
                                <button className='dropdown__button' onClick={handleLogOut}>Log out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </header>
    )
}

export default Header