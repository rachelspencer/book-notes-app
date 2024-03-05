import './Button.css';
import Button from './Button';

const BaseButton = ({ onClick, children, as: Component = Button, ...rest }) => {
    return (
      <Component onClick={onClick} className="button" {...rest}>
        {children}
      </Component>
    );
  };

export default BaseButton;