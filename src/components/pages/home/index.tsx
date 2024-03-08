//import {useState} from 'react'
import {ContentContainer, PageContainer, /*ScalableContainer,*/ FlexContainer} from "../../styles/genericContainers";
//import Button from "../../atoms/button";
import CreationCard from "../../molecules/creationCard";
import RouterLink from "../../atoms/routerLink";
import {useLoaderData} from "react-router-dom";
import {LoaderData, tableLoader} from "../../../loaders/loaders";
import {CreationType} from "../creation";

// todo: click -> detailed information view with creation.description and the rest of the connected images

/*const getRandomCreation= (creations :Creation[]) : Creation => {
    const amountOfCreations = Object.keys(creations).length-1;
    const randomCreation = Math.floor(Math.random() * amountOfCreations);
    return creations[randomCreation];
}*/

const Home = () => {
    //const [count, setCount] = useState(0);
    const creations = useLoaderData() as LoaderData<typeof tableLoader>;
    //const randomCreation = getRandomCreation(creations)
    
    return (
        <PageContainer>
            <ContentContainer>
                {/*<Button text={`count is ${count}`} onClick={() => setCount((count) => count + 1)}/>*/}
                <FlexContainer>
                    {creations.map((creation: CreationType) => (
                        <RouterLink to={`/wst-crafts/creations/${creation.id}`} key={creation.id}>
                            <CreationCard title={creation.title} 
                                          type={creation.creation_type}
                                          image={(creation.image_link)}
                                          creator={"By " + creation.creator}/>
                        </RouterLink>
                    ))}
                </FlexContainer>
            </ContentContainer>
        </PageContainer>
    )
}
export default Home