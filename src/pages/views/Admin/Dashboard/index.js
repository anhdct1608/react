import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom';
import blogApi from '../../../../api/blogApi';
import PropTypes from 'prop-types';
import productApi from '../../../../api/productApi';

const Dashboard = props => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await productApi.getAll();
                setproducts(data);
            } catch (error) {

            }
        }
        getProducts()
    }, []);
    const [blog, setblog] = useState([]);
    useEffect(() => {
        const getlBog = async () => {
            try {
                const { data } = await blogApi.getAll();
                setblog(data);
            } catch (error) {

            }
        }
        getlBog()
    }, []);
    return (
        <div>
            <div className="row">
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Tổng số sản phẩm</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{products.length}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Tổng số bài viết</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{blog.length}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
