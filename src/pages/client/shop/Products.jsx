import { Link } from 'react-router-dom'
import star from '../../../assets/images/icon-star.png'
import styles from '../shop/product.module.scss'
import { useContext } from 'react'
import { ProductContext } from '../../../contexts/ProductContext'


const Products = () => {

    const { state, dispatch } = useContext(ProductContext)

    console.log(state);

    return (
        <>
            {/* Heading */}
            <div className={styles.heading}>
                <h2>Find Your Products</h2>

                <div className={styles.filters}>
                    <button type='button'>All Filters</button>

                    <div className={styles.sort}>
                        <p>Sort by: </p>

                        <select>
                            <option value="">Relevency</option>
                            <option value="">Price Low to High</option>
                            <option value="">Price High to Low</option>
                            <option value="">Newest</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                {state.products.map((item, index) => (
                    <div className={styles.card} key={item.id}>
                        <div className={styles.img}>
                            <img src={item.thumbnail} alt={item.title} />
                            <div className={styles.action}>
                                <button>Add to card</button>
                            </div>
                        </div>
                        {/* Category */}
                        <div className={styles.subInfo}>
                            <p className={styles.category}>{item.category ? item.category : 'Chưa phân loại'}</p>
                            <div className={styles.fav}>
                                <i class="fa-solid fa-heart heart-icon"></i>
                            </div>
                        </div>
                        <div className={styles.title}>
                            <Link to={`/products/${item.id}`} className={styles.path}>{item.title}</Link>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.rating}>
                                <img src={star} alt='rating' />
                                <p>{item.rating ? item.rating : '0'}</p>
                            </div>
                            <div className={styles.price}>
                                <b>${item.price}</b>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.loadMore}>
                <button type='button'>Load More</button>
            </div>
        </>
    )
}

export default Products