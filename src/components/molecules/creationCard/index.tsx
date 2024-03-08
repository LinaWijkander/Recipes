import * as S from './styles';
import reactLogo from '../../../assets/react.svg';
import Image from "../../atoms/image";
import Title from "../../atoms/title";
//import Paragraph from "../../atoms/paragraph";

interface RecipeCardProps {
    title: string,
    image: string;
    type: string;
    creator: string;
    //onClick: () => void;
}

const CreationCard = ({title="Creation Card", image=reactLogo/*, type="Type", creator="Creator of the item"*/ } : RecipeCardProps) => {
    return (
        <S.StyledCreationCard /*onClick={onClick}*/>
           <Image size={"fitted"} src={image}  alt=""/>
            <S.TextContainer>
                <Title size={"h1"} text={title}/>
                {/*<Paragraph size={"p1"} text={type}/>
                <Paragraph size={"p1"} text={creator}/>*/}
            </S.TextContainer>
        </S.StyledCreationCard>
    )
}
export default CreationCard