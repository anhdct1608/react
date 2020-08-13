import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <div>
            <footer className="footer-wrapper">
                {/* footer bottom area start */}
                <div className="footer-widget-area bg-black pt-98 pb-94 pb-lg-70 pb-md-70 pt-sm-50 pb-sm-22">
                    <div className="container custom-container">
                        <div className="row">
                            {/* widget item start */}
                            <div className="col-xl-2 col-lg-4 col-sm-6 order-5 order-lg-1">
                                <div className="footer-widget-item">
                                    <div className="footer-copyright">
                                        <div className="footer-logo">
                                            <a href="index.html">
                                                <img src="img/logo/logo-footer.png" alt="Footer Logo" />
                                            </a>
                                        </div>
                                        <div className="copyright-text copyright-text__style-1">
                                            <p>Copyright © 2019 <a href="index.html">Gemma</a> All right reserved</p>
                                        </div>
                                    </div>
                                </div>
                            </div>  {/* widget item end */}
                            {/* widget item start */}
                            <div className="col-xl-2 col-lg-4 col-sm-6 order-1 order-lg-2">
                                <div className="footer-widget-item">
                                    <div className="footer-widget-title">
                                        <h4>INFORMATION</h4>
                                    </div>
                                    <div className="footer-widget-body">
                                        <ul className="useful-links">
                                            <li><a href="#">about us</a></li>
                                            <li><a href="#">Delivery infomation</a></li>
                                            <li><a href="#">Terms &amp; Conditions</a></li>
                                            <li><a href="#">Frequently Questions</a></li>
                                            <li><a href="#">Services</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>  {/* widget item end */}
                            {/* widget item start */}
                            <div className="col-xl-2 col-lg-4 col-sm-6 order-2 order-lg-3">
                                <div className="footer-widget-item">
                                    <div className="footer-widget-title">
                                        <h4>MY ACCOUNT</h4>
                                    </div>
                                    <div className="footer-widget-body">
                                        <ul className="useful-links">
                                            <li><a href="my-account.html">My Account</a></li>
                                            <li><a href="cart.html">Shopping cart</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="contact-us.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>  {/* widget item end */}
                            {/* widget item start */}
                            <div className="col-xl-2 col-lg-4 col-sm-6 order-3 order-lg-4">
                                <div className="footer-widget-item">
                                    <div className="footer-widget-title">
                                        <h4>QUICK LINKS</h4>
                                    </div>
                                    <div className="footer-widget-body">
                                        <ul className="useful-links">
                                            <li><a href="#">Brands</a></li>
                                            <li><a href="#">Gift Vouchers</a></li>
                                            <li><a href="#">Affiliates</a></li>
                                            <li><a href="#">Specials</a></li>
                                            <li><a href="#">Frequently Questions</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>  {/* widget item end */}
                            {/* widget item start */}
                            <div className="col-xl-2 col-lg-4 col-sm-6 order-4 order-lg-5">
                                <div className="footer-widget-item">
                                    <div className="footer-widget-title">
                                        <h4>contact us</h4>
                                    </div>
                                    <div className="footer-widget-body">
                                        <ul className="location">
                                            <li><i className="icon ion-ios-home-outline" /> 169-C, Technohub, Dubai Silicon.</li>
                                            <li><i className="icon ion-ios-telephone-outline" /> +880123456789</li>
                                            <li><i className="icon ion-ios-email-outline" /> example@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>  {/* widget item end */}
                            {/* widget item start */}
                            <div className="col-xl-2 col-lg-4 col-sm-6 order-6">
                                <div className="footer-widget-item">
                                    <div className="footer-widget-title">
                                        <h4>social site</h4>
                                    </div>
                                    <div className="footer-widget-body">
                                        <div className="footer-social-link">
                                            <a href="#"><i className="fa fa-facebook" /></a>
                                            <a href="#"><i className="fa fa-twitter" /></a>
                                            <a href="#"><i className="fa fa-instagram" /></a>
                                            <a href="#"><i className="fa fa-pinterest" /></a>
                                            <a href="#"><i className="fa fa-rss" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>  {/* widget item end */}
                        </div>
                    </div>
                </div>
                {/* footer bottom area end */}
            </footer>

        </div>
    )
}

Footer.propTypes = {

}

export default Footer
