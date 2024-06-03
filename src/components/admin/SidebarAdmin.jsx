import React from 'react'
import styles from './sidebar.module.scss'
import { NavLink } from 'react-router-dom'

const SidebarAdmin = () => {
    return (
        <>
            <aside>
                <div className={styles.groupItems}>
                    <div className={styles.itemsTop}>
                        <div className="logo text-center mb-2">
                            <b>ADMINISTRATOR</b>
                        </div>

                        <ul className={styles.links}>
                            <li>
                                <NavLink to='/admin' className={({ isActive }) => isActive ? styles.active : styles.path }>Trang quản lý</NavLink>
                            </li>
                            <li>
                                <NavLink to='/admin/products' className={({ isActive }) => isActive ? styles.active : styles.path }>Quản lý sản phẩm</NavLink>
                            </li>
                            <li>
                                <NavLink to='/admin/users' className={({ isActive }) => isActive ? styles.active : styles.path }>Quản lý người dùng</NavLink>
                            </li>
                            {/* <li>
                                <NavLink className={({ isActive }) => isActive ? styles.active : styles.path }></NavLink>
                            </li> */}
                        </ul>
                    </div>



                    <div className={styles.itemsBot}>
                        <a href="">Logout</a>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SidebarAdmin