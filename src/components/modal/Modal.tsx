import { useDispatch } from 'react-redux';
import { setOwner, setShowOwner } from '../../redux/ownerSlice';
import './modal.css';
import { setComments, setShowComments } from '../../redux/commentsSlice';

const Modal = ({ children, showModal }: { children: React.ReactNode, showModal: boolean }) => {

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setShowOwner(false));
        dispatch(setOwner(null));
        dispatch(setShowComments(false));
        dispatch(setComments([]));
    }

    return (
        <div className={showModal ? 'modal modal--visible' : 'modal'}>
            <div className={showModal ? 'modal__inner modal__inner--visible' : 'modal__inner'}>
                <button
                    className='close-button'
                    type='button'
                    onClick={closeModal}
                >
                    X
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal;