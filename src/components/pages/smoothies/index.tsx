import {ContentContainer} from "../../styles/genericContainers";
import {useLoaderData} from "react-router-dom";
import RouterLink from "../../atoms/routerLink";
import RecipeCard from "../../molecules/recipeCard";

 
export const recipeLoader = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    return response.json();
}

const Smoothies = () => {
    const recipes = useLoaderData() as any;
    
    return (
        <ContentContainer>
            {recipes.map((recipes : any) => (
                <RouterLink to={"/"} key={recipes.id}>
                <RecipeCard title={recipes.title} image={recipes.url}/>
                </RouterLink>
                
            ))}
        </ContentContainer>
    )
}
export default Smoothies