import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderClient from '../client/header/HeaderClient'
import FooterClient from '../client/footer/FooterClient'
import styles from './layout.module.scss'

const LayoutClient = () => {

    const mainColorStyle = {
        backgroundColor: location.pathname === '/' ? '#005461' : '#f2ede6',
    };

    return (
        <>
            <HeaderClient />

            <main style={mainColorStyle}>
                <div className={styles.handleGrid}>
                    <Outlet />
                </div>
            </main>

            <FooterClient />
        </>
    )
}

export default LayoutClient