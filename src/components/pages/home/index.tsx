import {useState} from 'react'
import {ContentContainer, PageContainer} from "../../styles/genericContainers";
import ClickableCard from "../../molecules/clickableCard";
import Button from "../../atoms/button";
import ReactLogo from "../../../assets/react.svg";


const handleClick = () => {
    alert('Card clicked!');
};

const Home = () => {
    const [count, setCount] = useState(0);
    
    return (
        <PageContainer>
    <ContentContainer>
        <ClickableCard title={"Click Me"} content={"I'm a clickable card"} imageUrl={ReactLogo} onClick={handleClick}/>
        <Button text={`count is ${count}`} onClick={() => setCount((count) => count + 1)}/>
        
    </ContentContainer>
        </PageContainer>
    )
}
export default Home