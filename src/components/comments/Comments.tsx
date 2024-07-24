import useTypedSelector from '../../hooks/useTypedSelector';
import { Comment } from '../../types';
import Loader from '../loader/Loader';
import './comments.css';

const Comments = ({ comments }: { comments: Comment[] }) => {
    const loading = useTypedSelector((state) => state.comments.loading);
    const error = useTypedSelector((state) => state.comments.error);

    if (loading) return <Loader />;

    if (error) return <div>Error: {error.error}</div>;

    return (
        <section className='comments'>
            {
                comments.length === 0
                    ? <p>No comments</p>
                    : comments.map(comment =>
                        <article key={comment.id} className='comment'>
                            <header className='comment__header'>
                                <img className='comment__img' src={comment.owner.picture} alt="owner picture" />
                                <h3 className='comment__title'>{comment.owner.firstName} {comment.owner.lastName}</h3>
                            </header>
                            <p className='comment__text'>{comment.message}</p>
                        </article>)
            }
        </section>
    )
}

export default Comments