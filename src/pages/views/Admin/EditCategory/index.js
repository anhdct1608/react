import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import firebase from '../../../../firebase';
import swal from 'sweetalert';

const EditCategory = ({ categories, onUpdate }) => {
    let { id } = useParams();
    let history = useHistory();
    const category = categories.find(cate => cate.id == id);
    const { register, handleSubmit, watch, errors } = useForm();

    const onHandleSubmit = (data) => {
        console.log(data.image[0]);
        if (data.image[0] == null) {
            data.id = id;
            const newData = {
                ...data,
                image: category.image
            }
            console.log(newData);
            onUpdate(newData)
        } else {
            let file = data.image[0];
            // tạo reference chứa ảnh trên firesbase
            let storageRef = firebase.storage().ref(`images/${file.name}`);
            // đẩy ảnh lên đường dẫn trên
            storageRef.put(file).then(function () {
                storageRef.getDownloadURL().then((url) => {
                    console.log(url);
                    data.id = id;
                    // Tạo object mới chứa toàn bộ thông tin từ input
                    const newData = {
                        ...data,
                        image: url
                    }
                    console.log(newData);
                    // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                    onUpdate(newData)
                })
            });
        }

        history.push('/admin/categories');
        swal("Sửa thành công!", {
            icon: "success",
        });

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
                        <input className="form-control" type="text" placeholder="" name="name" defaultValue={category.name} ref={register({ required: true, minLength: 2 })} aria-describedby="nameHelp" />
                        <small id="imageHelp" className="form-text text-danger">
                            {errors.name && errors.name.type === "required" && <span>Hãy nhập tên</span>}
                            {errors.name && errors.name.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 2 ký tự</span>}
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="productPrice">Ảnh sản phẩm</label>
                        <div className="input-group">
                            <div className="custom-file">
                                <input type="file"
                                    className="custom-file-input"
                                    id="inputGroupFile02"
                                    name="image"
                                    ref={register()}
                                />
                                <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                                <small id="imageHelp" className="form-text text-danger">{errors.image && <span>Ảnh không được để trống</span>}</small>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Mô tả ngắn</label>
                        <input className="form-control" type="text" placeholder="" defaultValue={category.description} name="description" ref={register({ required: true })} />
                        <small id="imageHelp" className="form-text text-danger">{errors.description && <span>Mô tả không được để trống</span>}</small>
                    </div>
                    <button type="submit" className="btn btn-primary mr-2">Cập nhật</button>
                    <Link to="/admin/categories">
                        <a className="btn btn-danger text-white">Trở lại</a>
                    </Link>
                </form>
            </div>
        </div >
    )
}

EditCategory.propTypes = {

}

export default EditCategory
