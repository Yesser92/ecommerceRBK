import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from 'axios';
import { CountryDropdown } from 'react-country-region-selector';
import Stripe from './Stripe';
import '../../CheckoutForm.css';
import { Form, Button } from 'react-bootstrap';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name,
        email,
        address: {
          country: "US"
        },
      },
    });

    if (!error) {
      console.log("Token generated:", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:8080/stripe/charge", {
          amount: 100000,
          id: id,
        });
        console.log(response.data);
        if (response.data.success) console.log("payment reussiii");
      } catch (error) {
        console.log("erreeeeeer", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (


    <div className="checkout-container w-1/3">


      &nbsp;
      &nbsp;

      <Form onSubmit={handleSubmit} className="payment-form">
        <Form.Group controlId="name">
          <Form.Label><strong>Name on Card:</strong></Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </Form.Group>
        &nbsp;

        <Form.Group controlId="email">
          <Form.Label><strong>Email:</strong></Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@example.com"
            required
          />
        </Form.Group>
        &nbsp;&nbsp;

        <Form.Group controlId="country">
          <Form.Label><strong>Country:</strong></Form.Label>
          <CountryDropdown
            value={country}
            onChange={(val) => setCountry(val)}
            className="form-control"
            required
          />
        </Form.Group>
        &nbsp;

        <Form.Group controlId="card">

          <Form.Label><strong>Card Information:</strong></Form.Label>

          &nbsp;
          <CardElement

          />
        </Form.Group>
        <br />
        &nbsp;

        <Button variant="primary" type="submit" >Pay</Button>
      </Form>

    </div>
  );
};

export default CheckoutForm;
