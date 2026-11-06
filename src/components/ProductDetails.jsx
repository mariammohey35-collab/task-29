const ProductDetails = ({ product }) => {
  return (
    <div className="container grid grid-cols-2 gap-10">
      <img className="rounded-lg" src={product.image} alt={product.title} />
      <div className="shadow-2xl rounded-lg p-10 flex flex-col gap-5 justify-center">
        <h2 className="text-5xl font-bold text-sky-500">{product.title}</h2>
        <h3 className="text-3xl font-bold">{product.description}</h3>
        <p className="text-5xl font-bold text-gray-300">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;