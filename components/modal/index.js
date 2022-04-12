import { useRef } from 'react';
import css from './style.module.css';

function Modal({ show, close, children }) {

    const ref = useRef();

    const closeHandler = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            close();
        }
    }

    return (
        <>
            {show &&
                <div className={css.backdrop} onClick={closeHandler}>
                    <div className={css.content} ref={ref}>
                        {children}
                    </div>
                </div>
            }
        </>
    )
}

export default Modal;
