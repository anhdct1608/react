import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { Editor } from '@tinymce/tinymce-react';
import blogApi from '../../../../api/blogApi';
import blogcateApi from '../../../../api/blogcateApi';
import firebase from '../../../../firebase';
import swal from 'sweetalert';
const EditBlog = ({ }) => {
    const [blog, setblog] = useState([]);
    const [blogs, setblogs] = useState([]);
    const [blogcategory, setblogcategory] = useState([]);
    const { register, handleSubmit, watch, errors } = useForm();
    const [content, setContent] = useState();
    const [date, setDate] = useState();
    let { id } = useParams();
    let history = useHistory();
    useEffect(() => {
        const getBlog = async () => {
            try {
                const { data } = await blogApi.getAll();
                setblogs(data);
                setblog(data.find(blog => blog.id == id))
                setContent(data.find(blog => blog.id == id).content)
                setDate(data.find(blog => blog.id == id).date)
            } catch (error) {

            }
        }
        getBlog()
    }, []);
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


    const onHandleSubmit = (data) => {
        console.log(data.image[0]);
        if (data.image[0] == null) {
            data.id = id;
            const newData = {
                ...data,
                content,
                date,
                image: blog.image
            }
            blogApi.update(id, newData);

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
                        content,
                        date,
                        image: url
                    }
                    console.log(newData);
                    // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                    blogApi.update(id, newData);
                })
            });
        }

        history.push('/admin/blog');
        swal("Sửa thành công!", {
            icon: "success",
        });
    }

    const changeText = (content, editor) => {
        setContent(content);
    };
    return (
        <div className="card shadow mb-4">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sửa bài viết</title>
            </Helmet>
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Sửa bài viết</h6>
            </div>
            <div className="card-body">
                <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="form-group">
                        <label htmlFor="">Tiêu đề</label>
                        <input className="form-control" type="text" hidden placeholder="" name="id" defaultValue={blog.id} ref={register()} />
                        <input className="form-control" type="text" placeholder="" name="title" defaultValue={blog.title} ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,254}$/i })} />
                        <small className="form-text text-danger">
                            {errors.title && errors.title.type === "required" && <span>Hãy nhập tên</span>}
                            {errors.title && errors.title.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                            {errors.title && errors.title.type === "pattern" && <span>zzzz</span>}
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
                        <label htmlFor="">Nội dung</label>
                        <Editor
                            textareaName="content"
                            onEditorChange={changeText}
                            value={blog.content}
                            init={{
                                height: 385,
                                menubar: false,
                            }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mr-2">Cập nhật</button>
                    <Link to="/admin/blog">
                        <a className="btn btn-danger text-white">Trở lại</a>
                    </Link>
                </form>
            </div>
        </div >
    )
}

EditBlog.propTypes = {

}

export default EditBlog
