import ReactDom from 'react-dom';
import './Modal.css';

function Modal({ onClose, message }) {
    return ReactDom.createPortal(
        <div>
        <div className="modal_Background"></div>
            <div className="modal_Box">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>  
        </div>,
        document.querySelector('.modal-container')
    );
};

export default Modal;