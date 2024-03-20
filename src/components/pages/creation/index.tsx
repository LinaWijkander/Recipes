import { useLoaderData} from "react-router-dom";
//import CreationCard from "../../molecules/creationCard";
import {ContentContainer, PageContainer} from "../../styles/genericContainers.ts";
import Image from "../../atoms/image";

// in creation card instead?
export type CreationType = {
    creation_type: string
    id?: string
    title: string
    creator: string
    description: string
    image_link: string
}


// Detailed view when clicking a card in the creation list
const Creation = () => {
    const creation = useLoaderData() as CreationType;
    
    
    return (
        <PageContainer>
            <ContentContainer>
                <Image size={"XL"} alt={""} src={creation.image_link}/>
                {/*<CreationCard title={creation.title} image={creation.image_link} type={creation.creation_type}
                          creator={creation.creator}/>*/}
            </ContentContainer>
        </PageContainer>
    )
}

export default Creation