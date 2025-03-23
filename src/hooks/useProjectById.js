import { useEffect, useState } from "react";
import projectService from "../api/service/project.service";

const useProjectById = (id) => {
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await projectService.getProjectById(id);
                setProject(response.data.project);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    return { project, loading, error };
};

export default useProjectById;