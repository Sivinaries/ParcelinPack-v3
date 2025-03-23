import usePost from "../../hooks/usePost";
import Card from "../Service/Card";
import { Link } from "react-router-dom";

function Post() {
  const { posts, error, loading } = usePost();

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (!posts || posts.length === 0) {
    return <p className="text-center text-gray-500">Tidak ada post tersedia.</p>;
  }

  console.log(posts);

  return (
    <div className="grid grid-cols-1 h-full bg-white w-full">
      <div className="md:my-4 my-2">
        <div className="mx-4 md:mx-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {posts.map((post) => (
              <Link to={`/post/${post.id}`} key={post.id}>
                <Card
                  img={`http://localhost:8000/storage/${post.img}`}
                  name={post.post}
                  slug={post.id}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
