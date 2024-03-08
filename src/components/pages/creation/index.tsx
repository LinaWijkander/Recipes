import {useLoaderData} from "react-router-dom";
import {creationLoader, LoaderData} from "../../../loaders/loaders";



export type CreationType = {
    creation_type: string
    id?: string
    title: string
    creator: string
    description: string
    image_link: string
}

const Creation = () => {
    const creation = useLoaderData() as LoaderData<typeof creationLoader>;
    
    return (
        <div>
            <h1>
                {creation.id} - {creation.title}
            </h1>
        </div>
    )
}
export default Creation