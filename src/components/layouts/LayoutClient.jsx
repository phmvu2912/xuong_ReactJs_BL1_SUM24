import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderClient from '../client/header/HeaderClient'
import FooterClient from '../client/footer/FooterClient'

const LayoutClient = () => {
    return (
        <>
            <HeaderClient />

            <main className='my-4'>
                <div className="container">
                    <Outlet />
                </div>

                {/*   */}

            </main>

            <FooterClient />
        </>
    )
}

export default LayoutClient