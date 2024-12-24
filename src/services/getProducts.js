import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SK);

export async function getProducts() {
  try {
    const { data: products } = await stripe.products.list({ active: true });
    const { data: prices } = await stripe.prices.list({ active: true });

    return products.map((product) => {
      const price = prices.find((p) => p.product === product.id);
      return {
        id: product.id,
        name: product.name,
        description: product.description || "",
        price: price ? price.unit_amount / 100 : 0,
        images: product.images.length > 0 ? product.images : ["/images/placeholder.jpg"],
      };
    });
  } catch (error) {
    console.error("Failed to fetch products:", error.message);
    return [];
  }
}
