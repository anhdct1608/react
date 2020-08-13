import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useParams, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import blogApi from '../../../../api/blogApi'
import blogcateApi from '../../../../api/blogcateApi'

const Blog = props => {
    const [blog, setblog] = useState([]);
    useEffect(() => {
        const getlBog = async () => {
            try {
                const { data } = await blogApi.getAll();
                setblog(data);
            } catch (error) {

            }
        }
        getlBog()
    }, []);
    const [blogcate, setblogcate] = useState([]);
    useEffect(() => {
        const getlBog = async () => {
            try {
                const { data } = await blogcateApi.getAll();
                setblogcate(data);
            } catch (error) {

            }
        }
        getlBog()
    }, []);
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
                    blogApi.remove(id);
                    const newData = blog.filter(cate => cate.id !== id);
                    setblog(newData);
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
                    <Link to="/admin/add-blog">
                        <button className="btn btn-primary">Thêm</button>
                    </Link>

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th width="300px">Tiêu đề</th>
                                    <th scope="col">Danh mục</th>
                                    <th scope="col">Ảnh</th>
                                    <th scope="col">Ngày đăng</th>
                                    <th scope="col">Tùy chọn</th>
                                    <th>{}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blog.map(({ id, title, category_id, date, image }, index) => (
                                    <tr id={'row-' + id} key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{title}</td>
                                        <td>{blogcate && blogcate.map(cate => cate.id == category_id ? cate.name : console.log(cate.id))}</td>
                                        <td><img src={image} alt="" style={{ width: '200px', height: 'auto' }} /></td>
                                        <td>{date}</td>
                                        <td>
                                            <Link to={`/admin/edit-blog/${id}`} className="btn btn-primary">Sửa</Link> &nbsp;
                                        <button onClick={() => removeElement(id)} type=" button" className="btn btn-danger">Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >

        </div >
    )
}

Blog.propTypes = {

}

export default Blog
