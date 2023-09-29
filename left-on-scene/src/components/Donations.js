// import React, { useState, useEffect } from 'react';
// import FadeIn from "react-fade-in/lib/FadeIn";
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// function DonationPage() {
//   const [amount, setAmount] = useState('');
//   const stripe = useStripe();
//   const elements = useElements();
//   const handleAmountChange = (event) => {
//     setAmount(event.target.value);
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!stripe || !elements) {
//       // Stripe.js has not yet loaded.
//       // Make sure to disable form submission or show a loading indicator.
//       return;
//     }
//     const cardElement = elements.getElement(CardElement);
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });
//     if (error) {
//       console.error('Payment method creation failed:', error);
//     } else {
//       // Send the payment method ID and amount to your server for processing
//       // Replace 'YOUR_SERVER_ENDPOINT' with the actual server endpoint URL
//       fetch('YOUR_SERVER_ENDPOINT', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           paymentMethodId: paymentMethod.id,
//           amount: amount,
//         }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log('Donation success:', data);
//           // Handle success, e.g., display a success message to the user
//         })
//         .catch((error) => {
//           console.error('Donation error:', error);
//           // Handle error, e.g., display an error message to the user
//         });
//     }
//   };
//   return (
//     <div>
//       <h1>Donation Page</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="amount">Donation Amount:</label>
//         <input type="text" id="amount" name="amount" value={amount} onChange={handleAmountChange} placeholder="Enter amount" required />
//         <label htmlFor="card-element">Credit Card Details:</label>
//         <CardElement id="card-element" options={{ style: { base: { fontSize: '16px' } } }} />
//         <button type="submit">Donate</button>
//       </form>
//     </div>
//   );
// }
// export default DonationPage;
