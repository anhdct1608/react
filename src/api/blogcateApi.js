import URL from "./axiosHttp";

const getAll = () => {
    return URL.get("/blog_category");
};

const get = id => {
    return URL.get(`/blog_category/${id}`);
};

const create = data => {
    return URL.post("/blog_category", data);
};

const update = (id, data) => {
    return URL.put(`/blog_category/${id}`, data);
};

const remove = id => {
    return URL.delete(`/blog_category/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};