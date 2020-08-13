import React from 'react'
import PropTypes from 'prop-types'

const Contact = props => {
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
                                        <h1>contact</h1>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">contact us</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* breadcrumb area end */}
                {/* contact area start */}
                <div className="contact-area pt-96 pt-sm-48 pb-100 pb-md-82 pb-sm-14">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-message">
                                    <h2>tell us your project</h2>
                                    <form id="contact-form" action="https://demo.hasthemes.com/gemma-v1/gemma/assets/php/mail.php" method="post" className="contact-form">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <input name="first_name" placeholder="Name *" type="text" required />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <input name="phone" placeholder="Phone *" type="text" required />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <input name="email_address" placeholder="Email *" type="text" required />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <input name="contact_subject" placeholder="Subject *" type="text" />
                                            </div>
                                            <div className="col-12">
                                                <div className="contact2-textarea text-center">
                                                    <textarea placeholder="Message *" name="message" className="form-control2" required defaultValue={""} />
                                                </div>
                                                <div className="contact-btn">
                                                    <button className="btn btn__bg" type="submit">Send Message</button>
                                                </div>
                                            </div>
                                            <div className="col-12 d-flex justify-content-center">
                                                <p className="form-messege" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-info mt-md-94 mt-sm-48">
                                    <h2>contact us</h2>
                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum
                                    est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum
              formas human.</p>
                                    <ul>
                                        <li><i className="fa fa-fax" /> Address : No 40 Baria Sreet 133/2 NewYork City</li>
                                        <li><i className="fa fa-phone" /> info@yourdomain.com</li>
                                        <li><i className="fa fa-envelope-o" /> +88013245657</li>
                                    </ul>
                                    <div className="working-time">
                                        <h3>Working hours</h3>
                                        <p><span>Monday – Saturday:</span>08AM – 22PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

Contact.propTypes = {

}

export default Contact
