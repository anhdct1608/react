import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">Đinh Anh</div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <Link className="nav-link" to="/admin/">
                    <span>Tổng quan</span>
                </Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">
            </div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/admin/categories">
                    <span>Danh mục</span>
                </Link>
                <Link className="nav-link collapsed" to="/admin/products">
                    <span>Sản phẩm</span>
                </Link>
                <Link className="nav-link collapsed" to="/admin/blog-category">
                    <span>Danh mục bài viết</span>
                </Link>
                <Link className="nav-link collapsed" to="/admin/blog">
                    <span>Bài viết</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                        <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>
        </ul>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
