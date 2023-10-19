import {LoaderFunction} from "react-router-dom";

export const recipeLoader = (async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    return response.json();
}) satisfies LoaderFunction;


export const dogLoader = async () => {
    const response = await fetch("https://random.dog/woof.json");
    const dog = await response.json();
    return dog.url;
}