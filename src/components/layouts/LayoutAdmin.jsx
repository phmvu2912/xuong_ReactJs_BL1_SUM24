import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
import HeaderAdmin from '../admin/HeaderAdmin'
import SidebarAdmin from '../admin/SidebarAdmin'

const LayoutAdmin = () => {
  return (
    <div className={styles.bodyContent}>
      <div className={styles.admin}>
        <div className={styles.groupContent}>
          <div className={styles.contentLeft}>
            <SidebarAdmin />
          </div>

          <div className={styles.contentRight}>
            <HeaderAdmin />
            <Outlet />
          </div>
        </div>



      </div>
    </div>
  )
}

export default LayoutAdmin