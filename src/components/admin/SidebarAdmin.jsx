import React from 'react'
import styles from './sidebar.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'

const SidebarAdmin = () => {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user'));

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
                                <NavLink to='/admin/' className={({ isActive }) => isActive ? styles.active : styles.path }>Trang quản lý</NavLink>
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
                        <b className='text-danger' onClick={() => handleLogout()}>Logout</b>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SidebarAdmin