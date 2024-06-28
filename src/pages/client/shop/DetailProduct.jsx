import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import styles from './product.module.scss';
import instance from '../../../services/axios';
import starImg from '../../../assets/images/icon-star.png';

const DetailProduct = () => {

    const { state, dispatch } = useContext(ProductContext)

    const [count, setCount] = useState(1)

    const item = state.products;

    // console.log(item.thumbnail)

    const [currentImg, setCurrentImg] = useState()

    const { id } = useParams();

    useEffect(() => {

        (async () => {
            try {

                const { data } = await instance.get(`products/${id}`);

                dispatch({ type: 'SET_PRODUCTS', payload: data })

            } catch (error) {
                console.error(error)
            }
        })()
    }, [])


    // console.log(state);

    // const item = state.products;

    // Tăng số lượng
    const inc = () => {
        const newCount = count + 1;

        setCount(newCount)
    }

    // Giảm số lượng
    const dec = () => {
        const newCount = count - 1;

        setCount(newCount)
    }

    const handleChangeImg = (img) => {
        setCurrentImg(img)
    }

    return (
        <>
            <section className={styles.detailSection}>

                <div className={styles.innerDetail}>
                    <div className={styles.left}>
                        <div className={styles.mainImg}>
                            <img src={currentImg == undefined ? item.thumbnail : currentImg } alt="" />
                            {/* {alert(currentImg)} */}
                        </div>

                        {item.images ?
                            <div className={styles.subImgs}>
                                {item.images.map((img, index) => (
                                    <div className={styles.img} key={index} onClick={() => handleChangeImg(img)}>
                                        <img src={img} alt="sub-img" />
                                    </div>
                                ))}
                            </div>
                            : ''}

                    </div>

                    <div className={styles.right}>
                        <div className={styles.title}>
                            <p>{item.title}</p>
                        </div>

                        <div className={styles.info}>
                            <div className={styles.price}>
                                <b>${item.price}</b>
                            </div>

                            <div className={styles.rating}>
                                <img src={starImg} alt="rating-icon" />
                                <b>{item.rating}</b>
                            </div>
                        </div>

                        <div className={styles.description}>
                            <p>{item.description}</p>
                        </div>

                        <div className={styles.action}>
                            <form action="">
                                <div className={styles.innerAciton}>
                                    {/* Tăng giảm số lg */}
                                    <div className={styles.quantity}>
                                        <input type="text" value={count < 1 ? setCount(1) : count} />

                                        <div className={styles.upDown}>

                                            <b onClick={() => dec()}><i class="fa-solid fa-minus"></i></b>

                                            <b onClick={() => inc()}><i class="fa-solid fa-plus"></i></b>
                                        </div>
                                    </div>


                                    {/* Add to cart */}
                                    <button>Add to Cart</button>
                                </div>

                                {/* Cảnh báo người dùng k đc nhập sl <= 0 */}
                                {count <= 0 ? <span className={styles.warning}>
                                    Sản phẩm cần có số lượng ít nhất là 1 để thêm vào giỏ hàng
                                </span> : ''}

                            </form>
                        </div>

                        <div className={styles.subInfo}>
                            <p>Free 3-5 day shipping • Tool-free assembly • 30-day trial</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default DetailProduct