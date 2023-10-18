import {useState} from 'react'
import {ContentContainer, PageContainer} from "../../styles/genericContainers";

const Home = () => {
    const [count, setCount] = useState(0);
    
    return (
        <PageContainer>
    <ContentContainer>
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
    </ContentContainer>
        </PageContainer>
    )
}
export default Home