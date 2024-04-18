



export const Crafters = () => {

    interface FruitObject {
        fruit: string;
        quantity: number;
    }

    const fruitArray: FruitObject[] = [
        { fruit: "apple", quantity: 10 },
        { fruit: "banan", quantity: 5 },
        { fruit: "orange", quantity: 8 },
        { fruit: "banan", quantity: 12 },
    ];

    return (
        <>
            <h1>Crafters</h1>
            
            <div>
                {fruitArray.map((item, index) => {
                    if (item.fruit === "banan") {
                        return <div key={index}>Fruit: {item.fruit}, Quantity: {item.quantity}</div>;
                    }
                    return null; // Alternatively, you can use 'filter()' before 'map()' to omit this check.
                })}
            </div>
        </>
        
    )
}