import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Topbar from '../../components/Admin/TopBar'
import Footer from '../../components/Admin/Footer'
import Products from '../../pages/views/Admin/Products'
import Categories from '../../pages/views/Admin/Categories'
import DetailProduct from '../../pages/views/Admin/DetailProduct'
import AddForm from '../../pages/views/Admin/AddForm'
import EditProduct from '../../pages/views/Admin/EditProduct'
import EditCategory from '../../pages/views/Admin/EditCategory'
import '../../assets/css/admin/sb-admin-2.min.scss'
import '../../assets/css/admin/main.scss'
import axios from 'axios';
import productApi from '../../api/productApi'
import cateApi from '../../api/cateApi'
import AddCategory from '../views/Admin/AddCategory'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import BlogCategory from '../views/Admin/BlogCategory'
import Blog from '../views/Admin/Blog'
import AddBlogCategory from '../views/Admin/AddBlogCategory'
import blogcateApi from '../../api/blogcateApi'
import blogApi from '../../api/blogApi'
import EditBlogCategory from '../views/Admin/EditBlogCategory'
import AddBlog from '../views/Admin/AddBlog'
import EditBlog from '../views/Admin/EditBlog'
import Dashboard from '../views/Admin/Dashboard'


export default ({ children }) => {
    const [products, setproducts] = useState([]);
    const [categories, setcategories] = useState([]);
    const [blogcategory, setblogcategory] = useState([]);
    const [blogs, setblog] = useState([]);

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
        const getBogCategory = async () => {
            try {
                const { data } = await blogcateApi.getAll();
                setblogcategory(data);
            } catch (error) {

            }
        }
        getBogCategory()
    }, []);

    useEffect(() => {
        const getBog = async () => {
            try {
                const { data } = await blogApi.getAll();
                setblog(data);
            } catch (error) {

            }
        }
        getBog()
    }, []);

    const removeProduct = (id) => {
        console.log(id);
        const newData = products.filter(product => product.id !== id);
        //console.log(newData);
        setproducts(newData);
        productApi.remove(id);
    }

    const onHandleAdd = (product) => {
        console.log(product);
        setproducts([
            ...products,
            product
        ])
        productApi.create(product);
        localStorage.setItem('products', JSON.stringify(products));
    }

    const onHandleUpdate = (updateProduct) => {
        const newProducts = products.map(product => (
            product.id == updateProduct.id ? updateProduct : product  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
        ));
        console.log(updateProduct);
        setproducts(newProducts);
        productApi.update(updateProduct.id, updateProduct)
        //console.log(updateProduct.id);
    }

    const onHandleAddCategory = (category) => {
        //console.log(category);
        setcategories([
            ...categories,
            category
        ])
        localStorage.setItem('categories', JSON.stringify(categories));
        cateApi.create(category);
        //console.log(category);

    }

    const removeCategory = (id) => {
        const newData = categories.filter(cate => cate.id !== id);
        //console.log(newData);
        setcategories(newData);
        cateApi.remove(id);
    }

    const onHandleUpdateCategory = (updateCategory) => {
        //console.log(updateCategory);
        const newCate = categories.map(cate => (
            cate.id == updateCategory.id ? updateCategory : cate  // Nếu cate.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
        ));

        setcategories(newCate);
        cateApi.update(updateCategory.id, updateCategory)

    }
    return (
        <div className="admin-page">
            <Router>
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar />
                            <div className="container-fluid">
                                <Switch>
                                    <Route exact path="/admin/">
                                        <Dashboard />
                                    </Route>
                                    <Route path="/admin/categories">
                                        <Categories categories={categories} onRemove={removeCategory} />
                                    </Route>
                                    <Route path="/admin/products">
                                        <Products products={products} categories={categories} onRemove={removeProduct} />
                                    </Route>

                                    <Route path="/admin/add-product">
                                        <AddForm categories={categories} onAdd={onHandleAdd} />
                                    </Route>
                                    <Route path="/admin/add-category">
                                        <AddCategory onAddCategory={onHandleAddCategory} />
                                    </Route>
                                    <Route path="/admin/detail-product/:id">
                                        <DetailProduct products={products} />
                                    </Route>
                                    <Route path="/admin/edit-product/:id">
                                        <EditProduct products={products} categories={categories} onUpdate={onHandleUpdate} />
                                    </Route>
                                    <Route path="/admin/edit-category/:id">
                                        <EditCategory categories={categories} onUpdate={onHandleUpdateCategory} />
                                    </Route>
                                    <Route path="/admin/blog-category">
                                        <BlogCategory blogcategory={blogcategory} />
                                    </Route>
                                    <Route path="/admin/add-blog-category">
                                        <AddBlogCategory />
                                    </Route>
                                    <Route path="/admin/edit-blog-category/:id">
                                        <EditBlogCategory />
                                    </Route>
                                    <Route path="/admin/blog">
                                        <Blog blogs={blogs} />
                                    </Route>
                                    <Route path="/admin/add-blog">
                                        <AddBlog />
                                    </Route>
                                    <Route path="/admin/edit-blog/:id">
                                        <EditBlog blogs={blogs} />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </Router>
        </div>
    )
}

