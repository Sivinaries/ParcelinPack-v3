import axiosInstance from '../axiosInstance';

const projectService = {
  getProjects: () => axiosInstance.get('/projects'),
  // getProductById: (id) => axiosInstance.get(`/products/${id}`),
};

export default projectService;
