function Modal({ onClose, message }) {
    return (
        <div>
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default Modal;