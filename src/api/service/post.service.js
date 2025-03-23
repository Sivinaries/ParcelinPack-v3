import axiosInstance from '../axiosInstance';

const categoryService = {
    getPosts: () => axiosInstance.get('/posts'),
    getPostById: (id) => axiosInstance.get(`/post/${id}`),
};

export default categoryService;