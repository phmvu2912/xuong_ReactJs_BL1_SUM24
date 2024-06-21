import React from 'react'
import styles from './homepage.module.scss'
import icon1 from '../../assets/images/Icon.png';
import icon2 from '../../assets/images/Icon-1.png';
import icon3 from '../../assets/images/Icon-2.png';


const HomePage = () => {
  return (
    <>
      <div className={styles.handleGrid}>
        <section className={styles.section1}>
          <div className={styles.heading}>
            <h2>Merchandising to increase sales.</h2>
          </div>
          <div className={styles.content}>
            <div className={styles.colItem}>
              <img src={icon1} alt />
              <b className={styles.info}>
                <h4>Conversion rate skyrockets.</h4>
                <p>Convert more online sales with our visual merchandising interface.</p>
              </b>
            </div>
            <div className={styles.colItem}>
              <img src={icon2} alt />
              <b className={styles.info}>
                <h4>Increase average order value</h4>
                <p>Increase average order value of your online store by 17% with this little trick.</p>
              </b>
            </div>
            <div className={styles.colItem}>
              <img src={icon3} alt />
              <b className={styles.info}>
                <h4>Spend less time for management</h4>
                <p>Let your employees spend less time managing the online selling it.</p>
              </b>
            </div>
          </div>
        </section>
        <section className={styles.section2}>
          <div className={styles.heading}>
            <h2>How Smaller works</h2>
            <p>Smaller is a cloud-based tool for merchandisers and eCommerce professionals.</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomePage