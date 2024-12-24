import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import multer from 'multer';

const stripe = new Stripe(process.env.STRIPE_SK);

const upload = multer({ dest: 'uploads/' });

export const POST = async (req) => {
  try {
    const formData = await req.formData();

    const name = formData.get('name');
    const description = formData.get('description');
    const price = formData.get('price');
    const currency = formData.get('currency');
    const image = formData.get('image');
    
    const stripeProduct = await stripe.products.create({
      name,
      description,
      images: image ? [image] : [],
    });

    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: price * 100,
      currency,
    });

    return NextResponse.json({
      success: true,
      product: stripeProduct,
      price: stripePrice,
    });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
};