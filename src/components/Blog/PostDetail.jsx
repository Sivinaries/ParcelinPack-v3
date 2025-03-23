import { useParams } from "react-router-dom";
import usePostById from "../../hooks/usePostById";
import Navbar from "../Navbar";
import Footer from "../Footer";
import usePost from "../../hooks/usePost";
import Card from "../Service/Card";
import { Link } from "react-router-dom";

function PostDetail() {
    const { idPost } = useParams();
    const { post, loading: postLoading, error: postError } = usePostById(idPost);
    const { posts, loading: postsLoading, error: postsError } = usePost();

    if (postLoading || postsLoading) {
        return <p className="text-center text-gray-600">Loading...</p>;
    }

    if (postError) {
        return <p className="text-center text-red-500">Error: {postError}</p>;
    }

    if (!post) {
        return <p className="text-center text-gray-500">Post tidak ditemukan.</p>;
    }

    return (
        <main className="flex flex-col">
            <Navbar />
            <div className="grid grid-cols-1 h-full">
                <div className="md:max-w-6xl mx-4 md:mx-auto my-24 md:my-44 bg-white space-y-2 md:space-y-8">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-extrabold">{post.post}</h1>
                    </div>
                    <div className="flex text-xs md:text-sm gap-2 md:gap-4 text-gray-800">
                        <h1>Oleh: Admin</h1>
                        <h1>Editor: Admin</h1>
                        <h1>{new Date(post.created_at).toLocaleString()}</h1>
                        <h1>Semarang</h1>
                    </div>
                    <div>
                        <img
                            src={`http://localhost:8000/storage/${post.img}`}
                            alt={post.post}
                            className="w-full"
                        />
                    </div>
                    <div className="prose max-w-none space-y-6 md:space-y-10">
                        <div dangerouslySetInnerHTML={{ __html: post.desc1 }} />
                        <div dangerouslySetInnerHTML={{ __html: post.desc2 }} />
                        <div dangerouslySetInnerHTML={{ __html: post.desc3 }} />
                    </div>
                </div>

                {postsError ? (
                    <p className="text-center text-red-500">Error: {postsError}</p>
                ) : posts.length > 0 ? (
                    <div className="space-y-4 md:space-y-10">
                        <h1 className="text-xl md:text-4xl font-extrabold text-center">Artikel lain</h1>

                        <div className="grid grid-cols-1 h-full bg-white w-full">
                            <div className="md:my-4 my-2">
                                <div className="mx-4 md:mx-20">
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                                        {posts.map((p) => (
                                            <Link to={`/post/${p.id}`} key={p.id}>
                                                <Card
                                                    img={`http://localhost:8000/storage/${p.img}`}
                                                    name={p.post}
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
                    <p className="text-center text-gray-500">Tidak ada post tersedia.</p>
                )}
            </div>
            <Footer />
        </main>
    );
}

export default PostDetail;
