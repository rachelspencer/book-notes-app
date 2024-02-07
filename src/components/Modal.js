import ReactDom from 'react-dom';
import { useEffect } from 'react';
import './Modal.css';

function Modal({ children, actionBar }) {
    useEffect(() => {
        // add class style when modal first renders
        document.body.classList.add('overflow-hidden');

        // remove class style when modal closes
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return ReactDom.createPortal(
        <div>
        <div className="modal_background"></div>
            <div className="modal_box">
                <div className='modal_content'>
                    {children}
                    <div className="modal_action_btn">
                        {actionBar}
                    </div>
                    
                </div>
               
            </div>  
        </div>,
        document.querySelector('.modal-container')
    );
};

export default Modal;