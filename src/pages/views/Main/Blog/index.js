import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Blog = ({ blogs }) => {
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
                                        <h1>blog</h1>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html">home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">blog no sidebar</li>
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
                            {blogs.map(({ id, title, category_id, date, image }, index) => (

                                <div className="col-md-6">
                                    {/* blog single item start */}
                                    <div className="blog-post-item blog-post-grid mb-30">
                                        <div className="blog-post-thumb">
                                            <Link to={`/detail-blog/${id}`}>
                                                <img width="600px" height="500" src={image} alt="" />
                                            </Link>
                                        </div>
                                        <div className="post-info-wrapper">
                                            <div className="entry-header">
                                                <div className="post-meta">
                                                    <h2 className="entry-title">
                                                        <Link to={`/detail-blog/${id}`}>{title}</Link>
                                                    </h2>
                                                    <div className="post-meta-small">
                                                        <div className="post-author">
                                                            Written by: <Link href="#">Admin</Link>
                                                            <p>Ngày đăng {date}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="entry-summary">

                                            </div>
                                            <Link to={`/detail-blog/${id}`} className="btn btn-read">read more</Link>
                                        </div>
                                    </div> {/* blog single item end */}
                                </div>
                            ))}
                            <div className="col-lg-12">
                                {/* start pagination area */}
                                <div className="paginatoin-area text-center">
                                    <ul className="pagination-box">
                                        <li><a className="Previous" href="#"><i className="ion-ios-arrow-left" /></a></li>
                                        <li className="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a className="Next" href="#"><i className="ion-ios-arrow-right" /></a></li>
                                    </ul>
                                </div>
                                {/* end pagination area */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* blog main wrapper end */}
            </main >

        </div >
    )
}

Blog.propTypes = {

}

export default Blog
