import {ContentContainer, GridContainer, PageContainer} from "../../styles/genericContainers";
import { useNavigation} from 'react-router-dom';
import Title from "../../atoms/title";
import {RouterLink} from "../../atoms/routerLink";
import CreationCard from "../../molecules/creationCard";
import {CreationType} from "../creation";
import {useEffect, useState} from "react";
import axios from "axios";



const Ceramics = () => {

    //const creations = useLoaderData() as LoaderData<typeof tableLoader>; // hade dataloader och det funkade lika bra....
    //const creations = useLoaderData() as CreationType[];
    
    
    // Try save state of list and pass on. Otherwise just use tableLoader, params and fetch single creation from creations
    const [creationList, setCreationList] = useState([]);

    useEffect(() => {
        axios.get('https://upbz8dn7rk.execute-api.eu-north-1.amazonaws.com/dev/table')
            .then(response => {
                setCreationList(response.data)
            })
    }, [])

    const creations: CreationType[] = creationList.filter((item: CreationType) => item.creation_type === "Ceramics");

    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Title size={"h1"} text={"Loading..."}/>;
    }

    // todo kolla om du kan simplifiera alla dessa containers
    return (
        <PageContainer>
            <ContentContainer>
                <GridContainer>
                    {creations.map((creation: CreationType) => (
                        /*<RouterLink to={`/creations/${creation.id}`} key={creation.id}>*/
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
export default Ceramics