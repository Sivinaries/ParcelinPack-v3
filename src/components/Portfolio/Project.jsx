import useProject from "../../hooks/useProject";
import Card from "../Service/Card";

function Project() {
  const { projects, error, loading } = useProject()

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (!projects || projects.length === 0) {
    return <p className="text-center text-gray-500">Tidak ada layanan tersedia.</p>;
  }

  console.log(projects)

  return (
    <div className="p-6 sm:p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {projects.map((project, index) => (
          <Card key={index}
            img={`https://admin.parcelinpack.id/storage/${project.img1}`}
            name={project.project}
            slug={project.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;