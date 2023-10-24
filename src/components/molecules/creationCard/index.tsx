import {StyledCreationCard} from './styles';
import reactLogo from '../../../assets/react.svg';
import Image from "../../atoms/image";
import Title from "../../atoms/title";

interface RecipeCardProps {
    title: string,
    image: string;
}

const CreationCard = ({title="Recipe Card", image=reactLogo} : RecipeCardProps) => {
    return (
        <StyledCreationCard>
           <Image size={"medium"} src={image}  alt=""/>
           <Title size={"h1"} text={title}/>
        </StyledCreationCard>
    )
}
export default CreationCard
