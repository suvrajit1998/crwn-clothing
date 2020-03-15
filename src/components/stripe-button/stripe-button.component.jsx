import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

// import axios from 'axios'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_T8L4LnOqZ5x1jRXvnuwYivpK00HcPdMVe2'

  const onToken = token => {
    alert('Payment Successful!')
    // axios({
    //   url: 'payment',
    //   method: 'post',
    //   data: {
    //     amount: priceForStripe,
    //     token
    //   }
    // })
    //   .then(res => {
    //     alert('Payment Successful!')
    //   })
    //   .catch(error => {
    //     console.log('Pament Error: ',  JSON.parse(error) )
    //     alert(
    //       'There was an issue with your payment. please sure you use the provide cradit cart.'
    //     )
    //   })
  }
  return (
    <StripeCheckout
      label="Pay now"
      name="Crwn Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      description={`Your total is $${price}`}
    />
  )
}

export default StripeButton
