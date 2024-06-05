import React, { useState } from 'react'
import styles from './Auth.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import authSchema from '../../schemaValid/authSchema'
import instance from '../../services/axios'

const Login = () => {

    const [statusPassword, setStatusPassword] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(authSchema)
    })

    const navigate = useNavigate()

    const onSubmit = async (user) => {
        try {

            const { data } = await instance.post('login', user);

            // console.log(data)

            localStorage.setItem('accessToken', data.accessToken)

            alert('Đăng nhập thành công!');
            navigate('/');

        } catch (error) {
            console.log(error)
        }

    }



    return (
        <>
            <div className={styles.center}>
                <div className="container">
                    <div className={styles.authForm}>
                        <div className={styles.left}>
                            <img src="https://picsum.photos/200" alt="" width={`400px`} />
                        </div>

                        <div className={styles.right}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={styles.heading}>
                                    <p>ĐĂNG NHẬP</p>
                                </div>

                                <div className={styles.content}>
                                    {/* <div className={styles.formGroup}>
                                        <label htmlFor="username">Tên người dùng</label>
                                        <input type="text" name="username"
                                            {...register('username', { required: true })}
                                        />
                                        {errors.username?.message && <p className="text-danger">{errors.username?.message}</p>}
                                    </div> */}

                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email"
                                            {...register('email', { required: true })} />
                                        {errors.email?.message && <p className="text-danger">{errors.email?.message}</p>}
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="password">Mật khẩu</label>
                                        <input type={statusPassword ? "text" : "password"} name="password"
                                            {...register('password', { required: true })}
                                        />
                                        {errors.password?.message && <p className="text-danger">{errors.password?.message}</p>}
                                        <p className={styles.showPassword} onClick={() => setStatusPassword(act => !act)}>Hiện thị mật khẩu</p>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <button>Đăng nhập</button>
                                    </div>

                                    <div className="">
                                        <p>Chưa có tài khoản? Đăng ký <Link to="/register">tại đây.</Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login