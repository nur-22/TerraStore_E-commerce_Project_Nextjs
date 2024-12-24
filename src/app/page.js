import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Link from "next/link";
import FeaturedProducts from "../components/FeaturedProducts";
import OfferSlider from "../components/OfferSlider";
import { getProducts } from "../services/getProducts";

export const metadata = {
  title: "TerraStore",
};

const Page = async () => {
  let fetchedProducts = [];

  try {
    // Fetch all products from Stripe
    fetchedProducts = await getProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  // Slice to get the first 3 products
  const firstThreeProducts = fetchedProducts.slice(0, 3);

  const localProducts = [
    {
      id: 1,
      name: "Best-Sellers",
      images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"],
    },
    {
      id: 2,
      name: "New Arrival",
      images: ["/images/4.jpg", "/images/5.jpg", "/images/6.jpg"],
    },
    {
      id: 3,
      name: "Seasonal Terrarium",
      images: ["/images/7.jpg", "/images/8.jpg", "/images/9.jpg"],
    },
  ];

  return (
    <div>
      {/* Background Image Section */}
      <div
        className="bg-center bg-cover h-80"
        style={{ backgroundImage: "url('images/6.jpg')" }}
      >
        <h1 className="text-green-500 text-center text-5xl font-mono pt-40">
          Explore <span className="text-yellow-300">Nature</span> with our{" "}
          <span className="text-yellow-400">Terrarium</span> collection
        </h1>
      </div>

      {/* Featured Products */}
      <FeaturedProducts products={localProducts} />

      {/* Offers Section */}
      <div className="py-10 px-20 h-700 w-400 flex flex-col items-center bg-white">
        <h2 className="text-center text-green-950 font-mono text-2xl mb-6">
          Latest Offers
        </h2>
        <OfferSlider />
      </div>

      {/* Shop Section */}
      <div>
        <h2 className="text-center text-green-950 font-mono text-2xl mb-6">
          <Link href="/products">Shop</Link>
        </h2>
      </div>

      <div className="py-10 px-30 flex justify-center bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {firstThreeProducts.length > 0 ? (
            firstThreeProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>

      <div className="py-2 px-4 flex justify-center bg-gray-200">
        <Link
          href="/products"
          className="inline-block text-black p-4 font-bold hover:underline"
        >
          View All
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
