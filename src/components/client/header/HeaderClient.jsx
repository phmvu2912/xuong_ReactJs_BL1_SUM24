import React from 'react'
import styles from './header.module.scss'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import Banner from '../banner/Banner';

const HeaderClient = () => {

    const navigate = useNavigate()

    const location = useLocation();

    const user = JSON.parse(localStorage.getItem('user'));

    // console.log(location.pathname)

    // ! Logout
    const handleLogout = () => {
        if (user) {
            if (confirm('Bạn có chắc chắn muốn đăng xuất tài khoản khỏi thiết bị này không?')) {
                localStorage.clear();
                navigate('/login');
                alert('Đăng xuất thành công!');
            }
        }
    }

    // ! Styles
    const headerStyle = {
        backgroundColor: location.pathname === '/' ? '#ccdddf' : '#f2ede6',
    };

    return (
        <>
            <header style={headerStyle}>
                <div className={styles.handleGrid}>
                    <div className={styles.headerGroup}>
                        <div className={styles.itemsLeft}>
                            <Link to={'/'} className={styles.logo}>
                                <img src={logo} alt="logo" width="95px" height="30px" />
                            </Link>
                            <nav>
                                <ul>
                                    <li><NavLink to={'products'} className={({ isActive }) => isActive ? styles.active : styles.path}>Products</NavLink></li>
                                    <li><NavLink to={'pricing'} className={({ isActive }) => isActive ? styles.active : styles.path}>Pricing</NavLink></li>
                                    <li><NavLink to={'contact'} className={({ isActive }) => isActive ? styles.active : styles.path}>Contact us</NavLink></li>
                                    <li><NavLink to={'blog'} className={({ isActive }) => isActive ? styles.active : styles.path}>Blog</NavLink></li>
                                    <li><NavLink to={'about'} className={({ isActive }) => isActive ? styles.active : styles.path}>About Us</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.itemsRight}>
                            <div className={styles.actions}>
                                {user ? <b className={styles.logout} onClick={() => handleLogout()}>Logout</b> : <Link to="/login">Login</Link>}
                                
                                <button>Book a demo</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Banner */}

                {location.pathname === '/' ? <Banner /> : ''}


            </header>

        </>
    )
}

export default HeaderClient