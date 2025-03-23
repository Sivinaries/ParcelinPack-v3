import useProject from "../../hooks/useProject";
import Card from "../Service/Card";

function Project() {
  const { projects, error, loading } = useProject();

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (!projects || projects.length === 0) {
    return <p className="text-center text-gray-500">Tidak ada project tersedia.</p>;
  }

  console.log(projects);

  return (
    <div className="grid grid-cols-1 h-full bg-white w-full">
      <div className="md:my-4 my-2">
        <div className="mx-4 md:mx-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {projects.map((project, index) => (
              <Card
                key={index} // Pastikan pakai key
                img={`http://localhost:8000/storage/${project.img1}`}
                name={project.project}
                slug={project.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
