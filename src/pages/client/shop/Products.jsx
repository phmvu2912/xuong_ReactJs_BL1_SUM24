import React from 'react'
import styles from '../shop/product.module.scss'
import { Link } from 'react-router-dom'

const Products = ({ products }) => {

  // console.log(products);

  return (
    <>
      <h3 className='my-3'>Tất cả sản phẩm</h3>

      <div className={styles.content}>
        {products.map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.thumbnail} alt={item.title} />

            <div className={styles.cardInfo}>
              <b>{item.title}</b>

              <div className={styles.prices}>
                <p>$110</p>

                <del>$200</del>
              </div>
            </div>

            <div className={styles.actions}>
              <Link to={`/products/${item.id}`} className={styles.linkBtn}>Xem chi tiết</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products