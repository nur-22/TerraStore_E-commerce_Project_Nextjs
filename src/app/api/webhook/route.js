import { stripe } from "../../../payment/stripe";
import { revalidatePath } from "next/cache";

export async function POST(req, res){
    const body = await req.text()
    const sig = req.headers.get('stripe-signature')
    const webhookSecret = process.env.WEBHOOK_SECRET

    let event;

    try{
        event = stripe.Webhooks.constructEvent(body, sig, webhookSecret);
    } catch (err){
        console.log("ERROR Message", err.message)
        return Response.json({error: `Webhook error: ${err.message}`}, {status:400});
    }
    if(event.type == 'product.created' || event.type == 'product.updated'){
        console.log('event type', event.type)
        revalidatePath('/products', 'page')
        revalidatePath('/products/[id]', 'page')
        revalidatePath('/', 'page')  
    }else{
        console.log('Unhandled event type ${event.type}');
    }
    return Response.json({message:"success"})
}