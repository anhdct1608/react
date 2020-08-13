import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser';

const DetailBlog = ({ blogs }) => {
    let { id } = useParams();
    const blog = blogs.find(product => product.id == id)
    return (
        <div>
            <main>
                {/* breadcrumb area start */}
                <div className="breadcrumb-area">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-wrap text-center">
                                    <nav aria-label="breadcrumb">
                                        <h1>Bài viết</h1>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html">Trang chủ</a></li>
                                            <li className="breadcrumb-item"><a href="blog-right-sidebar.html">bài viết</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">{blog.title}</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* breadcrumb area end */}
                {/* blog main wrapper start */}
                <div className="blog-main-wrapper pt-100 pt-sm-50 pb-100 pb-md-94 pb-sm-46">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 order-1">
                                {/* blog single item start */}
                                <div className="blog-post-item blog-post-grid">
                                    <div className="blog-post-thumb">
                                        <img src="assets/img/blog/blog-details-3.jpg" alt="" />
                                    </div>
                                    <div className="post-info-wrapper blog-details">
                                        <div className="entry-header">
                                            <div className="post-meta">
                                                <h2 className="entry-title">{blog.title}</h2>
                                                <div className="post-meta-small">
                                                    <div className="post-author">
                                                        Written by: <a href="#">Admin</a>
                                                        <p>Ngày đăng: {blog.date}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="entry-summary blog-inner-content">
                                            {parse(blog.content)}
                                            <div className="tag-line">
                                                <h5>tag :</h5>
                                                <a href="#">barber</a>,
                  <a href="#">fashion</a>,
                  <a href="#">food</a>,
                </div>
                                            <div className="blog-share-link">
                                                <h5>share :</h5>
                                                <div className="blog-social-icon">
                                                    <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
                                                    <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
                                                    <a href="#" className="pinterest"><i className="fa fa-pinterest" /></a>
                                                    <a href="#" className="google"><i className="fa fa-google-plus" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* blog single item end */}
                                {/* comment area start */}
                                <div className="comment-section pt-98 pt-sm-50">
                                    <h3>03 comment</h3>
                                    <ul>
                                        <li>
                                            <div className="author-avatar">
                                                <img src="assets/img/blog/comment-icon.png" alt="" />
                                            </div>
                                            <div className="comment-body">
                                                <span className="reply-btn"><a href="#">reply</a></span>
                                                <h5 className="comment-author">admin</h5>
                                                <div className="comment-post-date">
                                                    20 nov, 2019 at 9:30pm
                  </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores
                    adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?</p>
                                            </div>
                                        </li>
                                        <li className="comment-children">
                                            <div className="author-avatar">
                                                <img src="assets/img/blog/comment-icon.png" alt="" />
                                            </div>
                                            <div className="comment-body">
                                                <span className="reply-btn"><a href="#">reply</a></span>
                                                <h5 className="comment-author">admin</h5>
                                                <div className="comment-post-date">
                                                    20 nov, 2019 at 9:30pm
                  </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores
                    adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="author-avatar">
                                                <img src="assets/img/blog/comment-icon.png" alt="" />
                                            </div>
                                            <div className="comment-body">
                                                <span className="reply-btn"><a href="#">reply</a></span>
                                                <h5 className="comment-author">admin</h5>
                                                <div className="comment-post-date">
                                                    20 nov, 2019 at 9:30pm
                  </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores
                    adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* comment area end */}
                                {/* start blog comment box */}
                                <div className="blog-comment-wrapper pt-92 pt-sm-44">
                                    <h3>leave a reply</h3>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    <form action="#">
                                        <div className="comment-post-box">
                                            <div className="row">
                                                <div className="col-12">
                                                    <label>comment</label>
                                                    <textarea name="commnet" placeholder="Write a comment" defaultValue={""} />
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4 mb-sm-20">
                                                    <label>Name</label>
                                                    <input type="text" className="coment-field" placeholder="Name" />
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4 mb-sm-20">
                                                    <label>Email</label>
                                                    <input type="text" className="coment-field" placeholder="Email" />
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4 mb-sm-20">
                                                    <label>Website</label>
                                                    <input type="text" className="coment-field" placeholder="Website" />
                                                </div>
                                                <div className="col-12">
                                                    <div className="coment-btn mt-20">
                                                        <input className="btn btn__bg btn__sqr" type="submit" name="submit" defaultValue="post comment" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* start blog comment box */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* blog main wrapper end */}
            </main>

        </div>
    )
}

DetailBlog.propTypes = {

}

export default DetailBlog
