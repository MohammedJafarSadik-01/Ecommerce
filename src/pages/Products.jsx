import { useEffect, useState } from "react";


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts([...data]);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Products Page</h1>
            {products.map((Product) => (
                <p key={Product.id}>{Product.title}</p>
            ))}
        </div>
    )
}

export default Products