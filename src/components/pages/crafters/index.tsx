import {ScalableContainer} from "../../styles/genericContainers";
import {useLoaderData} from "react-router-dom";
import RouterLink from "../../atoms/routerLink";
import CreationCard from "../../molecules/creationCard";
import { LoaderFunction } from 'react-router-dom';
import {creationLoader} from "../../../loaders/loaders";
import Title from "../../atoms/title";


export type LoaderData<TLoaderFn extends LoaderFunction> = Awaited<ReturnType<TLoaderFn>> extends Response | infer D
    ? D
    : never;


type Creation = {
    title: string
    id: number
    url: string
}

const getRandomCreation= (creations :Creation[]) : Creation => {
    const amountOfCreations = Object.keys(creations).length-1;
    const randomCreation = Math.floor(Math.random() * amountOfCreations);
    return creations[randomCreation];
}

 

const Crafters = () => {
    const creations = useLoaderData() as LoaderData<typeof creationLoader>;
    
    const randomCreation = getRandomCreation(creations)
    
    return (
        <ScalableContainer>
            
            <Title size={"h1"} text={"Featured Creation!"}/>
            <CreationCard title={randomCreation.title} image={randomCreation.url}/>
            
            <p>--------------------------------------------</p>
            
                {creations.map((creations : Creation)  => (
                    <RouterLink to={"/"} key={creations.id}>
                        <CreationCard title={creations.title} image={creations.url} />
                    </RouterLink>
                ))}
           
        </ScalableContainer>
    )
}
export default Crafters