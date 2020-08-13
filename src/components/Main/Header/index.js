import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../../assets/main/img/logo/logo.png';
import eg from '../../../assets/main/img/icon/en.png';
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";


const Header = ({ categories }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    const onHandleSubmit = (data) => {
        console.log(data);
        history.push(`/search/${data.name}`);
    }
    return (
        <div>
            <header className="header-area">
                {/* main header start */}
                <div className="main-header d-none d-lg-block">
                    {/* header top start */}
                    <div className="header-top pt-20 pb-20">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-4 col-sm-9">
                                    <div className="header-top-settings float-none">
                                        <ul className="nav align-items-center">
                                            <li className="language">
                                                <img src="../assets/img/icon/en.png" alt="" />
                                                english
                                                <i className="fa fa-angle-down" />
                                                <ul className="dropdown-list">
                                                    <li><a href="#"><img src={eg} alt="" /> english</a></li>
                                                    <li><a href="#"><img src="img/icon/fr.png" alt="" /> french</a></li>
                                                </ul>
                                            </li>
                                            <li className="curreny-wrap">
                                                $ USD
                                                <i className="fa fa-angle-down" />
                                                <ul className="dropdown-list curreny-list">
                                                    <li><a href="#">$ usd</a></li>
                                                    <li><a href="#"> € Euro</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-3">
                                    <div className="logo text-center">
                                        <a href="index.html">
                                            <img src={logo} alt="Brand Logo" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-9">
                                    <div className="header-top-settings">
                                        <ul className="nav align-items-center">
                                            <li className="account-settings">
                                                <i className="ion-person" />
                                                <ul className="dropdown-list account-list">
                                                    <li><a href="#">my account</a></li>
                                                    <li><a href="#">login register</a></li>
                                                    <li><a href="#">wishlist</a></li>
                                                    <li><a href="#">checkout</a></li>
                                                </ul>
                                            </li>
                                            <li className="mini-cart-wrap">
                                                <span><i className="ion-bag" />
                                                    <span className="notification">2</span>
                                                </span>
                                                <ul className="cart-list">
                                                    <li>
                                                        <div className="cart-img">
                                                            <a href="product-details.html"><img src="img/cart/cart-1.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="cart-info">
                                                            <h4><a href="product-details.html">simple product</a></h4>
                                                            <span className="cart-qty">Qty: 1</span>
                                                            <span>$60.00</span>
                                                        </div>
                                                        <div className="del-icon">
                                                            <i className="fa fa-times" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="cart-img">
                                                            <a href="product-details.html"><img src="img/cart/cart-2.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="cart-info">
                                                            <h4><a href="product-details.html">virtual product</a></h4>
                                                            <span className="cart-qty">Qty: 2</span>
                                                            <span>$100.00</span>
                                                        </div>
                                                        <div className="del-icon">
                                                            <i className="fa fa-times" />
                                                        </div>
                                                    </li>
                                                    <li className="mini-cart-price">
                                                        <span className="subtotal">subtotal : </span>
                                                        <span className="subtotal-price ml-auto">$110.00</span>
                                                    </li>
                                                    <li>
                                                        <div className="mini-cart-button">
                                                            <a className="check-btn" href="cart.html">View Cart</a>
                                                            <a className="check-btn" href="checkout.html">checkout</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="header-search-box">
                                                <button><i className="ion-ios-search-strong" /></button>
                                                <div className="search-box">
                                                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                                                        <input type="text" placeholder="Search Here" name="name" ref={register()} />
                                                        <button className="search-btn"><i className="ion-ios-search-strong" /></button>
                                                    </form>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* header top end */}
                    {/* header navigation start */}
                    <div className="header-navigation sticky">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 d-none d-lg-block">
                                    {/* main menu start */}
                                    <div className="main-menu-area">
                                        <div className="main-menu main-menu__style-2 d-flex justify-content-center">
                                            {/* main menu navbar start */}
                                            <nav className="desktop-menu">
                                                <ul>
                                                    <li><Link to="/" href="index.html">Trang chủ</Link></li>
                                                    <li><Link to="/about">Giới thiệu</Link></li>
                                                    <li><Link to="/shop">Sản phẩm <i className="fa fa-angle-down" /></Link>
                                                        <ul className="dropdown">
                                                            {categories.map(({ id, name }, index) => (
                                                                <li key={index}><Link to={`/category-product/${id}`}>{name}<i className="fa" /></Link></li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                    <li><Link to="/blog">Bài viết <i className="fa" /></Link>
                                                    </li>
                                                    <li><Link to="/contact" href="contact-us.html">Liên hệ</Link></li>
                                                </ul>
                                            </nav>
                                            {/* main menu navbar end */}
                                        </div>
                                    </div>
                                    {/* main menu end */}
                                </div>
                                <div className="col-12 d-block d-lg-none">
                                    <div className="mobile-menu" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* header navigation end */}
                </div>
                {/* main header start */}
                {/* mobile header start */}
                <div className="mobile-header d-lg-none d-md-block sticky">
                    {/*mobile header top start */}
                    <div className="container custom-container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="mobile-header-top">
                                    <div className="header-top-settings float-none">
                                        <ul className="nav align-items-center justify-content-center">
                                            <li className="language">
                                                <img src="img/icon/en.png" alt="" />
                  english
                  <i className="fa fa-angle-down" />
                                                <ul className="dropdown-list">
                                                    <li><a href="#"><img src="img/icon/en.png" alt="" /> english</a></li>
                                                    <li><a href="#"><img src="img/icon/fr.png" alt="" /> french</a></li>
                                                </ul>
                                            </li>
                                            <li className="curreny-wrap">
                                                $ USD
                  <i className="fa fa-angle-down" />
                                                <ul className="dropdown-list curreny-list">
                                                    <li><a href="#">$ usd</a></li>
                                                    <li><a href="#"> € Euro</a></li>
                                                </ul>
                                            </li>
                                            <li className="account-settings">
                                                <i className="ion-person" />
                                                <ul className="dropdown-list account-list">
                                                    <li><a href="#">my account</a></li>
                                                    <li><a href="#">login register</a></li>
                                                    <li><a href="#">wishlist</a></li>
                                                    <li><a href="#">checkout</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="mobile-main-header">
                                    <div className="mobile-logo">
                                        <a href="index.html">
                                            <img src="img/logo/logo.png" alt="Brand Logo" />
                                        </a>
                                    </div>
                                    <div className="mobile-menu-toggler">
                                        <div className="mini-cart-wrap">
                                            <a href="cart.html">
                                                <span className="mobile-cart-btn"><i className="ion-bag" />
                                                    <span className="notification">2</span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="mobile-menu-btn">
                                            <div className="off-canvas-btn">
                                                <i className="ion-android-menu" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* mobile header top start */}
                </div>
                {/* mobile header end */}
            </header>

        </div>
    )
}

Header.propTypes = {

}

export default Header
