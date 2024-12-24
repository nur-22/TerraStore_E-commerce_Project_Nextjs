"use client"
import toast, { Toaster } from 'react-hot-toast';
import { useCart } from '../payment/useCart';

const AddToCart = ({product}) => {
    const {addItem} = useCart()
    
    const handleCartAdd = () => {
      addItem(product)
      toast.success(`${product.name} Item added to cart`)
    }

  return (
    <div>
        <button 
          onClick={handleCartAdd} 
          className='w-full mt-4 py-2 px-6 bg-black text-white hover:bg-green-700 rounded-md'>
            Add To Cart
        </button>
        <Toaster />
    </div>
  );
}

export default AddToCart;
