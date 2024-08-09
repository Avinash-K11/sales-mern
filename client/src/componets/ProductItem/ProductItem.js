import './index.css';

const ProductItem = (props) => {
    const { product, onAddClicked } = props;
    const addToCart = () => {
        onAddClicked();
    };

    return(
        <li className='product-item'>
            <img src={product.imageUrl} alt='product_image' />
            <h4>{product.name}</h4>
            <h5>{product.brand}</h5>
            <p>₹ {product.price}</p>
            <div className='add-cart-container'>
                <button className='add-cart-btn' onClick={addToCart} type='button'>Buy</button>
            </div>
        </li>
    );
};

export default ProductItem;