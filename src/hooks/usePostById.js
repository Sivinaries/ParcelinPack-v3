import { useEffect, useState } from "react";
import postService from "../api/service/post.service";

const usePostById = (id) => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await postService.getPostById(id);
                setPost(response.data.post);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    return { post, loading, error };
};

export default usePostById;