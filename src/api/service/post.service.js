import axiosInstance from '../axiosInstance';

const postService = {
    getPosts: () => axiosInstance.get('/posts'),
    getPostById: (id) => axiosInstance.get(`/post/${id}`),
};

export default postService;