import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { getProducts } from "../../services/getProducts";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import AddProduct from "../../components/AddProduct";

const ProductsPage = async () => {
  let products = [];

  try {
    // Fetch products from Stripe
    products = await getProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  //Add new product
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await fetch('/api/create-product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.log('Response not OK:', await response.text());
        throw new Error('Failed to add product');
      }

      console.log('Product added successfully');
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error during submission:', error);
      alert('An error occurred while adding the product.');
    }
  };

  return (
    <div>
      <div className="py-10 px-20">
        <h1 className="text-3xl text-center font-bold mb-6 text-mono text-green-950">Shop</h1>
        <div className="flex items-center justify-center">
          <div className='text-2xl text-black px-2 py-2 mb-5 font-bold hover:text-red hover:cursor-pointer inline-block'>
            <MagnifyingGlassIcon className='w-5 h-6 mr-3 inline-block' />
            <input type="text" placeholder="Search for terrariums..." className="p-2 border rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((item) => <ProductCard key={item.id} item={item} />)
          ) : (
            <p className="text-center col-span-full">No products available</p>
          )}
        </div>
        <br></br>
        <div className="mt-6 text-mono bg-gray-100">
          <h1 className="text-3xl text-center font-bold mb-6 text-green-950">Product Management</h1>
          <AddProduct />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
