import React from 'react'
import styles from './banner.module.scss';
import banner from '../../../assets/images/dashboard_banner.png'

const Banner = () => {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.bannerLeft}>
                    <h1>Online catalog management tool</h1>
                    <p>Skyrocket your online store conversion rate the customer experience with visual merchandising.</p>
                    <div className={styles.actions}>
                        <button>Book a Demo</button>
                        <button>Ask a Question</button>
                    </div>
                </div>
                <div className={styles.bannerRight}>
                    <img src={banner} alt width="650px" height="536px" />
                </div>
            </div>
        </>
    )
}

export default Banner