import React from 'react';
import ReactDom from 'react-dom';

const Modal = (props) => {
    const { title, children, onClose} = props;

    return ReactDom.createPortal (
        <div className='tbd'>
            <h3>{title}</h3>
            <button onClick={onClose}>X</button>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
