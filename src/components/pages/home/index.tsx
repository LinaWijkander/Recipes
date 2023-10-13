import {useState} from 'react'


const Home = () => {
    const [count, setCount] = useState(0);
    
    return (
        <>
        <div>Home</div>
    <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
    </div>
        </>
    )
}
export default Home
