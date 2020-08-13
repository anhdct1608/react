import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';
import productApi from '../../../../api/productApi';
import cateApi from '../../../../api/cateApi';

const Home = ({ }) => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await productApi.getlimit8();
                setproducts(data);
            } catch (error) {

            }
        }
        getProducts()
    }, []);
    const [productPrice, setproductPrice] = useState([]);
    useEffect(() => {
        const getProducts2 = async () => {
            try {
                const { data } = await productApi.getshoe();
                setproductPrice(data);
            } catch (error) {

            }
        }
        getProducts2()
    }, []);
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Trang chủ</title>
            </Helmet>
            <main>
                {/* hero slider area start */}
                <section className="hero-slider-area">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-slider-active-2">
                                    <div className="single-slider">
                                        <div className="hero-bg hero-bg__2" style={{ backgroundImage: 'url(img/slider/home3-slider1.jpg)' }}>
                                            <div className="content-inner">
                                                <div className="slider-content slider-content__style-3">
                                                    <h5 className="text-white">gemma shoes shop</h5>
                                                    <h1 className="text-white">Live Life In<br />Like Flyknit Racer</h1>
                                                    <a href="shop.html" className="btn btn-white">shop now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-slider">
                                        <div className="hero-bg hero-bg__2" style={{ backgroundImage: 'url(img/slider/home3-slider2.jpg)' }}>
                                            <div className="content-inner">
                                                <div className="slider-content slider-content__style-3">
                                                    <h5 className="text-white">gemma shoes shop</h5>
                                                    <h1 className="text-white">Air Reinvented The Most <br />Flexible Air Max Ever.</h1>
                                                    <a href="shop.html" className="btn btn-white">shop now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* hero slider area end */}
                {/* home banner statistics start */}
                <section className="banner-statistics">
                    <div className="container custom-container">
                        <div className="row no-gutters">
                            <div className="col-lg-6">
                                <div className="banner-item">
                                    <a href="#">
                                        <img src="img/banner/home3-banner1-1.jpg" alt="" />
                                    </a>
                                    <div className="banner-content-2">
                                        <h3>THE BEST SNEAKERS</h3>
                                        <h4>2019 | THE YEAR IN REVIEW</h4>
                                        <a href="#">shop now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner-item">
                                    <a href="#">
                                        <img src="img/banner/home3-banner1-2.jpg" alt="" />
                                    </a>
                                    <div className="banner-content-2">
                                        <h3>SAVINGS OF UP TO 75% OFF</h3>
                                        <h5>WELCOME TO OUR ONLINE STORE</h5>
                                        <a href="#">shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* home banner statistics end */}
                {/* service features start */}
                <section className="service-features">
                    <div className="container">
                        <div className="service-features-inner service-features-style-2">
                            <div className="single-features-item">
                                <div className="features-icon">
                                    <i className="ion-android-sync" />
                                </div>
                                <div className="features-content">
                                    <h5>Free return</h5>
                                    <p>30 days money back guarantee!</p>
                                </div>
                            </div>
                            <div className="single-features-item">
                                <div className="features-icon">
                                    <i className="ion-social-usd" />
                                </div>
                                <div className="features-content">
                                    <h5>Free Shipping</h5>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                            <div className="single-features-item">
                                <div className="features-icon">
                                    <i className="ion-help-buoy" />
                                </div>
                                <div className="features-content">
                                    <h5>support 24/7</h5>
                                    <p>We support online 24 hours a day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shop-product-wrapper">
                                {/* shop product top wrap start */}
                                <div className="shop-top-bar">
                                    <div className="feature-tab-menu mb-20 pt-20">
                                        <ul className="nav justify-content-center">
                                            <br />
                                            <li><a data-toggle="tab" className="active" href="#one">Sản phẩm mới</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* shop product top wrap start */}
                                {/* product item list start */}
                                <div className="shop-product-wrap grid-view row">
                                    {products.map(({ id, name, category_id, price, image }, index) => (

                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            {/* product grid start */}
                                            <div className="product-item mb-30">
                                                <div className="product-thumb">
                                                    <Link to={`/detail-product/${id}`}>
                                                        <img className="pri-img" src={image} alt="" />

                                                    </Link>
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
                                                    <h4><a href="product-details.html">{name}</a></h4>
                                                    <div className="price-box">
                                                        {/* <span className="old-price"><del>$90.00</del></span> */}
                                                        <span className="regular-price"><NumberFormat value={price} displayType={'text'} thousandSeparator={true} />đ</span>
                                                    </div>
                                                </div>
                                            </div> {/* product grid end */}
                                            {/* product list item end */}
                                            <div className="product-list-item mb-30">
                                                <div className="product-list-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="img/product/product-2.jpg" alt="" />
                                                        <img className="sec-img" src="img/product/product-3.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-content-list">
                                                    <h4><a href="product-details.html">Aliquam lobortis est</a></h4>
                                                    <div className="ratings">
                                                        <span><i className="ion-android-star" /></span>
                                                        <span><i className="ion-android-star" /></span>
                                                        <span><i className="ion-android-star" /></span>
                                                        <span><i className="ion-android-star" /></span>
                                                        <span><i className="ion-android-star" /></span>
                                                    </div>
                                                    <div className="price-box">
                                                        <span className="old-price"><del>$90.00</del></span>
                                                        <span className="regular-price">$70.00</span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis ullam
                      rem, accusantium adipisci officia eaque.</p>
                                                    <div className="product-link">
                                                        <a href="checkout.html" data-toggle="tooltip" title="Add to Cart" data-placement="top" className="add-btn"><i className="ion-bag" />Add to
                        cart</a>
                                                        <a href="wishlist.html" data-toggle="tooltip" title="Wishlist" data-placement="top"><i className="ion-android-favorite-outline" /></a>
                                                        <a href="compare.html" data-toggle="tooltip" title="Compare" data-placement="top"><i className="ion-ios-shuffle" /></a>
                                                        <a href="#" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" title="Quick View" data-placement="top"><i className="ion-ios-eye-outline" /></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                        <hr />
                        <div className="col-lg-12">
                            <div className="shop-product-wrapper">
                                {/* shop product top wrap start */}
                                <div className="shop-top-bar">
                                    <div className="feature-tab-menu mb-20 pt-20">
                                        <ul className="nav justify-content-center">
                                            <br />
                                            <li><a data-toggle="tab" className="active" href="#one">Sản phẩm đắt</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* shop product top wrap start */}
                                {/* product item list start */}
                                <div className="shop-product-wrap grid-view row">
                                    {productPrice.map(({ id, name, category_id, price, image }, index) => (
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            {/* product grid start */}
                                            <div className="product-item mb-30">
                                                <div className="product-thumb">
                                                    <Link to={`/detail-product/${id}`}>
                                                        <img className="pri-img" src={image} alt="" />

                                                    </Link>
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
                                                    <h4><a href="product-details.html">{name}</a></h4>
                                                    <div className="price-box">
                                                        {/* <span className="old-price"><del>$90.00</del></span> */}
                                                        <span className="regular-price"><NumberFormat value={price} displayType={'text'} thousandSeparator={true} />đ</span>
                                                    </div>
                                                </div>
                                            </div> {/* product grid end */}
                                            {/* product list item end */}
                                            <div className="product-list-item mb-30">
                                                <div className="product-list-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="img/product/product-2.jpg" alt="" />
                                                        <img className="sec-img" src="img/product/product-3.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-content-list">
                                                    <h4><a href="product-details.html">Aliquam lobortis est</a></h4>
                                                    <div className="ratings">
                                                        <span><i className="ion-android-star" /></span>
                                                        <span><i className="ion-android-star" /></span>
                                                        <span><i className="ion-android-star" /></span>
                                                        <span><i className="ion-android-star" /></span>
                                                        <span><i className="ion-android-star" /></span>
                                                    </div>
                                                    <div className="price-box">
                                                        <span className="old-price"><del>$90.00</del></span>
                                                        <span className="regular-price">$70.00</span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis ullam
                      rem, accusantium adipisci officia eaque.</p>
                                                    <div className="product-link">
                                                        <a href="checkout.html" data-toggle="tooltip" title="Add to Cart" data-placement="top" className="add-btn"><i className="ion-bag" />Add to
                        cart</a>
                                                        <a href="wishlist.html" data-toggle="tooltip" title="Wishlist" data-placement="top"><i className="ion-android-favorite-outline" /></a>
                                                        <a href="compare.html" data-toggle="tooltip" title="Compare" data-placement="top"><i className="ion-ios-shuffle" /></a>
                                                        <a href="#" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" title="Quick View" data-placement="top"><i className="ion-ios-eye-outline" /></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature categories section end */}
                {/* call to action area start */}
                <section className="call-to-action call-to-action__bg-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-8 m-auto">
                                <div className="call-action-inner text-center">
                                    <h3 className="text-white">FREE SHIPPING</h3>
                                    <h4>ENJOY SHIPPING WITH OUR COMPLIMENTS*</h4>
                                    <h4>FOR A LIMITED TIME ONLY</h4>
                                    <h5>*Gift Cards excluded</h5>
                                    <a href="#">SHOP MID-SIZE KITS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* call to action area end */}
                {/* on sale & blog section start */}
                <section className="on-sale-area pt-100 pb-92 pb-lg-72 pb-md-70 pt-sm-44 pb-sm-20 pb-xs-14">
                    <div className="container custom-container">
                        <div className="row">
                            {/* on sale area start */}
                            <div className="col-xl-3 col-lg-4">
                                <div className="on-sale-wrapper">
                                    <div className="section-title section-title__2 slick-append mb-38">
                                        <h2>on sale products</h2>
                                        {/* Start Slider Navigation */}
                                        <div className="gemma-slick-nav arrow-top">
                                            <button className="prev-on-sale right"><i className="ion-ios-arrow-left" /></button>
                                            <button className="next-on-sale"><i className="ion-ios-arrow-right" /></button>
                                        </div>
                                        {/* End Slider Navigation */}
                                    </div> {/* section title end */}
                                    <div className="on-sale-slider">
                                        <div className="gemma-slick-slider slick-row-15" data-slick="{&quot;slidesToShow&quot;: 1, &quot;slidesToScroll&quot;: 1, &quot;prevArrow&quot;: &quot;.prev-on-sale&quot;, &quot;nextArrow&quot;: &quot;.next-on-sale&quot;, &quot;responsive&quot;:[{&quot;breakpoint&quot;: 992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2, &quot;arrows&quot;: false}}, {&quot;breakpoint&quot;: 480, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1, &quot;arrows&quot;: false}}]}">
                                            {/* product single item start */}
                                            <div className="product-item">
                                                <div className="product-thumb">
                                                    <a href="detail-product">
                                                        <img className="pri-img" src="img/product/onsale-f1.jpg" alt="" />
                                                        <img className="sec-img" src="img/product/onsale-f2.jpg" alt="" />
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
                                                    <h4><a href="detail-product">Cillum dolore</a></h4>
                                                    <div className="price-box">
                                                        <span className="old-price"><del>$100.00</del></span>
                                                        <span className="regular-price">$90.00</span>
                                                    </div>
                                                    <p className="countdown-text">Hurry up! Offer ends in:</p>
                                                    <div className="product-countdown product-countdown__style-2" data-countdown="2019/04/20" />
                                                </div>
                                            </div> {/* product single item end */}
                                            {/* product single item start */}
                                            <div className="product-item">
                                                <div className="product-thumb">
                                                    <a href="detail-product">
                                                        <img className="pri-img" src="img/product/onsale-f3.jpg" alt="" />
                                                        <img className="sec-img" src="img/product/onsale-f4.jpg" alt="" />
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
                                                    <h4><a href="detail-product">Cillum dolore</a></h4>
                                                    <div className="price-box">
                                                        <span className="old-price"><del>$100.00</del></span>
                                                        <span className="regular-price">$90.00</span>
                                                    </div>
                                                    <p className="countdown-text">Hurry up! Offer ends in:</p>
                                                    <div className="product-countdown product-countdown__style-2" data-countdown="2019/04/15" />
                                                </div>
                                            </div> {/* product single item end */}
                                            {/* product single item start */}
                                            <div className="product-item">
                                                <div className="product-thumb">
                                                    <a href="detail-product">
                                                        <img className="pri-img" src="img/product/onsale-f2.jpg" alt="" />
                                                        <img className="sec-img" src="img/product/onsale-f1.jpg" alt="" />
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
                                                    <h4><a href="detail-product">Cillum dolore</a></h4>
                                                    <div className="price-box">
                                                        <span className="old-price"><del>$100.00</del></span>
                                                        <span className="regular-price">$90.00</span>
                                                    </div>
                                                    <p className="countdown-text">Hurry up! Offer ends in:</p>
                                                    <div className="product-countdown product-countdown__style-2" data-countdown="2019/04/18" />
                                                </div>
                                            </div> {/* product single item end */}
                                        </div>
                                    </div>
                                </div>
                            </div> {/* on sale area start */}
                            {/* blog area start */}
                            <div className="col-xl-9 col-lg-8">
                                <div className="blog-area mt-md-94 mt-sm-46">
                                    <div className="section-title section-title__2 slick-append mb-38">
                                        <h2>latest blogs</h2>
                                        {/* Start Slider Navigation */}
                                        <div className="gemma-slick-nav arrow-top">
                                            <button className="prev-blog right"><i className="ion-ios-arrow-left" /></button>
                                            <button className="next-blog"><i className="ion-ios-arrow-right" /></button>
                                        </div>
                                        {/* End Slider Navigation */}
                                    </div> {/* section title end */}
                                    {/* blog carousel wrapper start */}
                                    <div className="blog-carousel-wrapper">
                                        <div className="gemma-slick-slider slick-row-15" data-slick="{&quot;slidesToShow&quot;: 2, &quot;slidesToScroll&quot;: 1, &quot;prevArrow&quot;: &quot;.prev-blog&quot;, &quot;nextArrow&quot;: &quot;.next-blog&quot;, &quot;rows&quot;: 2, &quot;responsive&quot;:[{&quot;breakpoint&quot;: 1200, &quot;settings&quot;:{&quot;slidesToShow&quot;: 1, &quot;rows&quot;: 2}}, {&quot;breakpoint&quot;:576, &quot;settings&quot;:{&quot;slidesToShow&quot;: 1, &quot;rows&quot;: 1, &quot;arrows&quot;: false}}]}">
                                            {/* blog item start */}
                                            <div className="blog-item mb-30">
                                                <div className="blog-inner">
                                                    <div className="blog-thumb">
                                                        <a href="blog-details.html">
                                                            <img src="img/blog/blog-1.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="blog-content">
                                                        <div className="post-date">
                                                            <span>10</span> jan / 2019
                      </div>
                                                        <h3 className="post-title"><a href="blog-details.html">blog image post</a></h3>
                                                        <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
                                                        Aenean posuere libero eu augue condimentum rhoncus. Praesent hendrerit
                        vitae arcu faucibus</p>
                                                        <a href="blog-details.html" className="read-more">read more</a>
                                                    </div>
                                                </div>
                                            </div> {/* blog item end */}
                                            {/* blog item start */}
                                            <div className="blog-item mb-30">
                                                <div className="blog-inner">
                                                    <div className="blog-thumb">
                                                        <a href="blog-details.html">
                                                            <img src="img/blog/blog-2.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="blog-content">
                                                        <div className="post-date">
                                                            <span>10</span> jan / 2019
                      </div>
                                                        <h3 className="post-title"><a href="blog-details.html">blog image post</a></h3>
                                                        <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
                                                        Aenean posuere libero eu augue condimentum rhoncus. Praesent hendrerit
                        vitae arcu faucibus</p>
                                                        <a href="blog-details.html" className="read-more">read more</a>
                                                    </div>
                                                </div>
                                            </div> {/* blog item end */}
                                            {/* blog item start */}
                                            <div className="blog-item mb-30">
                                                <div className="blog-inner">
                                                    <div className="blog-thumb">
                                                        <a href="blog-details.html">
                                                            <img src="img/blog/blog-3.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="blog-content">
                                                        <div className="post-date">
                                                            <span>10</span> jan / 2019
                      </div>
                                                        <h3 className="post-title"><a href="blog-details.html">blog image post</a></h3>
                                                        <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
                                                        Aenean posuere libero eu augue condimentum rhoncus. Praesent hendrerit
                        vitae arcu faucibus</p>
                                                        <a href="blog-details.html" className="read-more">read more</a>
                                                    </div>
                                                </div>
                                            </div> {/* blog item end */}
                                            {/* blog item start */}
                                            <div className="blog-item mb-30">
                                                <div className="blog-inner">
                                                    <div className="blog-thumb">
                                                        <a href="blog-details.html">
                                                            <img src="img/blog/blog-4.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="blog-content">
                                                        <div className="post-date">
                                                            <span>10</span> jan / 2019
                      </div>
                                                        <h3 className="post-title"><a href="blog-details.html">blog image post</a></h3>
                                                        <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
                                                        Aenean posuere libero eu augue condimentum rhoncus. Praesent hendrerit
                        vitae arcu faucibus</p>
                                                        <a href="blog-details.html" className="read-more">read more</a>
                                                    </div>
                                                </div>
                                            </div> {/* blog item end */}
                                            {/* blog item start */}
                                            <div className="blog-item mb-30">
                                                <div className="blog-inner">
                                                    <div className="blog-thumb">
                                                        <a href="blog-details.html">
                                                            <img src="img/blog/blog-5.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="blog-content">
                                                        <div className="post-date">
                                                            <span>10</span> jan / 2019
                      </div>
                                                        <h3 className="post-title"><a href="blog-details.html">blog image post</a></h3>
                                                        <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
                                                        Aenean posuere libero eu augue condimentum rhoncus. Praesent hendrerit
                        vitae arcu faucibus</p>
                                                        <a href="blog-details.html" className="read-more">read more</a>
                                                    </div>
                                                </div>
                                            </div> {/* blog item end */}
                                            {/* blog item start */}
                                            <div className="blog-item mb-30">
                                                <div className="blog-inner">
                                                    <div className="blog-thumb">
                                                        <a href="blog-details.html">
                                                            <img src="img/blog/blog-6.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="blog-content">
                                                        <div className="post-date">
                                                            <span>10</span> jan / 2019
                      </div>
                                                        <h3 className="post-title"><a href="blog-details.html">blog image post</a></h3>
                                                        <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
                                                        Aenean posuere libero eu augue condimentum rhoncus. Praesent hendrerit
                        vitae arcu faucibus</p>
                                                        <a href="blog-details.html" className="read-more">read more</a>
                                                    </div>
                                                </div>
                                            </div> {/* blog item end */}
                                            {/* blog item start */}
                                            <div className="blog-item mb-30">
                                                <div className="blog-inner">
                                                    <div className="blog-thumb">
                                                        <a href="blog-details.html">
                                                            <img src="img/blog/blog-7.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="blog-content">
                                                        <div className="post-date">
                                                            <span>10</span> jan / 2019
                      </div>
                                                        <h3 className="post-title"><a href="blog-details.html">blog image post</a></h3>
                                                        <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
                                                        Aenean posuere libero eu augue condimentum rhoncus. Praesent hendrerit
                        vitae arcu faucibus</p>
                                                        <a href="blog-details.html" className="read-more">read more</a>
                                                    </div>
                                                </div>
                                            </div> {/* blog item end */}
                                            {/* blog item start */}
                                            <div className="blog-item mb-30">
                                                <div className="blog-inner">
                                                    <div className="blog-thumb">
                                                        <a href="blog-details.html">
                                                            <img src="img/blog/blog-8.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="blog-content">
                                                        <div className="post-date">
                                                            <span>10</span> jan / 2019
                      </div>
                                                        <h3 className="post-title"><a href="blog-details.html">blog image post</a></h3>
                                                        <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
                                                        Aenean posuere libero eu augue condimentum rhoncus. Praesent hendrerit
                        vitae arcu faucibus</p>
                                                        <a href="blog-details.html" className="read-more">read more</a>
                                                    </div>
                                                </div>
                                            </div> {/* blog item end */}
                                        </div>
                                    </div> {/* blog carousel wrapper end */}
                                </div>
                            </div> {/* blog area end */}
                        </div>
                    </div>
                </section>
                {/* on sale & blog section end */}
                {/* neawsletter section start */}
                <section className="newsletter-area bg-gray pt-100 pb-100 pt-sm-50 pb-sm-50">
                    <div className="container container-custom">
                        <div className="row">
                            <div className="col-lg-8 m-auto">
                                <div className="section-title text-center">
                                    <h2 className="newsletter-title">Join Gemma Newsletter</h2>
                                    <p>Subscribe our newsletter for get notification about new updates, information discount</p>
                                </div>
                                <div className="newsletter-inner text-center">
                                    <form id="mc-form">
                                        <input type="email" className="news-field" id="mc-email" autoComplete="off" placeholder="Enter your email address" />
                                        <button className="news-btn" id="mc-submit">subscribe</button>
                                    </form>
                                    {/* mailchimp-alerts Start */}
                                    <div className="mailchimp-alerts">
                                        <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
                                        <div className="mailchimp-success" />{/* mailchimp-success end */}
                                        <div className="mailchimp-error" />{/* mailchimp-error end */}
                                    </div>
                                    {/* mailchimp-alerts end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* neawsletter section end */}
                {/* Instagram Feed Area Start */}
                <div className="instagram-feed-area">
                    <div className="instagram-content-header text-center">
                        <h3>Gemma On Instagram</h3>

                    </div>
                    <div id="scr1"></div>
                    <div id="scr2"></div>
                    <div className="instagram-feed-thumb">
                        <div id="instafeed" className="instagram-carousel" data-userid={6667588161} data-accesstoken="6667588161.1677ed0.705c7b82e16f42b2898cd19e737dc53e">
                        </div>
                    </div>
                </div>
                {/* Instagram Feed Area End */}

            </main>
        </div>
    )
}

Home.propTypes = {

}

export default Home
