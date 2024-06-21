import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.scss';
import brand1 from '../../../assets/images/sup1.png';
import brand2 from '../../../assets/images/sup2.png';
import brand3 from '../../../assets/images/sup3.png';
import brand4 from '../../../assets/images/sup4.png';
import brand5 from '../../../assets/images/sup5.png';
import iconTick from '../../../assets/images/icon-tick.png';
import imgFooter from '../../../assets/images/imgFooter2.png';
import logo from '../../../assets/images/logo.png';
import sm1 from '../../../assets/images/linkedin.png';
import sm2 from '../../../assets/images/facebook.png';
import sm3 from '../../../assets/images/instagram.png';




const FooterClient = () => {
    return (
        <>
            <footer>
                <div class={styles.handleGrid}>
                    <div class={styles.innerFooter}>
                        <p class={styles.heading}>
                            All eCommerce CMS platforms supported
                        </p>

                        <p className={styles.subHeading}>
                            Magento 2, Shopify, WooCommerce, BigCommerce, Opencart and more.
                        </p>

                        <div className={styles.brands}>
                            <div className={styles.item}>
                                <img src={brand1} alt="" />
                            </div>

                            <div className={styles.item}>
                                <img src={brand2} alt="" />
                            </div>

                            <div className={styles.item}>
                                <img src={brand3} alt="" />
                            </div>

                            <div className={styles.item}>
                                <img src={brand4} alt="" />
                            </div>

                            <div className={styles.item}>
                                <img src={brand5} alt="" />
                            </div>
                        </div>

                        <div className={styles.bannerFooter}>
                            <div className={styles.inner}>
                                <div className={styles.left}>
                                    <h3 className={styles.heading}>Try Sortler For Free!</h3>

                                    <button>Book a demo</button>

                                    <div className={styles.info}>
                                        <div className={styles.item}>
                                            <img src={iconTick} alt="" />
                                            <p>NO Coding needed, Plug-&-Play.</p>
                                        </div>

                                        <div className={styles.item}>
                                            <img src={iconTick} alt="" />
                                            <p>All eCommerce platforms supported</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.right}>
                                    <img src={imgFooter} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className={styles.subFooter}>
                            <div className={styles.logo}>
                                <img src={logo} alt="" />
                            </div>

                            <ul className={styles.links}>
                               <li>
                                <Link to={''} className={styles.path}>Pricing</Link>
                               </li>
                               <li>
                                <Link to={''} className={styles.path}>Company</Link>
                               </li>
                               <li>
                                <Link to={''} className={styles.path}>Company</Link>
                               </li>
                               <li>
                                <Link to={''} className={styles.path}>Contact us</Link>
                               </li>
                            </ul>

                            <div className={styles.socials}>
                                <img src={sm1} alt="" />
                                <img src={sm2} alt="" />
                                <img src={sm3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterClient