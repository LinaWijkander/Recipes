import axios from "axios";
import {LoaderFunction} from "react-router-dom";

//const apiUrl = 'https://upbz8dn7rk.execute-api.eu-north-1.amazonaws.com/dev/table';
//const mockApi = "https://jsonplaceholder.typicode.com/posts";


export type LoaderData<TLoaderFn extends LoaderFunction> = Awaited<ReturnType<TLoaderFn>> extends Response | infer D
    ? D
    : never;


// AWS lambda is invoked via the API Gateway
// setting the table name in the lambda atm, otherwise it won't work - "creations.map is not a function
export const tableLoader = (async () => {
    const params = {
        params: {
            TableName: "wst-crafts",
        },
    };
    const response = await axios.get("https://upbz8dn7rk.execute-api.eu-north-1.amazonaws.com/dev/table", params);
    return response.data;
}) satisfies LoaderFunction;


export const creationLoader = async (id:any) => {
    //https://upbz8dn7rk.execute-api.eu-north-1.amazonaws.com/dev/{id}
    try {
        const response = await axios({
            method: 'get', //you can set what request you want to be
            url: "https://upbz8dn7rk.execute-api.eu-north-1.amazonaws.com/dev/creation",
            params: {
                creationId:  id
            }
        });
        return response.data;
    } catch (e) {
        console.log(e);
        return;
    }
};



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