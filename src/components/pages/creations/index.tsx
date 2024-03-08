import {ScalableContainer} from "../../styles/genericContainers";
import { useLoaderData, useNavigation} from 'react-router-dom';
import Title from "../../atoms/title";
import RouterLink from "../../atoms/routerLink";
import CreationCard from "../../molecules/creationCard";
import {dataLoader, LoaderData} from "../../../loaders/loaders";
import axios from 'axios';
import Button from "../../atoms/button";

const apiUrl = 'https://upbz8dn7rk.execute-api.eu-north-1.amazonaws.com/dev/';


// put it better in the OnClickFunction instead
const setItemLambdaViaAPI = async (/*functionName: string,*/ inputs:object) => {

    const data = JSON.stringify(inputs);
    //`https://${process.env.AWS_REGION}.execute-api.amazonaws.com/${process.env.API_GATEWAY_STAGE}/${functionName}`
    const response = await axios.post(apiUrl, data);

    return response.data;
};

// Fix
const blaha = async() => {
    const inputData = {creation_type:"Model", creator:"Adrachn", description:"A naga archer", image_link:"not available"}
    const setItem = await setItemLambdaViaAPI(inputData);
    return setItem;
}

const Creations = () => {
    
    const creations = useLoaderData() as LoaderData<typeof dataLoader>;
    const navigation = useNavigation();
    
    if(navigation.state === "loading"){
        return <Title size={"h1"} text={"Loading..."}/>;
    }

    return (
        <>
            <Button onClick={ async () => {await blaha();} } text={"Add Creation"}/>
            <ScalableContainer>
            {creations.map((creation: any) => (
                <RouterLink to={`/wst-crafts/creations/${creation.id}`} key={creation.id}>
                    <CreationCard title={creation.id} image={""}  type={creation.body} creator={creation.title}/>
                </RouterLink>
            ))}
        </ScalableContainer>
        </>
        
    )
}
export default Creations