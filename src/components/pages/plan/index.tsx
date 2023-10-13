import {useLoaderData, useNavigation} from "react-router-dom";
export const Plan = () => {
    const dogUrl = useLoaderData() as string;
    const navigation = useNavigation();
    // display loader icon if you are still navigating, aka loading
   
    if(navigation.state === "loading") {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            {" "}
            <img src={dogUrl} alt={"a random dog picture"}/>
            {" "}
        </div>
    )
}
export const dataLoader = async () => {
    const response = await fetch("https://random.dog/woof.json");
    const dog = await response.json();
    
    return dog.url;
    
}
