import { useContext } from "react";
import { Link, useParams } from "react-router";
import { globalStore } from "../stores/MainStore";
import ProductDetails from "../components/ProductDetails";

const SingleProduct = () => {
 
  const { productId } = useParams();


  const { products } = useContext(globalStore);

 
  const product = products.find((item) => item.id === Number(productId));


  if (!product) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-5">
        <h1 className="text-5xl font-bold text-red-500">Product not found</h1>
        <Link to="/products" className="text-xl font-bold text-sky-500">
          Back to products
        </Link>
      </main>
    );
  }

  return (
    <div className="min-h-screen py-30">
      <ProductDetails product={product} />
    </div>
  );
};

export default SingleProduct;