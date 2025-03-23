import { useParams } from "react-router-dom";
import useProjectById from "../../hooks/useProjectById";
import Navbar from "../Navbar";
import Footer from "../Footer";
import useProject from "../../hooks/useProject";
import Card from "../Service/Card";
import { Link } from "react-router-dom";

function ProjectDetail() {
  const { idProject } = useParams();
  const { project, loading: projectLoading, error: projectError } = useProjectById(idProject);
  const { projects, loading: projectsLoading, error: projectsError } = useProject();

  if (projectLoading || projectsLoading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (projectError) {
    return <p className="text-center text-red-500">Error: {projectError}</p>;
  }

  if (!project) {
    return <p className="text-center text-gray-500">Project tidak ditemukan.</p>;
  }

  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="grid grid-cols-1 h-full">
        <div className="md:max-w-6xl mx-4 md:mx-auto my-24 md:my-44 bg-white space-y-2 md:space-y-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold">{project.project}</h1>
          </div>
          <div>
            <img
              src={`http://localhost:8000/storage/${project.img1}`}
              alt={project.project}
              className="w-full"
            />
          </div>
          <div className="">
            <h1>{project.desc1}</h1>
          </div>
          <div>
            <img
              src={`http://localhost:8000/storage/${project.img2}`}
              alt={project.project}
              className="w-full"
            />
          </div>

          <div className="">
            <h1>{project.desc2}</h1>
          </div>
        </div>

        {projectsError ? (
          <p className="text-center text-red-500">Error: {projectsError}</p>
        ) : projects.length > 0 ? (
          <div className="space-y-4 md:space-y-10">
            <h1 className="text-xl md:text-4xl font-extrabold text-center">Project lain</h1>

            <div className="grid grid-cols-1 h-full bg-white w-full">
              <div className="md:my-4 my-2">
                <div className="mx-4 md:mx-20">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    {projects.map((p) => (
                      <Link to={`/project/${p.id}`} key={p.id}>
                        <Card
                          img={`http://localhost:8000/storage/${p.img1}`}
                          name={p.project}
                          slug={p.id}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Tidak ada project tersedia.</p>
        )}
      </div>
      <Footer />
    </main>
  );
}

export default ProjectDetail;
