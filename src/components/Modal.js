import ReactDom from 'react-dom';
import './Modal.css';

function Modal({ children, actionBar }) {
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