import Post from "../post/Post";
import './posts.css';
import { TAGS } from "../../consts";
import Tag from "../tag/Tag";
import Modal from "../modal/Modal";
import Owner from "../owner/Owner";
import Comments from "../comments/Comments";
import Loader from "../loader/Loader";
import { usePosts } from "../../hooks/usePosts";

const Posts = () => {
    const { loading, error, posts, owner, showOwner, comments, showComments } = usePosts();

    if (loading) return <Loader />;

    if (error) return <div>Error: {error.error}</div>;

    return (
        <main className="main">
            <h2 className="title">Posts</h2>
            <section className="tags">
                {
                    TAGS.map((tag, i) => <Tag key={i} tagName={tag} />)
                }
            </section>
            <section className="posts">
                {
                    posts.map(post => <Post key={post.id} {...post} />)
                }
            </section>
            <Modal showModal={showOwner}>
                {!owner && <Loader />}
                {owner && <Owner {...owner} />}
            </Modal>

            <Modal showModal={showComments}>
                <Comments comments={comments} />
            </Modal>

        </main>
    )
}

export default Posts;