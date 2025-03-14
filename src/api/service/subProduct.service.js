import axiosInstance from '../axiosInstance';

const subProductService = {
  getSubProducts: () => axiosInstance.get('/subproducts'),
  getSubProductById: (id) => axiosInstance.get(`/subproduct/${id}`),
};

export default subProductService;