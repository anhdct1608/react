import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import blogcateApi from '../../../../api/blogcateApi'

const AddBlogCategory = props => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [valueInput, setvalueInput] = useState({});
    let history = useHistory();

    const onHandleSubmit = (data) => {
        blogcateApi.create(data);
        history.push('/admin/blog-category');
    }

    const encodeImageFileAsURL = (element) => {
        const url = element.target.value;
        const image = document.getElementById('preview-img');
        image.src = url;
    }
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Thêm danh mục bài viết</h6>
            </div>
            <div className="card-body">
                <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="form-group">
                        <label htmlFor="">Tên danh mục bài viết</label>
                        <input className="form-control" type="text" placeholder="" aria-describedby="nameHelp" name="name" ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,54}$/i })} />
                        <small id="nameHelp" className="form-text text-danger">
                            {errors.name && errors.name.type === "required" && <span>Hãy nhập tên</span>}
                            {errors.name && errors.name.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                            {errors.name && errors.name.type === "pattern" && <span>Hãy bỏ khoảng cách ở đầu</span>}
                        </small>
                    </div>
                    <button type="submit" className="btn btn-primary mr-2">Thêm</button>
                    <Link to="/admin/blog-category">
                        <a className="btn btn-danger text-white">Trở lại</a>
                    </Link>
                </form>
            </div>
        </div >
    )
}

AddBlogCategory.propTypes = {

}

export default AddBlogCategory
