import axiosInstance from '../axiosInstance';

const productService = {
  getProducts: () => axiosInstance.get('/products'),
  getProductById: (id) => axiosInstance.get(`/product/${id}`),
};

export default productService;