import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <div className="w-full sm:w-64 h-auto rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-200">
      <Link href={`/products/${item.id}`}>
        <div className="h-48 overflow-hidden rounded-t-lg">
          <img
            src={item.images[0] || "/images/placeholder.jpg"}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex flex-col justify-between">
          <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
          <p className="text-gray-600 text-sm line-clamp-5">{item.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-green-500 font-bold text-lg">
              ৳ {item.price}
            </span>
          </div>
          <div className="px-2 py-1 mt-2 bg-green-900 text-white rounded-full hover:bg-green-600 transition duration-300" >
            <button>view product</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
