
const BASE_URL = "https://dummyjson.com/products";
/* 
this can be use to fetch a list of products with specific fields (title, price, description, images) and pagination (limit and skip).
${BASE_URL}?limit=10&skip=0&select=title,price,description,images 
*/
export const getProducts = async () => {
    // await fetch() is used to make an HTTP request to the specified URL and waits for the response. 
    const response = await fetch(
        `${BASE_URL}`
    );
    // console.log("API Response Status:", response);
    // The response from the fetch() call is an object that contains information about the HTTP response, including the status code, headers, and body.
    // The .json() method is called on the response object to parse the response body as JSON. This method also returns a Promise, which is why we use await again to wait for the parsing to complete.
    const data = await response.json();
    // console.log("API Response:", JSON.stringify(data, null, 2));
    return data.products;
};

