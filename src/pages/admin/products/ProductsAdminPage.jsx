import React from 'react'
import styles from './ProductAdmin.module.scss'
import { Link } from 'react-router-dom'


const ProductsAdminPage = ({ products, onRemove }) => {
  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.heading}>
          <h2>Quản lý sản phẩm</h2>

          <Link to='/admin/products-submit'>Thêm sản phẩm</Link>
        </div>

        <div className={styles.content}>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Ảnh sản phẩm</th>
                <th>Giá sản phẩm</th>
                <th>Mô tả sản phẩm</th>
                <th>Thao tác</th>
              </tr>
            </thead>

            <tbody>
              {products?.map((item, index) => (
                <tr key={index}>
                  <td className='fw-bold'>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    <img src={item.thumbnail} alt={item.title} width={'200px'}/>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td className={styles.actions}>
                    <Link className='btn btn-primary btn-sm my-2' to={`/admin/products-submit/edit/${item.id}`}>Cập nhật</Link>
                    <button type='button' className='btn btn-danger btn-sm mx-1 w-50' onClick={() => onRemove(item.id)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ProductsAdminPage