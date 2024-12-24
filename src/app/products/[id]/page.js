import Stripe from 'stripe';
import { CheckIcon } from "@heroicons/react/24/solid";
import ShareBtn from "../../../components/ShareBtn";
import AddToCart from "../../../components/AddToCart";
import Footer from "../../../components/Footer";

const stripe = new Stripe(process.env.STRIPE_SK);

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  console.log(`Fetching metadata for product ID: ${id}`);

  try {
    const product = await stripe.products.retrieve(id);

    return {
      title: product.name,
      description: product.description,
    };
  } catch (error) {
    console.error("Error fetching product metadata:", error);
    return { title: "Product not found" };
  }
};

const ProdPage = async ({ params }) => {
  const { id } = await params;

  // Fetch the product from Stripe using the ID
  const fetchProduct = async () => {
    try {
      console.log(`Fetching product with ID: ${id}`);
      const product = await stripe.products.retrieve(id);
      const prices = await stripe.prices.list({ product: id });
      const defaultPrice = prices.data[0];
      const price = defaultPrice ? defaultPrice.unit_amount : null;
      const priceId = defaultPrice ? defaultPrice.id : null;

      console.log("Fetched product:", product);

      const displayPrice = price ? (price / 100).toFixed(2) : 0;

      return {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.images.length > 0 ? product.images[0] : '/images/placeholder.jpg',
        price: displayPrice,
        price_id: priceId,
        currency: defaultPrice ? defaultPrice.currency.toUpperCase() : 'BDT',
      };
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  };

  const product = await fetchProduct();

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="m-20 px-6 sm:px-12 lg:px-20">
        <div className="flex justify-center gap-10 flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 max-w-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-h-96 object-contain mx-auto"
            />
          </div>

          <div className="flex-1 max-w-md border rounded-md shadow-lg p-6 bg-green-300">
            <h2 className="text-3xl font-semibold">{product.name}</h2>
            <div className="flex pt-2 gap-2 items-center">
              <CheckIcon className="text-lime-500 w-5 h-5" />
              <span className="font-semibold">In stock</span> | <ShareBtn />
            </div>
            <div className="mt-4 border-t pt-4">
              <p className="text-black text-bold">Price:</p>
              <p className="text-xl font-semibold">
                ৳{product.price} {product.currency}
              </p>
            </div>
            <AddToCart product={product} />
          </div>
        </div>

        <div className="mt-12 border-t pt-5 text-green-900 text-mono text-xl bg-gray-100">
          <p>{product.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProdPage;
