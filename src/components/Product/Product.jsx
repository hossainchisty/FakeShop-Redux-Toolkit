import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleCart = (product) => {
    // Create an object with the desired properties
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    dispatch(addToCart(cartItem));
  };
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <button className="btn" onClick={() => handleCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
