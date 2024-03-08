import {StyledButton} from './styles';

interface ButtonProps {
    onClick: () => void;
    text: string;
}



const Button = ({text, onClick} :ButtonProps) => {
    return (
        <StyledButton onClick={onClick}>
            {text}
           </StyledButton>
        ) 
}
export default Button;