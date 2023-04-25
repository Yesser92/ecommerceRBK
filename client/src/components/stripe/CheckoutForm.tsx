import React from 'react';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from 'axios';
import Stripe from './Stripe';

     const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
          // Handle case when cardElement is null
          return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (!error) {
            console.log("Token generated:", paymentMethod);
            try{
                const{id}=paymentMethod;
                const response=await axios.post("http://localhost:8080/stripe/charge",
                {amount:100000,
                id: id,
                })
                console.log(response.data)
                if (response.data.success)
                console.log("payment reussiii")
            }
            catch(error){console.log("erreeeeeer",error)}
        }
        else{
            console.log(error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            <CardElement
                options={{
                    hidePostalCode: true
                }}
            />
            <button type="submit">Pay</button>
        </form>
    );
}
export default CheckoutForm;