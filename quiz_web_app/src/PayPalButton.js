import React, { useEffect } from "react";

const PayPalButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AZ2XdfZPmX58kdUi8NGu0jSUtlDx2ffSvvO02K6adtmQfWjhe9gSdWWklYUUnNwQPaGqOuv1InlY44oL&vault=true&intent=subscription";
    script.async = true;
    script.onload = () => {
      window.paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "gold",
            layout: "horizontal",
            label: "paypal",
          },
          createSubscription: function (data, actions) {
            return actions.subscription.create({
              plan_id: "P-5G578375C5920882XMQLXRLI",
            });
          },
          onApprove: function (data, actions) {
            alert(data.subscriptionID);
          },
        })
        .render("#paypal-button-container-P-5G578375C5920882XMQLXRLI");
    };
    document.body.appendChild(script);
  }, []);

  return <div id="paypal-button-container-P-5G578375C5920882XMQLXRLI"></div>;
};

export default PayPalButton;
