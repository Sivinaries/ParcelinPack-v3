import axiosInstance from '../axiosInstance';

const categoryService = {
  getCategories: () => axiosInstance.get('/kategoris'),
  getCategoryById: (id) => axiosInstance.get(`/kategori/${id}`),
};

export default categoryService;