import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './ProductAdmin.module.scss'
import instance from '../../../services/axios';
import { useForm } from 'react-hook-form';
import productSchema from '../../../schemaValid/productSchema';
import { zodResolver } from '@hookform/resolvers/zod';

const ProductForm = ({ onHandIn }) => {

    const { id } = useParams();

    // console.log(id);

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(productSchema)
    });

    // Nếu trên url có tồn tại 'id' thì sẽ fill data vào input
    if (id) {
        useEffect(() => {
            (async () => {
                try {

                    const { data } = await instance.get(`products/${id}`);
                    reset(data)

                } catch (error) {
                    console.log(error)
                }
            })()
        }, [])
    }

    const onSubmit = (product) => {
        onHandIn({...product, id})
    }

    return (
        <>
            <div className={styles.mainContent}>
                <div className={styles.heading}>
                    <h2>{id ? 'Cập nhật bản ghi' : 'Thêm mới bản ghi'}</h2>

                    <Link to='/admin/products'>Quay lại danh sách</Link>
                </div>

                <div className={styles.content}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Title */}
                        <div className={styles.formGroup}>
                            <label htmlFor="title">Tên sản phẩm</label>
                            <input
                                type="text"
                                className={styles.formControl}
                                name='title'
                                id='title'
                                {...register('title', { required: true })}
                            />
                            {/* {errors.title && errors.title.type === 'required' && (
                                <div className="text-danger">Không được bỏ trống!</div>
                            )}
                            {errors.title && errors.title.type === 'minLength' && (
                                <div className="text-danger">Tên sản phẩm phải có ít nhất từ 5 ký tự trở lên!</div>
                            )} */}
                            {errors.title?.message && <p className="text-danger">{errors.title?.message}</p>}
                        </div>

                        {/* Thumbnail */}
                        <div className={styles.formGroup}>
                            <label htmlFor="thumbnail">Đường dẫn ảnh sản phẩm</label>
                            <input
                                type="text"
                                className={styles.formControl}
                                name='thumbnail'
                                id='thumbnail'
                                {...register('thumbnail', { required: true })}
                            />
                            {errors.thumbnail && errors.thumbnail.type === 'required' && (
                                <div className="text-danger">Không được bỏ trống!</div>
                            )}
                            {errors.thumbnail && errors.thumbnail.type === 'minLength' && (
                                <div className="text-danger">Tên sản phẩm phải có ít nhất từ 5 ký tự trở lên!</div>
                            )}
                        </div>

                        {/* Price */}
                        <div className={styles.formGroup}>
                            <label htmlFor="price">Giá sản phẩm</label>
                            <input
                                type="number"
                                className={styles.formControl}
                                name='price'
                                id='price'
                                {...register('price', { required: true, valueAsNumber: true })}
                            />
                            {errors.price && errors.price.type === 'required' && (
                                <div className="text-danger">Không được bỏ trống!</div>
                            )}
                            {errors.price && errors.price.type === 'valueAsNumber' && (
                                <div className="text-danger">Giá sản phẩm phải chỉ chấp nhận giá trị là ký tự số!</div>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="description">Mô tả sản phẩm</label>
                            <textarea
                                rows={6}
                                className={styles.formControl}
                                name='description'
                                id='description'
                                {...register('description')}
                            ></textarea>
                        </div>

                        <div className={styles.btnGroup}>
                            <button type='submit' className='btn btn-primary'>{id ? 'Cập nhật' : 'Thêm mới'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProductForm