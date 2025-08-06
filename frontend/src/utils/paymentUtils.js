export const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(window.Razorpay);
      
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(window.Razorpay);
      script.onerror = () => {
        throw new Error('Failed to load Razorpay SDK');
      };
      document.body.appendChild(script);
    });
  };
  
  export const initiatePayment = async (orderData, userData, onSuccess, onFailure) => {
    try {
      const Razorpay = await loadRazorpay();
      
      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.id,
        name: "Amfia Education",
        description: "Course Registration",
        image: "https://your-logo-url.com/logo.png",
        prefill: {
          name: userData.name,
          email: userData.email,
          contact: userData.phone || ''
        },
        handler: function(response) {
          onSuccess(response);
        },
        theme: {
          color: "#3399cc"
        }
      };
  
      const rzp = new Razorpay(options);
      rzp.on('payment.failed', function(response) {
        onFailure(response.error);
      });
      rzp.open();
    } catch (error) {
      onFailure(error);
    }
  };