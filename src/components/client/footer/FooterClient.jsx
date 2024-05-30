import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.scss';

const FooterClient = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className={styles.footerGroup}>
                        <div className={styles.colItem}>
                            <div className={styles.heading}>
                                <h1>Logo</h1>
                            </div>

                            <div className={styles.items}>
                                <b>Địa chỉ: </b>
                                <p>Nam Từ Liêm - Hà Nội</p>
                            </div>
                        </div>

                        <div className={styles.colItem}>
                            <div className={styles.heading}>
                                <b>Về cửa hàng</b>
                            </div>

                            <div className={styles.items}>
                                <ul>
                                    <li>
                                        <Link className={styles.path} to='/'>Trang chủ</Link>
                                    </li>
                                    <li>
                                        <Link className={styles.path} to='products'>Sản phẩm</Link>
                                    </li>
                                    <li>
                                        <Link className={styles.path} to='about'>Giới thiệu</Link>
                                    </li>
                                    <li>
                                        <Link className={styles.path} to='contact'>Liên hệ</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.colItem}>
                            <div className={styles.heading}>
                                <b>Về chúng tôi</b>
                            </div>

                            <div className={styles.items}>
                                <ul>
                                    <li>
                                        <Link className={styles.path} to='/'>Chính sách đổi trả</Link>
                                    </li>
                                    <li>
                                        <Link className={styles.path} to='contact'>Chính sách bảo mật</Link>
                                    </li>
                                    <li>
                                        <Link className={styles.path} to='products'>Tin tức tuyển dụng</Link>
                                    </li>
                                    <li>
                                        <Link className={styles.path} to='about'>Hệ thống cửa hàng</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.colItem}>
                            <div className={styles.heading}>
                                <b>Đăng ký để nhận thông tin khuyến mãi</b>
                            </div>


                            <form>
                                <input type="text" className={styles.inputForm} placeholder='Nhập địa chỉ email' />
                                <button>Đăng ký</button>
                            </form>

                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.subFooter}>
                    <div className="container">
                        <div className={styles.sFGroup}>
                            <div className="">
                                <b>Copyright - PH34756</b>

                            </div>

                            <div className="">
                                <p>abc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterClient