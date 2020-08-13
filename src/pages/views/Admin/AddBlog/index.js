import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from "react-router-dom";
import swal from 'sweetalert';
import blogApi from '../../../../api/blogApi'
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { Editor } from '@tinymce/tinymce-react';
import blogcateApi from '../../../../api/blogcateApi'
import firebase from '../../../../firebase';

const AddBlog = props => {
    const [blogcategory, setblogcategory] = useState([]);
    useEffect(() => {
        const getBlogCategory = async () => {
            try {
                const { data } = await blogcateApi.getAll();
                setblogcategory(data);
            } catch (error) {

            }
        }
        getBlogCategory()
    }, []);
    const { register, handleSubmit, errors } = useForm();
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    let history = useHistory();
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
                    content,
                    image: url
                }
                const today = new Date();
                const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                newData.date = date + " " + time
                blogApi.create(newData);
                history.push('/admin/blog');
                swal("Thêm danh mục thành công!", {
                    icon: "success",
                });
            })
        });
    }
    const changeText = (content, editor) => {
        setContent(content);
    };
    return (
        <div className="card shadow mb-4">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Thêm bài viết</title>
            </Helmet>
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Thêm bài viết</h6>
            </div>
            <div className="card-body">
                <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="form-group">
                        <label htmlFor="">Tiêu đề</label>
                        <input className="form-control" type="text" placeholder="" name="title" ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,255}$/i })} />
                        <small className="form-text text-danger">
                            {errors.title && errors.title.type === "required" && <span>Hãy nhập tên</span>}
                            {errors.title && errors.title.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                            {errors.title && errors.title.type === "pattern" && <span>Hãy bỏ khoảng cách ở đầu</span>}
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Danh mục</label>
                        <select className="form-control" name="category_id" ref={register()}>
                            {blogcategory.map(({ id, name }, index) => (
                                <option id={'row-' + id} key={index} value={id}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="productPrice">Ảnh bài viết</label>
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
                    {/* <input type="date" name="date" ref={register()} /> */}
                    <div className="form-group">
                        <label htmlFor="">Nội dung</label>
                        {/* <textarea id="detail" name="detail" ref={register()}></textarea> */}
                        <Editor
                            textareaName="content"
                            onEditorChange={changeText}
                            value={content}
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
                        <Link to="/admin/blog">
                            <a className="btn btn-danger text-white">Trở lại</a>
                        </Link>
                    </div>

                </form>
            </div>
        </div >

    )
}

AddBlog.propTypes = {

}

export default AddBlog
