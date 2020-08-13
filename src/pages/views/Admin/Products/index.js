import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import NumberFormat from 'react-number-format';

const Products = ({ products, categories, onRemove }) => {
    function removeElement(id) {
        swal({
            title: "Chắc chắn xóa?",
            text: "Khi xóa, sẽ không lấy lại được dữ liệu!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    onRemove(id);
                    swal("Đã xóa!", {
                        icon: "success",
                    });
                } else {
                    swal("Xóa không thành công!");
                }
            });

    }
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Sản phẩm</h6>
            </div>
            <div className="card-body">
                <Link to="/admin/add-product">
                    <button className="btn btn-primary">Thêm</button>
                </Link>

                <div className="table-responsive mt-3">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Danh mục</th>
                                <th scope="col">Ảnh</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Tùy chọn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(({ id, category_id, name, image, price }, index) => (
                                <tr id={'row-' + id} key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td><Link to={`/admin/detail-product/${id}`}>{name}</Link></td>
                                    <td>{categories && categories.map(cate => cate.id == category_id ? cate.name : console.log(cate.id))}</td>
                                    <td><img src={image} alt="" width="200" /></td>
                                    <td><NumberFormat value={price} displayType={'text'} thousandSeparator={true} />đ</td>
                                    <td>
                                        <Link to={`/admin/edit-product/${id}`} className="btn btn-primary">Sửa</Link> &nbsp;
                                        <button onClick={() => removeElement(id)} type=" button" className="btn btn-danger">Xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}

Products.propTypes = {

}

export default Products
