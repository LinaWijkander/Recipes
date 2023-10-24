import {LoaderFunction} from "react-router-dom";

export const creationLoader = (async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    return response.json();
}) satisfies LoaderFunction;


export const dogLoader = async () => {
    const response = await fetch("https://random.dog/woof.json");
    const dog = await response.json();
    return dog.url;
}

export const crafterLoader = (async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
}) satisfies LoaderFunction;