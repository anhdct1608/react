import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from "react-router-dom";
import swal from 'sweetalert';
import blogcateApi from '../../../../api/blogcateApi'

const BlogCategory = ({ }) => {
    const [blogcategory, setblogcategory] = useState([]);
    useEffect(() => {
        const getBogCategory = async () => {
            try {
                const { data } = await blogcateApi.getAll();
                setblogcategory(data);
            } catch (error) {

            }
        }
        getBogCategory()
    }, []);

    let history = useHistory();
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
                    blogcateApi.remove(id);
                    const newData = blogcategory.filter(cate => cate.id !== id);
                    setblogcategory(newData);
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
                    <h6 className="m-0 font-weight-bold text-primary">Danh mục bài viết</h6>
                </div>
                <div className="card-body">
                    <Link to="/admin/add-blog-category">
                        <button className="btn btn-primary">Thêm</button>
                    </Link>

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Tùy chọn</th>
                                    <th>{}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogcategory.map(({ id, name }, index) => (
                                    <tr id={'row-' + id} key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{name}</td>
                                        <td>
                                            <Link to={`/admin/edit-blog-category/${id}`} className="btn btn-primary">Sửa</Link> &nbsp;
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

BlogCategory.propTypes = {

}

export default BlogCategory
