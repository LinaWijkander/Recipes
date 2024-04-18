
import Paragraph from "../../atoms/paragraph";
import wstCreations from '../../../assets/images/wstCreations.jpg';
import {ContentContainer, PageContainer} from "../../styles/genericContainers.ts";
import Image from "../../atoms/image";

/*const getRandomCreation= (creations :Creation[]) : Creation => {
    const amountOfCreations = Object.keys(creations).length-1;
    const randomCreation = Math.floor(Math.random() * amountOfCreations);
    return creations[randomCreation];
}*/


const Home = () => {
    
    //const randomCreation = getRandomCreation(creations)

    
    return (
        <PageContainer>
            <ContentContainer>
                <Image size={"medium"} alt={"An AI generated mystical looking crystal flower with blue drops on some of the petals and surrounded by green leaves."} src={wstCreations}/>
                <Paragraph size={"p1"} text={"Welcome to the creations of the Wild Strawberry tree group"}/>
            </ContentContainer>
        </PageContainer>
    )
}
export default Home