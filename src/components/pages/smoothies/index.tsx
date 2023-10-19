import {ContentContainer} from "../../styles/genericContainers";
import {useLoaderData} from "react-router-dom";
import RouterLink from "../../atoms/routerLink";
import RecipeCard from "../../molecules/recipeCard";
import { LoaderFunction } from 'react-router-dom';


export type LoaderData<TLoaderFn extends LoaderFunction> = Awaited<ReturnType<TLoaderFn>> extends Response | infer D
    ? D
    : never;

export const recipeLoader = (async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    return response.json();
}) satisfies LoaderFunction; 



type Recipe = {
    title: string
    id: number
    url: string
}

const Smoothies = () => {
    const recipes = useLoaderData() as LoaderData<typeof recipeLoader>;
    
    return (
        <ContentContainer>
            {recipes.map((recipes : Recipe)  => (
                <RouterLink to={"/"} key={recipes.id}>
                <RecipeCard title={recipes.title} image={recipes.url}/>
                </RouterLink>
                
            ))}
        </ContentContainer>
    )
}
export default Smoothies