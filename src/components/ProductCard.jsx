const ProductCard = ({ product }) => {
    // console.log("ProductCard rendered for:", product);
    const onClickFavorite = () => {
        // alert(`You favorited ${book.title} by ${book.author}`);
        alert("clicked favorite");
    }

  return (
    <div className="product-card">
        <div className="product-poster">
            <img src={product.thumbnail} alt={product.title} />
            <div className="product-overlay">
                <button className="favorite-btn" onClick={onClickFavorite}>
                    <span role="img" aria-label="heart">❤️</span>
                </button>
                
            </div>
        </div>
        <div className="product-info">
            <h3>{product.title}</h3>
            <p>{product.brand}</p>
            <p>{product.category}</p>
            <div className="product-price">${product.price}</div>
            <div className="product-description">
                <p>{product.description}</p>
            </div>
            <div>
                <p>Rating: {product.rating} ⭐</p>
            </div>
             <div>
                <p>Stock: {product.stock}</p>   
            </div>
            <div>
                <p>Discount: {product.discountPercentage}%</p>
            </div>
            <div>
                <p>Brand: {product.brand}</p>
            </div>
            <div>
                <p>Category: {product.category}</p>
            </div>
            <div>
                <img src={product.meta.qrCode} alt="QR Code" />
            </div>
        </div>
    </div>
    );
};

export default ProductCard;