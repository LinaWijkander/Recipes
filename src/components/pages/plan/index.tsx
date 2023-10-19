import {useLoaderData, useNavigation} from "react-router-dom";
import {ContentContainer} from "../../styles/genericContainers";
import Image from "../../atoms/image";



export const Plan = () => {
    const dogUrl = useLoaderData() as string;
    const navigation = useNavigation();
    
    // display loader icon if you are still navigating, aka loading
    if(navigation.state === "loading") {
        return <h1>Loading...</h1>
    }
    return (
        <ContentContainer>
            {" "}
            <Image size={"large"} src={dogUrl} alt={"a random dog picture"}/>
            {" "}
        </ContentContainer>
    )
}

