import axios from "axios";
import {LoaderFunction} from "react-router-dom";


const apiUrl = 'https://upbz8dn7rk.execute-api.eu-north-1.amazonaws.com/dev/';
const mockApi = "https://jsonplaceholder.typicode.com/posts";


export type LoaderData<TLoaderFn extends LoaderFunction> = Awaited<ReturnType<TLoaderFn>> extends Response | infer D
    ? D
    : never;

export const creationLoader = async({params}:any) => {
    console.log("printing params: " +params);
    const result = await fetch(`${mockApi}/${params.id}`);
    const jsonResult = await result.json();
    return jsonResult;
}

export const getPostById = async (postId:any) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return await response.json();
};

export const getCommentsByPostId = async (postId:any) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    return await response.json();
};


export const photoLoader = (async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    return response.json();
}) satisfies LoaderFunction;



export const dogLoader = async () => {
    const response = await fetch("https://random.dog/woof.json");
    const dog = await response.json();
    return dog.url;
}

export const dataLoader = async () => {
    const result = await fetch(mockApi);
    const jsonResult = await result.json();
    return jsonResult;
}

// AWS lambda is invoked via the API Gateway
export const tableLoader = (async () => {
    const params = {
        params: {
            TableName: "wst-crafts",
        },
    };
    const response = await axios.get(apiUrl, params);
    return response.data;
}) satisfies LoaderFunction;
/*
export const tableLoader = (async (tableName:string) => {
    const params = {
        params: {
            table_name: tableName,
        }
    };
    
    const response = await axios.get(apiUrl, params);
    return response.data;
}) satisfies LoaderFunction;*/