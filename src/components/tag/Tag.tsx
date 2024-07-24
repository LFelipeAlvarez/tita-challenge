import { useDispatch } from 'react-redux';
import './tag.css';
import useTypedSelector from '../../hooks/useTypedSelector';
import { setTag } from '../../redux/postsSlice';

const Tag = ({ tagName }: { tagName: string }) => {

    const dispatch = useDispatch();
    const currentTag = useTypedSelector((state) => state.posts.currentTag);

    const handleClick = () => {
        dispatch(setTag(tagName));
    }

    return (
        <span className={currentTag === tagName ? 'tag tag--active' : "tag"} onClick={handleClick} >{tagName}</span>
    )
}

export default Tag