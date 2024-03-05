import './Button.css';

const Button = ({ onClick, children, ...rest }) => {
    return (
      <button onClick={onClick} className="button" {...rest}>
        {children}
      </button>
    );
  };

export default Button;