import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser';
import NumberFormat from 'react-number-format';
import { Link } from "react-router-dom";
import cateApi from '../../../../api/cateApi';
import productApi from '../../../../api/productApi';

const DetailProduct = ({ products }) => {
    const [categories, setcategories] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
            try {
                const { data } = await cateApi.getAll();
                setcategories(data);
            } catch (error) {

            }
        }
        getCategories()
    }, []);
    let { id } = useParams();
    const product = products.find(product => product.id == id)
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Chi tiết  sản phẩm</title>
            </Helmet>
            <main>
                {/* breadcrumb area start */}
                <div className="breadcrumb-area">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-wrap text-center">
                                    <nav aria-label="breadcrumb">
                                        <h1>shop</h1>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                                            <li className="breadcrumb-item"><a href="/shop">Sản phẩm</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* breadcrumb area end */}
                {/* page main wrapper start */}
                <div className="shop-main-wrapper pt-100 pt-sm-50 pb-62 pb-md-96 pb-sm-48">
                    <div className="container custom-container">
                        <div className="row">
                            {/* sidebar area start */}
                            <div className="col-lg-2 order-2 order-lg-1">
                                <div className="sidebar-wrapper mt-md-60 mt-sm-14">
                                    {/* single sidebar start */}
                                    <div className="sidebar-single">
                                        <div className="sidebar-title">
                                            <h3>categories</h3>
                                        </div>
                                        <div className="sidebar-body">
                                            <ul className="color-list">
                                                {categories.map(({ id, name }, index) => (
                                                    <li><Link to={`/category-product/${id}`}>{name}</Link><span></span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div> {/* single sidebar end */}
                                    {/* single sidebar start */}

                                </div>
                            </div>
                            {/* sidebar area end */}
                            {/* product details wrapper start */}
                            <div className="col-lg-10 order-1 order-lg-2">
                                {/* product details inner end */}
                                <div className="product-details-inner">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="product-large-slider mb-20">
                                                <div className="pro-large-img img-zoom">
                                                    <img src={product.image} alt="" />
                                                </div>
                                            </div>
                                            <div className="pro-nav slick-row-10">
                                                <div className="pro-nav-thumb"><img src="img/product/product-details-img1.jpg" alt="" /></div>
                                                <div className="pro-nav-thumb"><img src="img/product/product-details-img2.jpg" alt="" /></div>
                                                <div className="pro-nav-thumb"><img src="img/product/product-details-img3.jpg" alt="" /></div>
                                                <div className="pro-nav-thumb"><img src="img/product/product-details-img4.jpg" alt="" /></div>
                                                <div className="pro-nav-thumb"><img src="img/product/product-details-img2.jpg" alt="" /></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="product-details-des mt-md-34 mt-sm-34">
                                                <h3>{product.name}</h3>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <div className="pro-review">
                                                        <span>1 review(s)</span>
                                                    </div>
                                                </div>
                                                <div className="pricebox">
                                                    <span className="regular-price"><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} />đ</span>
                                                </div>
                                                {parse(product.details)}
                                                <div className="availability mt-10 mb-20">
                                                    <i className="ion-checkmark-circled" />
                                                    <span>200 in stock</span>
                                                </div>
                                                <div className="quantity-cart-box d-flex align-items-center">
                                                    <div className="quantity">
                                                        <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                                                    </div>
                                                    <div className="action_link">
                                                        <a className="buy-btn" href="#"><i className="ion-bag" />Add to cart</a>
                                                    </div>
                                                </div>
                                                <table className="table table-bordered group-product-table mb-20 mt-26">
                                                    <tbody>
                                                        <tr className="text-center">
                                                            <td>
                                                                <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                                                            </td>
                                                            <td><a href="#">fashion</a></td>
                                                            <td>$120</td>
                                                        </tr>
                                                        <tr className="text-center">
                                                            <td>
                                                                <div className="pro-qty"><input type="text" defaultValue={0} /></div>
                                                            </td>
                                                            <td><a href="#">barber</a></td>
                                                            <td>$100</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="useful-links mt-28">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="ion-ios-shuffle" />compare</a>
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="ion-android-favorite-outline" />wishlist</a>
                                                </div>
                                                <div className="tag-line mt-18">
                                                    <h5>tags:</h5>
                                                    <a href="#">fashion</a>
                                                    <a href="#">barber</a>
                                                </div>
                                                <div className="like-icon mt-20">
                                                    <a className="facebook" href="#"><i className="fa fa-facebook" />like</a>
                                                    <a className="twitter" href="#"><i className="fa fa-twitter" />tweet</a>
                                                    <a className="pinterest" href="#"><i className="fa fa-pinterest" />save</a>
                                                    <a className="google" href="#"><i className="fa fa-google-plus" />share</a>
                                                </div>
                                                <div className="share-icon mt-18">
                                                    <h5>share product:</h5>
                                                    <a href="#"><i className="fa fa-facebook" /></a>
                                                    <a href="#"><i className="fa fa-twitter" /></a>
                                                    <a href="#"><i className="fa fa-pinterest" /></a>
                                                    <a href="#"><i className="fa fa-google-plus" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* product details inner end */}
                                {/* product details reviews start */}
                                <div className="product-details-reviews pt-98 pt-lg-90 pt-md-90 pt-sm-44">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="product-review-info">
                                                <ul className="nav review-tab">
                                                    <li>
                                                        <a className="active" data-toggle="tab" href="#tab_one">description</a>
                                                    </li>
                                                    <li>
                                                        <a data-toggle="tab" href="#tab_two">information</a>
                                                    </li>
                                                    <li>
                                                        <a data-toggle="tab" href="#tab_three">reviews (1)</a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content reviews-tab">
                                                    <div className="tab-pane fade show active" id="tab_one">
                                                        <div className="tab-one">
                                                            <p>{parse(product.description)}</p>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab_two">
                                                        <table className="table table-bordered">
                                                            <tbody>
                                                                <tr>
                                                                    <td>color</td>
                                                                    <td>black, blue, red</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>size</td>
                                                                    <td>L, M, S</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab_three">
                                                        <form action="#" className="review-form">
                                                            <h5>1 review for <span>Chaz Kangeroo Hoodies</span></h5>
                                                            <div className="total-reviews">
                                                                <div className="rev-avatar">
                                                                    <img src="img/about/avatar.jpg" alt="" />
                                                                </div>
                                                                <div className="review-box">
                                                                    <div className="ratings">
                                                                        <span className="good"><i className="fa fa-star" /></span>
                                                                        <span className="good"><i className="fa fa-star" /></span>
                                                                        <span className="good"><i className="fa fa-star" /></span>
                                                                        <span className="good"><i className="fa fa-star" /></span>
                                                                        <span><i className="fa fa-star" /></span>
                                                                    </div>
                                                                    <div className="post-author">
                                                                        <p><span>admin -</span> 30 Nov, 2018</p>
                                                                    </div>
                                                                    <p>Aliquam fringilla euismod risus ac bibendum. Sed sit amet sem
                                                                    varius ante feugiat lacinia. Nunc ipsum nulla, vulputate ut
                                                                    venenatis vitae, malesuada ut mi. Quisque iaculis, dui
                              congue placerat pretium, augue erat accumsan lacus</p>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col">
                                                                    <label className="col-form-label"><span className="text-danger">*</span>
                              Your Name</label>
                                                                    <input type="text" className="form-control" required />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col">
                                                                    <label className="col-form-label"><span className="text-danger">*</span>
                              Your Email</label>
                                                                    <input type="email" className="form-control" required />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col">
                                                                    <label className="col-form-label"><span className="text-danger">*</span>
                              Your Review</label>
                                                                    <textarea className="form-control" required defaultValue={""} />
                                                                    <div className="help-block pt-10"><span className="text-danger">Note:</span> HTML is not translated!
                            </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col">
                                                                    <label className="col-form-label"><span className="text-danger">*</span>
                              Rating</label>
                            &nbsp;&nbsp;&nbsp; Bad&nbsp;
                            <input type="radio" defaultValue={1} name="rating" />
                            &nbsp;
                            <input type="radio" defaultValue={2} name="rating" />
                            &nbsp;
                            <input type="radio" defaultValue={3} name="rating" />
                            &nbsp;
                            <input type="radio" defaultValue={4} name="rating" />
                            &nbsp;
                            <input type="radio" defaultValue={5} name="rating" defaultChecked />
                            &nbsp;Good
                          </div>
                                                            </div>
                                                            <div className="buttons">
                                                                <button className="sqr-btn" type="submit">Continue</button>
                                                            </div>
                                                        </form> {/* end of review-form */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* product details reviews end */}
                                {/* related product area start */}
                                <div className="related-product pt-100 pt-sm-50">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="section-title text-center mb-30 mb-sm-0">
                                                <h2>related product</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="related-product-wrapper">
                                        <div className="gemma-slick-slider-wrap">
                                            <div className="gemma-slick-slider slick-row-15" data-slick="{&quot;slidesToShow&quot;: 4, &quot;slidesToScroll&quot;: 1, &quot;prevArrow&quot;: &quot;.prev-rel&quot;, &quot;nextArrow&quot;: &quot;.next-rel&quot;, &quot;responsive&quot;: [{&quot;breakpoint&quot;: 1200, &quot;settings&quot;:{&quot;slidesToShow&quot;: 3}}, {&quot;breakpoint&quot;: 768, &quot;settings&quot;:{&quot;slidesToShow&quot;: 2}}, {&quot;breakpoint&quot;: 480, &quot;settings&quot;:{&quot;slidesToShow&quot;: 1}}]}">
                                                {/* product single item start */}
                                                <div className="product-item mb-30">
                                                    <div className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img className="pri-img" src="img/product/product-f1.jpg" alt="" />
                                                            <img className="sec-img" src="img/product/product-f2.jpg" alt="" />
                                                        </a>
                                                        <div className="product-action-link">
                                                            <a href="#" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" title="Quick View" data-placement="left"><i className="ion-ios-eye-outline" /></span></a>
                                                            <a href="checkout.html" data-toggle="tooltip" title="Add to Cart" data-placement="left"><i className="ion-bag" /></a>
                                                            <a href="wishlist.html" data-toggle="tooltip" title="Wishlist" data-placement="left"><i className="ion-android-favorite-outline" /></a>
                                                            <a href="compare.html" data-toggle="tooltip" title="Compare" data-placement="left"><i className="ion-ios-shuffle" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="ratings">
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star-outline" /></span>
                                                        </div>
                                                        <h4><a href="product-details.html">Itaque earum</a></h4>
                                                        <div className="price-box">
                                                            <span className="old-price"><del>$90.00</del></span>
                                                            <span className="regular-price">$70.00</span>
                                                        </div>
                                                    </div>
                                                </div> {/* product single item end */}
                                                {/* product single item start */}
                                                <div className="product-item mb-30">
                                                    <div className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img className="pri-img" src="img/product/product-f3.jpg" alt="" />
                                                            <img className="sec-img" src="img/product/product-f4.jpg" alt="" />
                                                        </a>
                                                        <div className="product-action-link">
                                                            <a href="#" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" title="Quick View" data-placement="left"><i className="ion-ios-eye-outline" /></span></a>
                                                            <a href="checkout.html" data-toggle="tooltip" title="Add to Cart" data-placement="left"><i className="ion-bag" /></a>
                                                            <a href="wishlist.html" data-toggle="tooltip" title="Wishlist" data-placement="left"><i className="ion-android-favorite-outline" /></a>
                                                            <a href="compare.html" data-toggle="tooltip" title="Compare" data-placement="left"><i className="ion-ios-shuffle" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="ratings">
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star-outline" /></span>
                                                        </div>
                                                        <h4><a href="product-details.html">Epicuri per</a></h4>
                                                        <div className="price-box">
                                                            <span className="old-price"><del>$70.00</del></span>
                                                            <span className="regular-price">$50.00</span>
                                                        </div>
                                                    </div>
                                                </div> {/* product single item end */}
                                                {/* product single item start */}
                                                <div className="product-item mb-30">
                                                    <div className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img className="pri-img" src="img/product/product-f5.jpg" alt="" />
                                                            <img className="sec-img" src="img/product/product-f6.jpg" alt="" />
                                                        </a>
                                                        <div className="product-action-link">
                                                            <a href="#" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" title="Quick View" data-placement="left"><i className="ion-ios-eye-outline" /></span></a>
                                                            <a href="checkout.html" data-toggle="tooltip" title="Add to Cart" data-placement="left"><i className="ion-bag" /></a>
                                                            <a href="wishlist.html" data-toggle="tooltip" title="Wishlist" data-placement="left"><i className="ion-android-favorite-outline" /></a>
                                                            <a href="compare.html" data-toggle="tooltip" title="Compare" data-placement="left"><i className="ion-ios-shuffle" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="ratings">
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star-outline" /></span>
                                                        </div>
                                                        <h4><a href="product-details.html">Cillum dolore</a></h4>
                                                        <div className="price-box">
                                                            <span className="old-price"><del>$140.00</del></span>
                                                            <span className="regular-price">$120.00</span>
                                                        </div>
                                                    </div>
                                                </div> {/* product single item end */}
                                                {/* product single item start */}
                                                <div className="product-item mb-30">
                                                    <div className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img className="pri-img" src="img/product/product-f7.jpg" alt="" />
                                                            <img className="sec-img" src="img/product/product-f8.jpg" alt="" />
                                                        </a>
                                                        <div className="product-action-link">
                                                            <a href="#" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" title="Quick View" data-placement="left"><i className="ion-ios-eye-outline" /></span></a>
                                                            <a href="checkout.html" data-toggle="tooltip" title="Add to Cart" data-placement="left"><i className="ion-bag" /></a>
                                                            <a href="wishlist.html" data-toggle="tooltip" title="Wishlist" data-placement="left"><i className="ion-android-favorite-outline" /></a>
                                                            <a href="compare.html" data-toggle="tooltip" title="Compare" data-placement="left"><i className="ion-ios-shuffle" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="ratings">
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star-outline" /></span>
                                                        </div>
                                                        <h4><a href="product-details.html">Itaque earum</a></h4>
                                                        <div className="price-box">
                                                            <span className="old-price"><del>$60.00</del></span>
                                                            <span className="regular-price">$70.00</span>
                                                        </div>
                                                    </div>
                                                </div> {/* product single item end */}
                                                {/* product single item start */}
                                                <div className="product-item mb-30">
                                                    <div className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img className="pri-img" src="img/product/product-f9.jpg" alt="" />
                                                            <img className="sec-img" src="img/product/product-f10.jpg" alt="" />
                                                        </a>
                                                        <div className="product-action-link">
                                                            <a href="#" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" title="Quick View" data-placement="left"><i className="ion-ios-eye-outline" /></span></a>
                                                            <a href="checkout.html" data-toggle="tooltip" title="Add to Cart" data-placement="left"><i className="ion-bag" /></a>
                                                            <a href="wishlist.html" data-toggle="tooltip" title="Wishlist" data-placement="left"><i className="ion-android-favorite-outline" /></a>
                                                            <a href="compare.html" data-toggle="tooltip" title="Compare" data-placement="left"><i className="ion-ios-shuffle" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="ratings">
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star" /></span>
                                                            <span><i className="ion-android-star-outline" /></span>
                                                        </div>
                                                        <h4><a href="product-details.html">Itaque earum</a></h4>
                                                        <div className="price-box">
                                                            <span className="old-price"><del>$120.00</del></span>
                                                            <span className="regular-price">$80.00</span>
                                                        </div>
                                                    </div>
                                                </div> {/* product single item end */}
                                            </div>
                                            {/* Start Slider Navigation */}
                                            <div className="gemma-slick-nav">
                                                <button className="prev-rel"><i className="ion-ios-arrow-left" /></button>
                                                <button className="next-rel right"><i className="ion-ios-arrow-right" /></button>
                                            </div> {/* End Slider Navigation */}
                                        </div>
                                    </div>
                                </div>
                                {/* related product area end */}
                            </div>
                            {/* product details wrapper end */}
                        </div>
                    </div>
                </div>
                {/* page main wrapper end */}
            </main>

        </div>
    )
}

DetailProduct.propTypes = {

}

export default DetailProduct
