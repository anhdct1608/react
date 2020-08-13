import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import productApi from '../../../../api/productApi'
import swal from 'sweetalert';

const Categories = ({ categories, onRemove }) => {

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
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Danh mục</h6>
                </div>
                <div className="card-body">
                    <Link to="/admin/add-category">
                        <button className="btn btn-primary">Thêm</button>
                    </Link>

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Ảnh</th>
                                    <th scope="col">Mô tả</th>
                                    <th scope="col">Tùy chọn</th>
                                    <th>{}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map(({ id, name, image, description }, index) => (
                                    <tr id={'row-' + id} key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" style={{ width: '200px', height: 'auto' }} /></td>
                                        <td>{description}</td>
                                        <td>
                                            <Link to={`/admin/edit-category/${id}`} className="btn btn-primary">Sửa</Link> &nbsp;
                                        <button onClick={() => removeElement(id)} type=" button" className="btn btn-danger">Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </div>
    )
}

Categories.propTypes = {

}

export default Categories
