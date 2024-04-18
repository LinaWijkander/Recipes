import {useEffect, useState} from "react";
import axios from "axios";
import {ContentContainer, GridContainer, PageContainer} from "../../styles/genericContainers.ts";
import {CreationType} from "../creation";
import {RouterLink} from "../../atoms/routerLink";
import CreationCard from "../../molecules/creationCard";


export const Crochet = () => {
    const [creationList, setCreationList] = useState([]);

    
    useEffect(() => {
        axios.get('https://upbz8dn7rk.execute-api.eu-north-1.amazonaws.com/dev/table')
            .then(response => {
                setCreationList(response.data)
            })
        console.log(creationList)
    }, [])

    const creations: CreationType[] = creationList.filter((item: CreationType) => item.creation_type === "Crochet");
  
    
    return (
        <PageContainer>
            <ContentContainer>
                <GridContainer>
                    {creations.map((creation) => (
                        <RouterLink to={`/creations/${creation.id}`} key={creation.id}>
                            <CreationCard title={creation.title} image={creation.image_link}
                                          type={creation.creation_type} creator={"By " + creation.creator}/>
                        </RouterLink>
                    ))}
                </GridContainer>
            </ContentContainer>
        </PageContainer>
    )
}