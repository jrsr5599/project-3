import React, { useState, useEffect } from 'react';
import FadeIn from "react-fade-in/lib/FadeIn";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function DonationPage() {
  const [amount, setAmount] = useState('');
//   const stripe = useStripe();
  const elements = useElements();
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {

      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    if (error) {
      console.error('Payment method creation failed:', error);
    } else {
      fetch('YOUR_SERVER_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: amount,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Donation success:', data);
        })
        .catch((error) => {
          console.error('Donation error:', error);
        });
    }
  };
  return (
    <div>
      <h1>Donation Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Donation Amount:</label>
        <input type="text" id="amount" name="amount" value={amount} onChange={handleAmountChange} placeholder="Enter amount" required />
        <label htmlFor="card-element">Credit Card Details:</label>
        <CardElement id="card-element" options={{ style: { base: { fontSize: '16px' } } }} />
        <button type="submit">Donate</button>
      </form>
    </div>
  );
}
export default DonationPage;
