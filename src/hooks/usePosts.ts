import { useDispatch } from "react-redux";
import useTypedSelector from "./useTypedSelector";
import { setError, setLoading, setPosts } from "../redux/postsSlice";
import { useEffect } from "react";
import { ApiError, ApiResponse, Comment, PostT } from "../types";
import { getCommentsData, getPostsByTag } from "../services/api";

export const usePosts = () => {


    const dispatch = useDispatch();
    const owner = useTypedSelector((state) => state.owner.owner);
    const posts = useTypedSelector((state) => state.posts.posts);
    const loading = useTypedSelector((state) => state.posts.loading);
    const error = useTypedSelector((state) => state.posts.error);
    const currentTag = useTypedSelector((state) => state.posts.currentTag);
    const showOwner = useTypedSelector((state) => state.owner.showOwner);

    const comments = useTypedSelector((state) => state.comments.comments);
    const showComments = useTypedSelector((state) => state.comments.showComments);

    useEffect(() => {
        (async () => {
            dispatch(setLoading(true));
            try {
                const { data: postsData }: ApiResponse<PostT> = await getPostsByTag(currentTag);
                const postsWithMoreInfo: PostT[] = [];
                for (const post of postsData) {
                    const { data: comments, total: totalComments }: ApiResponse<Comment> = await getCommentsData(post.id);
                    postsWithMoreInfo.push({ ...post, comments, totalComments });
                }
                dispatch(setPosts(postsWithMoreInfo));
                dispatch(setLoading(false));
            } catch (err) {
                dispatch(setError(err as ApiError));

            } finally {
                dispatch(setLoading(false));
            }
        })();

    }, [dispatch, currentTag]);

    return { owner, posts, loading, error, showOwner, comments, showComments };

}