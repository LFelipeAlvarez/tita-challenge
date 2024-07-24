import { useDispatch } from "react-redux"
import type { ApiError, ApiResponse, Comment, PostT } from "../../types"
import { BubbleChatIcon, ThumbsUpIcon } from "../Icons"
import Tag from "../tag/Tag"
import './post.css'
import { setError, setLoading, setOwner, setShowOwner } from "../../redux/ownerSlice"
import { getCommentsData, getOwnerInfo } from "../../services/api"
import { setShowComments, setLoading as setLoadingC, setComments } from "../../redux/commentsSlice"

const Post = ({ id, image, likes, owner, tags, text, totalComments }: PostT) => {

    const dispatch = useDispatch();
    const handleProfileClick = async () => {
        dispatch(setLoading(true));
        dispatch(setShowOwner(true));
        try {
            const currentOwner = await getOwnerInfo(owner.id);
            dispatch(setOwner(currentOwner));

        } catch (error) {
            dispatch(setError(error as ApiError));
        } finally {
            dispatch(setLoading(false));
        }
    }

    const handleCommentsClick = async () => {
        dispatch(setLoadingC(true));
        dispatch(setShowComments(true));
        try {
            const { data: currentComments }: ApiResponse<Comment> = await getCommentsData(id);
            dispatch(setComments(currentComments));

        } catch (error) {
            dispatch(setError(error as ApiError));
        } finally {
            dispatch(setLoadingC(false));
        }
    }


    return (
        <article key={id} className="post">
            <header className="post__header">
                <img className="post__owner-picture"
                    src={owner.picture || 'https://randomuser.me/api/portraits/women/18.jpg'}
                    alt="owner picture"
                    onClick={handleProfileClick}
                />
                <h3 className="post__owner-title">{owner.firstName} {owner.lastName}</h3>
            </header>
            <section className="post__body">
                <img className="post__image" src={image || 'https://via.assets.so/img.jpg?w=400&h=150&tc=blue&bg=#cecece'} alt="post image" />
                <div className="post__details">
                    <h3 className="post__text">{text}</h3>
                    <div className="post__inner">
                        <div className="tags">
                            {
                                tags.map((tag, i) => <Tag key={i} tagName={tag} />)
                            }
                        </div>
                        <div className="post__stats">
                            <span className="post__stat">
                                <ThumbsUpIcon />
                                {likes}
                            </span>
                            <span onClick={handleCommentsClick} className="post__stat post__stat--comment">
                                <BubbleChatIcon />
                                {totalComments}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Post