import React from 'react'
import styles from './header.module.scss'
import { Link, NavLink } from 'react-router-dom'

const HeaderClient = () => {

    

    return (
        <>
            <header>
                <div className="container">
                    <div className={`${styles.headerGroup}`}>
                        <div className="logo">
                            <h1>Logo</h1>
                        </div>

                        <div>
                            <ul className={styles.links}>
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? styles.active : styles.path } to='/'>Trang chủ</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? styles.active : styles.path } to='products'>Sản phẩm</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? styles.active : styles.path } to='about'>Giới thiệu</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? styles.active : styles.path } to='contact'>Liên hệ</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.actions}>
                            {}<Link to='login' className={styles.path} >Tài khoản</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderClient