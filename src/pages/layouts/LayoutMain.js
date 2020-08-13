import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'

//import js from '../../assets/main/js/modernizr-2.8.3.min.js';
import '../../assets/main/img/favicon.ico';
import '../../assets/main/css/vendor.css';
import '../../assets/main/css/color-2.css';

//Views
import About from '../views/Main/About'
import Home from '../views/Main/Home'
import Contact from '../views/Main/Contact';
import Shop from '../views/Main/Shop';
import DetailProduct from '../views/Main/DetailProduct';
import productApi from '../../api/productApi'
import cateApi from '../../api/cateApi'
import blogApi from '../../api/blogApi'
import blogcateApi from '../../api/blogcateApi'
import Blog from '../views/Main/Blog';
import DetailBlog from '../views/Main/DetailBlog';
import CateProduct from '../views/Main/CateProduct';
import Search from '../views/Main/Search';



export default ({ children }) => {
    const [products, setproducts] = useState([]);
    const [productsLimit, setproductsLimit] = useState([]);
    const [categories, setcategories] = useState([]);
    const [blogs, setblogs] = useState([]);
    const [blogcate, setblogcate] = useState([]);

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

    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await productApi.getlimit8();
                setproductsLimit(data);
            } catch (error) {

            }
        }
        getProducts()
    }, []);

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


    useEffect(() => {
        const getlBog = async () => {
            try {
                const { data } = await blogApi.getAll();
                setblogs(data);
            } catch (error) {

            }
        }
        getlBog()
    }, []);

    useEffect(() => {
        const getlBog = async () => {
            try {
                const { data } = await blogcateApi.getAll();
                setblogcate(data);
            } catch (error) {

            }
        }
        getlBog()
    }, []);

    return (
        <div className="user-page">
            <link href="https://fonts.googleapis.com/css?family=Arimo:400,700%7CMontserrat:300,400,400i,500,500i,600,700,800" rel="stylesheet"></link>
            <Header categories={categories} />
            <Route path="/" exact>
                <Home products={productsLimit} />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/blog">
                <Blog blogs={blogs} />
            </Route>
            <Route path="/detail-blog/:id">
                <DetailBlog blogs={blogs} />
            </Route>
            <Route path="/shop">
                <Shop products={products} />
            </Route>
            <Route path="/search/:name">
                <Search />
            </Route>
            <Route path="/detail-product/:id">
                <DetailProduct products={products} />
            </Route>
            <Route path="/category-product/:id">
                <CateProduct products={products} />
            </Route>
            <Footer />
        </div>
    )
}
