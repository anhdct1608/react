import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { Editor } from '@tinymce/tinymce-react';
import firebase from '../../../../firebase';
import swal from 'sweetalert';


const AddForm = ({ categories, onAdd }) => {
    const { register, handleSubmit, errors } = useForm();

    const [details, setDetails] = useState("");
    const [description, setDescription] = useState("");
    let history = useHistory();
    console.log(categories);
    const onHandleSubmit = (data) => {
        console.log(data.image[0]);
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    details,
                    description,
                    image: url
                }
                const today = new Date();
                const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                newData.date = date + " " + time
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAdd(newData)
            })
        });
        history.push('/admin/products');
        swal("Thêm sản phẩm thành công!", {
            icon: "success",
        });
    }

    const changeText = (content, editor) => {
        setDetails(content);
    };
    const changeDescription = (content, editor) => {
        setDescription(content);
    };

    return (

        <div className="card shadow mb-4">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Thêm sản phẩm</title>
                <script type="text/javascript">CKEDITOR.replace('detail');</script>
            </Helmet>
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Thêm sản phẩm</h6>
            </div>
            <div className="card-body">
                <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="form-group">
                        <label htmlFor="">Tên sản phẩm</label>
                        <input className="form-control" type="text" placeholder="" name="name" ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,54}$/i })} />
                        <small className="form-text text-danger">
                            {errors.name && errors.name.type === "required" && <span>Hãy nhập tên</span>}
                            {errors.name && errors.name.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                            {errors.name && errors.name.type === "pattern" && <span>có khoảng cách ở đầu hoặc tên quá dài</span>}
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Giá sản phẩm</label>
                        <input className="form-control" type="number" placeholder="" name="price" ref={register({ required: true, pattern: /^[0-9]{1,10}$/, min: '1' })} />
                        <small className="form-text text-danger">
                            {errors.price && errors.price.type == "required" && <span>Hãy nhập giá</span>}
                            {errors.price && errors.price.type == "min" && <span>Giá phải lớn hơn 1</span>}
                            {errors.price && errors.price.type == "pattern" && <span>Hãy nhập số</span>}
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Giảm giá</label>
                        <input className="form-control" type="number" placeholder="" name="sale_price" ref={register({ pattern: /^[0-9]{1,10}$/, min: '0' })} />
                        <small className="form-text text-danger">
                            {errors.sale_price && errors.sale_price.type == "min" && <span>Giảm giá không được âm</span>}
                            {errors.sale_price && errors.sale_price.type == "pattern" && <span>Hãy nhập số</span>}
                        </small>
                    </div>
                    {/* <div className="form-group">
                        <div htmlFor="">Ảnh</div>
                        <img style={{ width: '200px', height: 'auto', padding: '10px' }} id="preview-img" src='' className="img-fluid" />
                        <input className="form-control" type="text" placeholder="" name="image" ref={register({ required: true })} onChange={encodeImageFileAsURL} />
                        <small id="imageHelp" className="form-text text-danger">{errors.image && <span>Ảnh không được để trống</span>}</small>
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="productPrice">Ảnh sản phẩm</label>
                        <div className="input-group">
                            <div className="custom-file">
                                <input type="file"
                                    className="custom-file-input"
                                    id="inputGroupFile02"
                                    name="image"
                                    ref={register({ required: true })}
                                />
                                <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                                <small id="imageHelp" className="form-text text-danger">{errors.image && <span>Ảnh không được để trống</span>}</small>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Danh mục</label>
                        <select className="form-control" name="category_id" ref={register()}>
                            {categories.map(({ id, name }, index) => (
                                <option id={'row-' + id} key={index} value={id}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Chi tiết</label>
                        {/* <textarea id="detail" name="detail" ref={register()}></textarea> */}
                        <Editor
                            textareaName="details"
                            onEditorChange={changeText}
                            value={details}
                            init={{
                                height: 385,
                                menubar: false,
                            }}
                            ref={register({
                                required: "Vui lòng điền đầy đủ",
                            })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Mô tả</label>
                        {/* <textarea id="detail" name="detail" ref={register()}></textarea> */}
                        <Editor
                            textareaName="description"
                            onEditorChange={changeDescription}
                            value={description}
                            init={{
                                height: 385,
                                menubar: false,
                            }}
                            ref={register({
                                required: "Vui lòng điền đầy đủ",
                            })}
                        />
                    </div>
                    <div className="mt-5">
                        <button type="submit" className="btn btn-primary mr-2">Thêm</button>
                        <Link to="/admin/products">
                            <a className="btn btn-danger text-white">Trở lại</a>
                        </Link>
                    </div>
                </form>
            </div>
        </div >
    )
}

AddForm.propTypes = {

}

export default AddForm
