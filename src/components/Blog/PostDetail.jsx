import { useParams } from "react-router-dom";
import usePostById from "../../hooks/usePostById";

function PostDetail() {
    const { idPost } = useParams();
    const { post, loading, error } = usePostById(idPost);

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;
    if (!post) return <p className="text-center text-gray-500">Post tidak ditemukan.</p>;

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-xl font-bold">{post.post}</h1>
            <img
                src={`http://localhost:8000/storage/${post.img}`}
                alt={post.post}
                className="w-full my-4"
            />
            <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.desc1 }} />
                <div dangerouslySetInnerHTML={{ __html: post.desc2 }} />
                <div dangerouslySetInnerHTML={{ __html: post.desc3 }} />
            </div>
            <p className="text-gray-500 text-sm mt-4">
                Created at: {new Date(post.created_at).toLocaleString()}
            </p>
        </div>
    );
}

export default PostDetail;
