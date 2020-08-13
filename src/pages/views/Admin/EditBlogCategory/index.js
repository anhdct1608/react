import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import blogcateApi from '../../../../api/blogcateApi'

const EditBlogCategory = props => {
    const [blogcategory, setblogcategory] = useState([]);
    const [namevalue, setnamevalue] = useState([]);
    useEffect(() => {
        const getBogCategory = async () => {
            try {
                const { data } = await blogcateApi.getAll();
                setblogcategory(data);
                setnamevalue(data.find(cate => cate.id == id))
            } catch (error) {

            }
        }
        getBogCategory()
    }, []);
    let { id } = useParams();
    let history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const onHandleSubmit = (data) => {
        console.log(data);
        blogcateApi.update(id, data);
        history.push('/admin/blog-category');
    }

    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Sửa danh mục</h6>
            </div>
            <div className="card-body">
                <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="form-group">
                        <label htmlFor="">Tên danh mục</label>
                        <input className="form-control" type="text" placeholder="" name="name" defaultValue={namevalue.name} ref={register({ required: true, minLength: 3 })} aria-describedby="nameHelp" />
                        <small id="imageHelp" className="form-text text-danger">
                            {errors.name && errors.name.type === "required" && <span>Hãy nhập tên</span>}
                            {errors.name && errors.name.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                        </small>
                    </div>
                    <button type="submit" className="btn btn-primary mr-2">Cập nhật</button>
                    <Link to="/admin/blog-category">
                        <a className="btn btn-danger text-white">Trở lại</a>
                    </Link>
                </form>
            </div>
        </div >
    )
}

EditBlogCategory.propTypes = {

}

export default EditBlogCategory
