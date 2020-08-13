import URL from "./axiosHttp";

const getAll = () => {
    return URL.get("/blog");
};

const get = id => {
    return URL.get(`/blog/${id}`);
};

const create = data => {
    return URL.post("/blog", data);
};

const update = (id, data) => {
    return URL.put(`/blog/${id}`, data);
};

const remove = id => {
    return URL.delete(`/blog/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};