import React from 'react'
import styles from './HeaderAdmin.module.scss'

const HeaderAdmin = () => {
    return (
        <>
            <header>
                <div className={styles.headerGroup}>
                    <div className={styles.headerLeft}>
                        <b>Administrator</b>

                        <form>
                            <input type="text" placeholder='Nhập sản phẩm, danh mục,...' />
                        </form>

                    </div>

                    <div className={styles.info}>
                        <b>Xin chào, </b>
                        <p>abc</p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderAdmin