import {useState} from 'react'

const Plan = () => {
    const [count, setCount] = useState(0)
    
    return (
        <div>Plan
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </div>
    )
}
export default Plan
