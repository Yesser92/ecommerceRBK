import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm"; // Import your CheckoutForm component
import Cart from "../Cart";

const PUBLIC_KEY = "pk_test_51MwW2YKqLFfv80mnhhcZsPR0ClUo76fPHPVjXk4lOfqVTtlEuAXH05KFD1q2RFMlL0WLHZ8rbBh2wm76b7OZjDUw005y2tMk0e";
const stripePromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <div>
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
    
     </div>
  );
};

export default Stripe;
