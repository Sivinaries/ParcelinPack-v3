import { useParams } from "react-router-dom";
import useProjectById from "../../hooks/useProjectById";

function ProjectDetail() {
  const { idProject } = useParams();
  const { project, loading, error } = useProjectById(idProject);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!project) return <p className="text-center text-gray-500">Post tidak ditemukan.</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img
        src={`http://localhost:8000/storage/${project.img1}`}
        alt={project.project}
        className="w-full my-4"
      />

      <p className="text-gray-500 text-sm mt-4">
        Created at: {new Date(project.created_at).toLocaleString()}
      </p>
    </div>
  );
}

export default ProjectDetail;
