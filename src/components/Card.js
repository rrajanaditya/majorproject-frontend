
const Card = ({ product }) => {
  const redirectToAmazon = (product) => {
    window.location.href = product.link || product.amazonLink;
  };
  return (
    <div className="product flex flex-col justify-between bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl duration-300  ">
      <div className="product-img flex justify-center py-5">
        <img src={product.image} alt={product.name} width={200} className="rounded-lg" style={{ height: 200}} />
      </div>
      <div className="product-texts flex flex-col px-5 pb-5">
        <h3 className="title text-xl font-medium py-4">
          {product.name}
        </h3>
        <div className="flex justify-between items-center">
          <span className="price text-xl font-medium text-rose-500">
            ₹{product.price}
          </span>
          <button
            onClick={() => redirectToAmazon(product)}
            className="uppercase bg-orange-400 text-violet-50 font-medium py-3 px-6 rounded-md hover:bg-red-500 hover:text-red-50 duration-300"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
