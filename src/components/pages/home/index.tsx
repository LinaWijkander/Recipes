
/*const getRandomCreation= (creations :Creation[]) : Creation => {
    const amountOfCreations = Object.keys(creations).length-1;
    const randomCreation = Math.floor(Math.random() * amountOfCreations);
    return creations[randomCreation];
}*/

const Home = () => {
    
    //const randomCreation = getRandomCreation(creations)

    
    return (
        <div>
            <h1>Home</h1>
            <h2>Featured creation</h2>
            <h2>New creation</h2>
        </div>
    )
}
export default Home