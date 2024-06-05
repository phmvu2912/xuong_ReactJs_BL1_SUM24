import React, { useState } from 'react'
import styles from './Auth.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import authSchema from '../../schemaValid/authSchema'
import instance from '../../services/axios'

const Register = () => {

  const [statusPassword, setStatusPassword] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(authSchema)
  })

  const navigate = useNavigate()

  const onSubmit = async (user) => {
    // console.log(data)
    try {
      
      await instance.post('register', user);

      const isConfirm = window.confirm('Đăng ký thành công! Bạn có muốn chuyển sang trang đăng nhập?');

      if(isConfirm) {
        navigate('/login');
      }
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
                  <p>ĐĂNG KÝ</p>
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
                    <button>Đăng ký</button>
                  </div>

                  <div className="">
                    <p>Đã có tài khoản? Đăng nhập <Link to="/login">tại đây.</Link></p>
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

export default Register