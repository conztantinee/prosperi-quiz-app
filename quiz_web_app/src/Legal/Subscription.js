import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
padding-top: 2rem;
padding-bottom: 2rem;
padding-left: 2rem;
padding-right: 2rem;

@media (min-width: 768px) {
  padding-left: 5rem;
    padding-right: 5rem;
  }
`;

const Header=styled.h1`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 600;
    font-size: 36px;
    line-height: 2rem;
    margin: 0;
`;

const Subheader=styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-feature-settings: normal;
line-height: 24px;
tab-size: 4;
`;

const Website=styled.a`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-decoration-line: underline;
    --tw-text-opacity: 1;
    color: rgb(0 0 255/var(--tw-text-opacity));
`;

const Paragraph=styled.p`
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const OrderedList=styled.ol`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
list-style-type: decimal;
list-style-position: inside;
margin: 0;
padding: 0;
`;

const FooterHeader=styled.h2`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
margin: 0;
font-size: 24px;
    line-height: 2rem;
font-weight: 600;
`;

const Subscription = () => {
  return (
    <Container>
      <Header>Terms and Conditions</Header>
      <Subheader>
        <br/>
        <Website href="https://prosperi.university/">Prosperi</Website>, a product of AAAPPS LTD.</Subheader>
        <br/>
        <Paragraph>Please read this Agreement thoroughly and carefully. The purpose of this Agreement is to establish the terms and conditions under which the User obtains access to the investment learning materials.</Paragraph>
        <OrderedList>
          <li>
            <strong>Scope of Application</strong>
            <OrderedList style={{marginLeft:"1.5rem"}}>
            <li>The provisions of the Subscription terms govern the relationship between the SCORPIOS TECH-FZE, a legal entity incorporated under the laws of the United Arab Emirates with registration number DSO-FZE-2706, having its registered office at DTEC, Dubai Silicon Oasis, 00000, Dubai, United Arab Emirates (the "we", "us", "our" or the "Company") and you (the "you", “yours’ or the "User").</li>
            </OrderedList>
          </li>
          <br/>
          <li>
            <strong>Subscription terms and fees</strong>
            <OrderedList style={{marginLeft:"1.5rem"}}>
              <li>For our Services, we may offer a paid trial subscription (hereinafter referred to as the "introductory offer") additional paid features, and subscription plans (monthly, annually, or otherwise, depending on the option you select at the time of purchase). We may also provide offers that renew at the full not discounted price and other offers that may be interesting for you.</li>
              <li>Please note that if a paid trial subscription or additional paid features are offered for the service, this will be clearly indicated on the price screen prior to checkout.</li>
              <li>Introductory offers provide you access to the Service for a period of time, with details specified when you sign up for the offer. Unless you cancel before the end of the introductory offer, your access to the Service will automatically continue and you will be automatically charged a price indicated on the payment screen for a monthly subscription plan without notice. It is ultimately your responsibility to know when the paid trial subscription will end.</li>
              <li>After an introductory offer, the User gets access to a subscription plan (monthly, annually, or otherwise, depending on the option you select at the time of purchase) after payment for subscription services.</li>
              <li>Some subscription plans may have differing conditions and limitations, which will be disclosed at your sign-up or in other communications made available to you. You can find specific details regarding your subscription plan by clicking on the subscription section in the profile tab after logging in to your account.</li>
              <li>Fees for Services can be made on a subscription or one-time purchase basis.</li>
              <li>Subscription plans are automatically renewed at the end of each month/year unless you cancel earlier than 24 before the end of the current billing period. Money for the next period of use is debited 24 hours before the end of the current one.</li>
              <li>The prices and the amount of Digital Content available through subscription services may change from time to time by territory with or without clear notice (except where such information is mandatory under applicable law).</li>
              <li>We will give you reasonable notice of any such pricing changes by posting the new prices on or through the website and/or by sending you an e-mail notification, or in other prominent way. If you do not wish to pay the new price, you can cancel the applicable subscription prior to the change going into effect.</li>
              <li>If you have any questions in relation to the subscription prices, auto-renewal period or price changes, please contact us directly at support@prosperi.io</li>
            </OrderedList>
          </li>
          <br/>
          <li>
            <strong>Payment method</strong>
            <OrderedList style={{marginLeft:"1.5rem"}}>
              <li>Payment methods for the Services are billed by the Company via PayPal or other payment providers.</li>
              <li>The Company charges the applicable fees to the payment card you submit at the time of purchase (after you confirm by single-touch identification, facial recognition, or entering your payment method details on the web, or otherwise accepting subscription terms provided on the payment screen on our web page).</li>
              <li>You authorize us to store your payment method(s) and automatically charge the applicable subscription fees to the payment card that you submit for the renewal term.</li>
              <li>The prices available through subscription services may change from time to time by territory. Unless otherwise stated, any price changes will be effective from the start of the next subscription period. If you do not wish to pay the new price, you can cancel the applicable subscription prior to the change going into effect.</li>
            </OrderedList>
          </li>
          <br/>
          <li>
            <strong>Cancellation</strong>
            <OrderedList style={{marginLeft:"1.5rem"}}>
              <li>You can cancel an introductory offer or subscription plan by clicking on “Unsubscribe” button in your account before the end of the introductory offer or then-current subscription plan or by contacting our support at support@prosperi.io.</li>
              <li>Note that deleting the app does not cancel your subscriptions.</li>
              <li>Unless you cancel before the end of the introductory offer, your access to the Service will automatically continue and you will be automatically charged a price for a subscription plan (monthly, annually, or otherwise, depending on the option you select at the time of purchase) without notice. It is ultimately your responsibility to know when the paid trial subscription will end.</li>
              <li>The period of auto-renewal will be the same as your initial subscription period unless otherwise disclosed to you on the Service. The renewal rate will be no more than the rate for the immediately prior subscription period, excluding any promotional and discount pricing, unless we notify you of a rate change prior to your auto-renewal.</li>
              <li>In some cases, your payment date may change, such as when your payment method fails to settle or when you change your subscription plan. To view your next payment date, go to the website and click on the "Subscription" link on the "Account" page.</li>
              <li>Canceling your subscription means that the automatic renewal will be disabled, but you will still have access to all your subscription features for the remaining time of your then-current period. YOU HEREBY EXPRESSLY CONSENT TO THE IMMEDIATE PERFORMANCE OF THE AGREEMENT AND ACKNOWLEDGE THAT your subscription plan will automatically renew for every subsequent month/year until you cancel in settings.</li>
              <li>Auto-renewal of a purchased subscription can be disabled at any time:
if users used Paypal for the payment, unsubscribing can be initiated in their Paypal account;
if another selected payment method – unsubscribing can be initiated in their Account by clicking on "Unsubscribe" button in your account before the end of the paid trial or then-current subscription period.</li>
              <li>You must cancel your subscription in accordance with the cancellation procedures disclosed to you for the particular subscription. We will not refund fees that may have accrued to your account once Digital Content has been delivered to you.</li>
              <li>When you make the payment for the subscription services, you acknowledge and agree that all purchases are non-refundable or exchangeable.</li>
            </OrderedList>
          </li>
          <br/>
          <li>
            <strong>Refunds</strong>
            <OrderedList style={{marginLeft:"1.5rem"}}>
            <li>Fees for Services are made on a subscription or one-time purchase basis. We provide refunds at our own discretion and subject to laws and our terms and conditions, other supplemental terms, policies or documents that may be posted on the Company’s website and related subscription services from time to time.</li>
            <li>Since the Service is of a digital nature, we cannot accept any request for refunds unless we find the request acceptable.</li>
            <li>Therefore your right of withdrawal is lost at this point as the Service will be deemed consumed in full. Notwithstanding anything to the contrary in the foregoing, the Company will provide refunds and/or subscription cancellations in cases and to the extent required by mandatory provisions of the applicable law.</li>
            <li>Please note that after your subscription period expires, we will not be able to refund you.</li>
            <li>A subscription or one-time purchase paid via PayPal are subject to such PayPal’s refund policies. This means we cannot grant refunds.</li>
            <li>For the subscribers residing in the EU or European Economic Area: If you are an EU resident, you are entitled to a full refund without stating any reason within fourteen (14) days after the subscription begins for the purchase of digital content. Please note that this 14-day period commences when the subscription starts. The withdrawal right does not apply if the performance of the Agreement has begun with your prior expressed consent and your acknowledgment that you thereby lose your right of withdrawal. YOU HEREBY EXPRESSLY CONSENT TO THE IMMEDIATE PERFORMANCE OF THE AGREEMENT AND ACKNOWLEDGE THAT YOU WILL LOSE YOUR RIGHT OF WITHDRAWAL FROM THE AGREEMENT ONCE OUR SERVERS VALIDATE YOUR PURCHASE AND THE APPLICABLE PURCHASE IS SUCCESSFULLY DELIVERED TO YOU. Therefore, you will not be eligible for a refund unless the digital content is defective. (See the full text of the European “Consumer Rights Directive” (CRD) at https://eur-lex.europa.eu/eli/dir/2019/2161/oj )</li>
            <li>For the subscribers residing in other States: all charges for purchases are non-refundable and/or non-exchangeable, and there are no refunds or credits for partially used periods unless otherwise stated in section 5.8. as required by applicable law for refunds.</li>
            <li>The User is eligible to receive a full refund if all the following criteria are met:
the User contacts us within 31 days after the initial purchase,
the User has followed the recommendations from the provided plan at least 28 consecutive days within the first 31 days after the purchase, and
the User can demonstrate that he/she conscientiously has followed the plan (ex.: provide photos and/or video of completion of recommendations, tasks, etc.).</li>
            <li>These refund conditions apply only to services that have been subscribed to for at least one month. To request a refund, please, contact us via support@prosperi.io. We will review each case and notify the User by email whether the application is approved and how the refund will be made.</li>
            <li>Please note that only fulfillment of all the above criteria stated in section 5.8 allow the User to receive a refund under this provision. For the sake of clarity, the Money-back guarantee does not apply to any other instances, such as the following cases:
Personal reasons (you don’t like the product, it did not meet your expectations etc.);
Financial reasons (you did not expect that you will be charged, that the trial will be converted into subscription, that the subscription will automatically renew, or that the services are paid etc.).</li>
            </OrderedList>
          </li>
          <br/>
          <li>
            <strong>Changes</strong>
            <OrderedList start={{marginLeft: "1.5rem"}}>
              <li>The Company reserves the right, in its sole discretion, to modify, alter or otherwise update this Subscription term or to change, delete or otherwise update any features of the Service, the amount of Digital Content as well as set any price changes that will be effective from the start of the next subscription period with or without clear notice (except where such information is mandatory under applicable law).</li>
              <li>We will give you reasonable notice of any such pricing changes by posting the new prices on or through the website and/or by sending you an e-mail notification, or in other prominent way. If you do not wish to pay the new price, you can cancel the applicable subscription prior to the change going into effect.</li>
              <li>We may provide you with notice about some critical changes, for example by email or by posting notifications on the Service, but are not obliged to do so in every case. Any other changes will be notified to you only by updating the "Last updated" date of these Subscription terms and other supplemental terms, policies or documents that may be posted on the Company’s website and you waive any right to receive specific notice of each such change. If you don’t agree to the changes, you should stop using the Service. Use of the Service after any changes to these Subscription terms and other supplemental terms, policies or documents are made means that you accept such changes.</li>
            </OrderedList>
          </li>
          <br/>
          <li>
            <strong>Requirements</strong>
            <OrderedList start={{marginLeft: "1.5rem"}}>
             <li>To enter into a legally binding agreement with the SCORPIOS TECH-FZE, the User must be a physical entity with deed capacity and 18 years of age or older. Individuals as young as 16 years old may use the Company's website and related subscription services with the permission of their parents, provided they have read and agreed to be bound by the provisions of the <Website href="https://prosperi.university/terms">Terms and Conditions</Website>, and the extension of its action to them.</li>              
            </OrderedList>
          </li>
          <br/>
          <li>
            <strong>Acceptance</strong>
            <OrderedList start={{marginLeft: "1.5rem"}}>
              <li>By continuing to use this website, the User agrees to its Subscription terms and other supplemental terms, policies or documents, that may be posted on the Company’s website and related subscription services.</li>
              <li>Accepting these Subscription terms and other supplemental terms, policies or documents, the User agrees, acknowledges familiarization and understanding of its provisions, and refuses to demand a refund in cases not described in section 5.8.</li>
            </OrderedList>
          </li>
          <br/>
          <li>
            <strong>Contacts.</strong>
            <OrderedList start={{marginLeft: "1.5rem"}}>
              <li>
              To find more information about our Service and its features or if you need assistance with your Account, please visit our FAQ Section, which is accessible through the Company’s website.
              </li>
              <li>
              Complaints and requests shall be directed to the Support Service at support@prosperi.io.
              </li>
            </OrderedList>
         </li>
         <br/>
         <div>
          <FooterHeader>Contact us</FooterHeader>
          <br/>
          <Paragraph>AAAPPS LTD</Paragraph>
          <Paragraph></Paragraph>
          <Paragraph>London, United Kingdom</Paragraph>
          <Paragraph></Paragraph>
          <Paragraph>email: <Website href="mailto:"></Website></Paragraph>
          <br/>
          <Paragraph>Date of Last Revision: November 2nd, 2022.</Paragraph>
          <Paragraph>© AAAPPS LTD 2022 All rights reserved.</Paragraph>
         </div>
        </OrderedList>
    </Container>
  )
}

export default Subscription