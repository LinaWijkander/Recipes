import { StyledClickableCard, CardImage, CardContent } from './styles';
import Title from "../../atoms/title";
import Paragraph from "../../atoms/paragraph"; // Import the styled component

interface CardProps {
    title: string;
    content: string;
    imageUrl: string;
    onClick: () => void;
}

//onClick={() => alert(`Card ${creations.id + 1} clicked!`)}

const Card = ({ title, content, imageUrl, onClick } : CardProps) => {
    return (
        <StyledClickableCard onClick={onClick}>
            <CardImage src={imageUrl} alt={title} />
            <CardContent>
                <Title size={"h2"} text={title}/>
                <Paragraph size={"p1"} text={content}/>
            </CardContent>
        </StyledClickableCard>
    );
};
export default Card;
