import axiosInstance from '../axiosInstance';

const projectService = {
  getProjects: () => axiosInstance.get('/projects'),
  getProjectById: (id) => axiosInstance.get(`/project/${id}`),
};

export default projectService;
