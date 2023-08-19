import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const ThankYouPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

function ThankYouPage() {
  return (
    <ThankYouPageContainer>
      <Helmet>
        {`<!-- Meta Pixel Code -->`}
        <script>
          {`!function(f,b,e,v,n,t,s) 
{if(f.fbq)return;n=f.fbq=function(){n.callMethod? 
n.callMethod.apply(n,arguments):n.queue.push(arguments)}; 
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; 
n.queue=[];t=b.createElement(e);t.async=!0; 
t.src=v;s=b.getElementsByTagName(e)[0]; 
s.parentNode.insertBefore(t,s)}(window, document,'script', 
'https://connect.facebook.net/en_US/fbevents.js'); 
fbq('init', '591405416240268'); 
fbq('track', 'StartTrial', {value: '10', currency: 'USD', predicted_ltv: '0.00'});`}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none" 
src="https://www.facebook.com/tr?id=591405416240268&ev=PageView&noscript=1" 
/>`}
        </noscript>
        {`<!-- End Meta Pixel Code -->`}
      </Helmet>
      <Title>Thank You!</Title>
    </ThankYouPageContainer>
  );
}

export default ThankYouPage;
