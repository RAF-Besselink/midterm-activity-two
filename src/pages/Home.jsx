import ProductCard from "../components/ProductCard";
import {useState, useEffect} from "react";
import {getProducts} from "../services/api";

const Home = () => {
    // hooks
    const [searchTerm, setSearchTerm] = useState("");

    // put it in a state so that it will persist across renders and we can use it to trigger re-renders when the data changes.
    // save it in a state variable so that we can use it in our component and re-render when it changes
    const [products, setProducts] = useState([]);

    // Calling the function returns a Promise, which can be handled with .then() and .catch() to process the data or handle errors, respectively.
    /* getProducts().then((data) => {
        console.log("Fetched products:", data);
    }).catch((error) => {
        console.error("Error fetching products:", error);
    }); */
    /* 
    the useEffect allows you to add side effects to your
    functions or to your components and define when they should run.
    In this case, we are using it to fetch data from an API 
    when the component mounts. 
    The empty dependency array [] means that this effect 
    will only run once, when the component is first rendered. 
    If we had any dependencies in the array, the effect 
    would run again whenever those dependencies change.
     */
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productList = await getProducts();
                setProducts(productList);
                console.log("Fetched products:", productList);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                console.log("Finished fetching products.");
            }
        };
        fetchProducts();
    }, []); // dependency array is empty, so this effect runs only once when the component mounts

    

  return (
    <>
        <div className="home">
            <h1>List of Products</h1>
            {products.length > 0 ? (
                <div className="product-list">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            ) : (
                <p>No products available.</p>
            )}
        </div>

       
    </>
    );
};

export default Home;