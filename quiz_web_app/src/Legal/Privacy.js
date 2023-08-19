import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';

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

const FooterHeader=styled.h2`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
margin: 0;
font-size: 24px;
    line-height: 2rem;
font-weight: 600;
`;

const Header=styled.h1`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 600;
    font-size: 36px;
    line-height: 2rem;
    margin: 0;
 text-align: center;
`;

const Content=styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Paragraph=styled.p`
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Website=styled.a`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-decoration-line: underline;
    --tw-text-opacity: 1;
    color: rgb(0 0 255/var(--tw-text-opacity));
`;

const ContentHeader=styled.h3`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 2em;    
    margin: 0;
`;

const OrderedList=styled.ol`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
list-style-type: decimal;
list-style-position: inside;
margin-left: 1.5rem;
margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-right: 0;
padding: 0;
`;

const Privacy = () => {
  return (
    <Container>
      <Header style={{marginBottom: '16px'}}>IMPORTANT PRIVACY INFORMATION</Header>
      <Content>
        <Paragraph>To use the service on the website, we may ask you to enter information about your age, gender, email address, current financial situation and ask other onboarding questions. We also automatically collect from your device: language settings, IP address, time zone, type and model of a device, device settings, operating system. We need this data to provide our services, analyze how our customers use the service and to measure ads.</Paragraph>
        <br/>
        <Paragraph>For improving our service and serving ads, we use third party solutions. As a result, we may process data using solutions developed by Amazon Web Services, Facebook, Google, TikTok, Hotjar, Amplitude, Apple, PayPal, FreshDesk, Solidgate, ActiveCampaign. Therefore, some of the data is stored and processed on servers of such third parties. This enables us to: (1) analyze different interactions (how often users make subscriptions, what is the most popular users’ financial goal, what is the average time spent by users on the service); (2) serve ads (and are able to show them only to a particular group users, for example, to subscribers). Consequently, we, in particular, better understand in what of our features and content you see the most value and are able to focus on them to enhance your experience and increase the quality of our products.</Paragraph>
        <br/>
        <Paragraph>Please read our Privacy Policy below to know more about what we do with data (Section 3) , what data privacy rights are available to you (Section 3) and who will be the data controller (Section 1).If any questions remain unanswered, please contact us at <Website href="mailto:support@prosperi.university">support@prosperi.university</Website> .</Paragraph>
        <br/>
      </Content>
      <Header>Privacy Policy</Header>
      <Paragraph>This Privacy Policy explains what personal data is collected when you use the Prosperi website located at <Website href="https://prosperi.university">https://prosperi.university</Website> (the “Website”) and the services and Digital products provided through it (the “Service”), how such personal data will be processed.</Paragraph>
      <br/>
      <Paragraph>BY USING THE SERVICE, YOU PROMISE US THAT (I) YOU HAVE READ, UNDERSTAND AND AGREE TO THIS PRIVACY POLICY, AND (II) YOU ARE OVER 16 YEARS OF AGE (OR HAVE HAD YOUR PARENT OR GUARDIAN READ AND AGREE TO THIS PRIVACY POLICY FOR YOU). If you do not agree, or are unable to make this promise, you must not use the Service. In such case, you must (a) contact us and request deletion of your data; and (b) cancel any subscriptions using the functionality provided by instructions on the Website; (c) leave the Website and not access or use it.</Paragraph>
      <br/>
      <Paragraph><strong>“GDPR”</strong>  means the General Data Protection Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data.</Paragraph>
      <br/>
      <Paragraph><strong>“EEA”</strong> includes all current member states to the European Union and the European Economic Area. For the purpose of this policy EEA shall include the United Kingdom of Great Britain and Northern Ireland.</Paragraph>
      <br/>
      <Paragraph><strong>Process”</strong>, in respect of personal data, includes to collect, store, and disclose to others.</Paragraph>
      <br/>
      <Content>
        <ContentHeader>TABLE OF CONTENTS</ContentHeader>
        <OrderedList>
          <strong>
            <li>PERSONAL DATA CONTROLLER</li>
            <li>CATEGORIES OF PERSONAL DATA WE COLLECT</li>
            <li>FOR WHAT PURPOSES WE PROCESS PERSONAL DATA</li>
            <li>UNDER WHAT LEGAL BASES WE PROCESS YOUR PERSONAL DATA (Applies only to EEA-based users)</li>
            <li>WITH WHOM WE SHARE YOUR PERSONAL DATA</li>
            <li>HOW YOU CAN EXERCISE YOUR PRIVACY RIGHTS</li>
            <li>AGE LIMITATION</li>
            <li>INTERNATIONAL DATA TRANSFERS</li>
            <li>CHANGES TO THIS PRIVACY POLICY</li>
            <li>CALIFORNIA PRIVACY RIGHTS</li>
            <li>DATA RETENTION</li>
            <li>HOW “DO NOT TRACK” REQUESTS ARE HANDLED</li>
            <li>CONTACT US</li>
          </strong>
        </OrderedList>
      </Content>
      <Content style={{marginTop: "1.5rem", marginBottom: "1.5rem"}}>
        <OrderedList style={{margin: "0"}}>
          <li>
            <strong>PERSONAL DATA CONTROLLER</strong>
            <br/>
            <Paragraph>SCORPIOS TECH-FZE, a company registered under the laws of the United Arab Emirates with registration number DSO-FZE-2706, having its registered office at DTEC, Dubai Silicon Oasis, 00000, Dubai, United Arab Emirates will be the controller of your personal data.</Paragraph>
          </li>
          <li>
            <strong>CATEGORIES OF PERSONAL DATA WE COLLECT</strong>
            <br/>
            <Paragraph>We collect data you give us voluntarily (for example, when you enter your gender, financial status or email). We also collect data automatically (for example, your IP address) and use third-party service providers for such collection.</Paragraph>
            <OrderedList style={{marginTop: '0', marginBottom: '0'}}>
              <li>
                <strong>Data you give us</strong>
                <br/>
                <Paragraph>You provide us information about yourself when you register for and/or use the Service. For example: age,</Paragraph>
              </li>
              <li>
                <strong>Data we collect automatically:</strong>
                <br/>
                <ul style={{marginLeft: '1.5rem'}}>
                  <li>
                    <strong>Data about how you found us</strong>
                    <br/>
                    <Paragraph>We collect data about your referring URL (that is, the place on the Web where you were when you tapped on our ad).</Paragraph>
                  </li>
                  <li>
                    <strong>Device and Location data.</strong>
                    <br/>
                    <Paragraph>We collect data from your device. Examples of such data include: language settings, IP address, time zone, type and model of a device, device settings, operating system and its version.</Paragraph>
                  </li>
                  <li>
                    <strong>Usage data</strong>
                    <br/>
                    <Paragraph>We record how you interact with our Service. For example, we log your taps/clicks on certain areas of the interface, the features, and content you interact with, how often you use the Service, how long you are in the Service, and your subscription orders. We also record the ads in our Website with which you interact (and the Internet links to which those adds lead).</Paragraph>
                  </li>
                  <li>
                    <strong>Transaction data</strong>
                    <br/>
                    <Paragraph>When you make payments through the Service, you need to provide financial account data, such as your credit card number, to our third-party service providers. We do not collect or store full credit card number data, though we may receive credit card-related data, data about the transaction, including: date, time and amount of the transaction, the type of payment method used.</Paragraph>
                  </li>
                  <li>
                    <strong>Cookies</strong>
                    <br/>
                    <Paragraph>A cookie is a small text file that is stored on a user's computer for record-keeping purposes. Cookies can be either session cookies or persistent cookies. A session cookie expires when you close your browser and is used to make it easier for you to navigate our Service. A persistent cookie remains on your hard drive for an extended period of time. We also use tracking pixels that set cookies to assist with delivering online advertising.
Cookies are used, in particular, to automatically recognize you the next time you visit our website. As a result, the information, which you have earlier entered in certain fields on the website may automatically appear the next time when you use our Service. Cookie data will be stored on your device and most of the times only for a limited time period.</Paragraph>
                  </li>
                </ul>
              </li>
              <li>
                <strong>FOR WHAT PURPOSES WE PROCESS YOUR PERSONAL DATA</strong>
                <br/>
                <span style={{marginLeft: '1.5rem'}}>We process your personal data:</span>
                <br/>
                <OrderedList style={{marginTop: '0', marginBottom: '0'}}>
                    <li>
                      <strong>To provide our Service</strong>
                      <br/>
                      This includes enabling you to use the Service in a seamless manner and preventing or addressing Service errors or technical issues. To host personal data and enable our Website to operate and be distributed we use <strong>Amazon Web Services,</strong> which are hosting and backend services provided by Amazon.
                    </li>
                    <li>
                      <strong>To manage your account and provide you with customer support</strong>
                      <br/>
                      We process your personal data to respond to your requests for technical support, service information or to any other communication you initiate. This includes accessing your account to address technical support requests. For this purpose, we may send you, for example, notifications or emails about the performance of our Service, security, payment transactions, notices regarding our <Website href="https://prosperi.university/terms">Terms and Conditions</Website> or this <Website href="https://prosperi.university/privacy">Privacy Policy</Website>.
                    </li>
                    <li>
                      <strong>To communicate with you regarding your use of our Service</strong>
                      <br/>
                      We communicate with you, for example, by emails. These may include information about the Service, some critical changes, special offers. To opt-out of receiving emails, you should click unsubscribe link in the footer of our email. The services that we use for these purposes may collect data concerning the date and time when the message was viewed by our users, as well as when they interacted with it, such as by clicking on links included in the message.
                      <strong>FreshDesk</strong> provides us with message and customer service tools, which enable us to communicate with you within the Service. When you chat with us via in-Service chat, some of your information is automatically transferred to FreshDesk. The transfer is required to enable us to identify (if you shared any name related data with us) and to communicate with you in the in-Service chat. Thus, FreshDesk uses these data to provide and fulfill its services (as set forth in their terms of service).
                    </li>
                    <li>
                      <strong>To research and analyze your use of the Service</strong>
                      <br/>
                      This helps us to better understand our business, analyze our operations, maintain, improve, innovate, plan, design, and develop the Service and our new products. We also use such data for statistical analysis purposes, to test and improve our offers. This enables us to better understand what features and learning plans of the Services our users like more, what categories of users use our Services. As a consequence, we often decide how to improve the Service based on the results obtained from this processing. For example, if we discover that users more often engage in specific topics about investments, we may develop and introduce extra chapters into this category.
To analyze how visitors use our Service and to measure effectiveness of some ads we use <strong>Google Analytics,</strong>
a web analysis program of Google. In order to provide us with analytics, Google Analytics places cookies on your device. On Google Analytics we get, in particular, aggregated information on the data you enter on our Service and users’ interactions within the Service. Google allows you to influence the collection and processing of information generated by the Google, in particular, by installing a browser plug-in, available here. <br/>
We also use <strong>Amplitude,</strong> which is an analytics service provided by Amplitude Inc. We use this tool to understand how customers use our Service. Amplitude collects various technical information, in particular, time zone, type of device (phone or tablet), unique identifiers. Amplitude also allows us to track various interactions that occur on the Website. As a result, Amplitude helps us to decide what features should we focus on. Amplitude is EU-US Privacy Shield certified. Amplitude provides more information on how they process data in its Privacy Policy.
                    </li>
                    <li>
                      <strong>To send you marketing communications</strong>
                      <br/>
                      We process your personal data for our marketing campaigns. We may add your email address to our marketing list, provided we receive consent or otherwise establish legal basis for sending you marketing communications. As a result, you will receive information about our products, such as for example, special offers. If you do not want to receive marketing emails from us, you can unsubscribe following instructions in the footer of the marketing emails.
To communicate with you we use <strong>ActiveCampaign,</strong> which is message sending service. We integrate Amplitude to create analytics-based audiences and track opening and conversion events.
                    </li>
                    <li>
                      <strong>To personalize our ads</strong>
                      <br/>
                      We and our partners, including Facebook and Google, use your personal data to tailor ads and possibly even show them to you at the relevant time.
                      <br/>
                      <br/>
                      <strong>How to opt out or influence personalized advertising</strong>
                      <br/>
                      <br/>
                      <Content><strong>IOS:</strong> On your iPhone or iPad, go to “Settings,” then “Privacy” and tap “Advertising” to select “Personalized Ads”. In addition, you can reset your advertising identifier (this also may help you to see less of personalized ads) in the same section.</Content>
                      <br/>
                      <Content><strong>Android: </strong>To opt-out of ads on an Android device, simply open the Google Settings app on your mobile phone, tap “Ads” and enable “Opt out of interest-based ads”. In addition, you can reset your advertising identifier in the same section (this also may help you to see less of personalized ads).</Content>
                      <br/>
                      <Content><strong>macOS: </strong>On your MacBook, you can disable personalized ads: go to System Preferences {'>'} Security & Privacy {'>'} Privacy, select Apple Advertising, and deselect Personalized Ads.</Content>
                      <br/>
                      <Content><strong>Windows: </strong>On your laptop running Windows 10, you shall select Start {'>'} Settings {'>'} Privacy and then turn off the setting for Let apps use advertising ID to make ads more interesting to you based on your app activity. If you have other Windows version, please follow the steps here.</Content>
                      <br/>
                      <Content>To learn even more about how to affect advertising choices on various devices, please look at the information available here. In addition, you may get useful information and opt out of some interest-based advertising, by visiting the following links:
<br/>Network Advertising Initiative – http://optout.networkadvertising.org/
<br/>Digital Advertising Alliance – http://optout.aboutads.info/
<br/>Digital Advertising Alliance (Canada) –http://youradchoices.ca/choices
<br/>Digital Advertising Alliance (EU) – http://www.youronlinechoices.com/</Content>
                      <br/>
                      <Content>We value your right to influence the ads that you see, thus we are letting you know what service providers we use for this purpose and how some of them allow you to control your ad preferences.</Content>
                      <br/>
                      <Content>We use <strong>Facebook pixel</strong> on the Service. Facebook pixel is a code placed on the Service collecting data that helps us track conversions from Facebook Ads, build targeted audience and remarket to people who have taken some actions on the Service (for example, made a purchase).</Content>
                      <br/>
                      <Content>We use <strong>Facebook Ads Manager</strong> together with <strong>Facebook Custom Audience,</strong> which allows us to choose audiences that will see our ads on Facebook or other Facebook’s products (for example, Instagram). Through Facebook Custom Audience we may create a list of users with certain sets of data to choose users that have completed certain actions in the Service (for example, bought it). As a result, we may ask Facebook to show some ads to a particular list of users. As a result, more of our ads may show up while you are using Facebook or other Facebook’s products (for example, Instagram). You may learn how to opt out of advertising provided to you through Facebook Custom Audience <Website href="https://www.facebook.com/business/help/1415256572060999">here</Website>. Facebook also allows its users to influence the types of ads they see on Facebook. To find how to control the ads you see on Facebook, please go <Website href="https://www.facebook.com/help/146952742043748?helpref=related">here</Website> or adjust your ads settings on <Website href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen">Facebook</Website>.</Content>
                      <br/>
                      <Content><strong>Google ADS </strong>is an ad delivery service provided by Google that can deliver ads to users. In particular, Google allows us to tailor the ads in a way that they will appear, for example, only to users that have conducted certain actions with our Service (for example, show our ads to users who have purchased a subscription). <Website href="https://adssettings.google.com/authenticated">Google allows its users to opt out of Google’s personalized ads</Website> and to <Website href="https://tools.google.com/dlpage/gaoptout/">prevent their data from being used by Google Analytics.</Website></Content>
                      <br/>
                      <Content>The <strong>TikTok pixel</strong> is a piece of JavaScript code that helps Advertisers measure the cross-device impact of Campaigns. Advertisers will be able to see how many TikTokers take action on their website(s) after seeing their Ad.</Content>
                      <br/>
                      <Content><strong>TikTok Ads</strong>  is the service provided by TikTok that can deliver ads to its users. The ads can be tailored to specific categories of users (for instance, based on their geographical location).TikTok’s Privacy Policy.</Content>
                      <br/>
                    </li>
                </OrderedList>
                </li>
                <li>
                      <strong>To process your payments</strong>
                      <br/>
                      We provide paid features and/or services within the Service. For this purpose, we use third-party services for payment processing (for example, payment processors). As a result of this processing, you will be able to make a payment for our Service and we will be notified that the payment has been made and will provide you with . We will not store or collect your payment card details ourselves. This information will be provided directly to our third-party payment processors. We use SolidGate to process your payments on the Website.
                    </li>
                    <li>
                      <strong>To enforce our Terms and Conditions and to prevent and combat fraud</strong>
                      <br/>
                      We use personal data to enforce our agreements and contractual commitments, to detect, prevent, and combat fraud. As a result of such processing, we may share your information with others, including law enforcement agencies (in particular, if a dispute arises in connection with our <Website href="https://prosperi.university/terms">Terms and Conditions</Website>).
                    </li>
                    <li>
                      <strong>To comply with legal obligations</strong>
                      <br/>
                      We may process, use, or share your data when the law requires it, in particular, if a law enforcement agency requests your data by available legal means.
                    </li>
              </OrderedList>
          </li>       
          <li>
          <strong>UNDER WHAT LEGAL BASES WE PROCESS YOUR PERSONAL DATA (Applies only to EEA-based users)</strong>
          <br/>
          In this section, we are letting you know what legal basis we use for each particular purpose of processing. For more information on a particular purpose, please refer to Section 3. This section applies only to EEA-based users.
We process your personal data under the following legal bases:
          <br/>
          <OrderedList style={{marginTop: '0', marginBottom: '0'}}>
          <li><strong>Your consent</strong><br/>Under this legal basis we will send you marketing emails. You have the right to withdraw your consent at any time by clicking on unsubscribe link in the footer of our marketing emails</li>
          <li><strong>To perform our contract with you</strong><br/>Under this legal basis we: 
          <br/>
          <OrderedList style={{marginTop: '0', marginBottom: '0'}}>
            <li>Provide our Service in accordance with our <Website href="https://prosperi.university/terms">Terms and Conditions</Website></li>
            <li>Customize your experience</li>
            <li>Manage your account and provide you with customer support</li>
            <li>Communicate with you regarding your use of our Service</li>
            <li>Process your payments</li>
          </OrderedList>
          </li>
          <li><strong>For our (or others‘) legitimate interests, unless those interests are overridden by your interests or fundamental rights and freedoms that require protection of personal data:</strong><br/>We rely on legitimate interests:
          <br/>to research and analyze your use of the Service. Our legitimate interest for this purpose is our interest in improving our Service so that we understand users’ preferences and are able to provide you with a better experience (for example, to introduce and test new features).
          <br/>to send you marketing communications. The legitimate interest we rely on for this processing is our interest to promote our Service in a measured and appropriate way.
          <br/>to personalize our ads. The legitimate interest we rely on for this processing is our interest to promote our Service in a reasonably targeted way.
          <br/>to enforce our Terms and Conditions and to prevent and combat fraud.Our legitimate interests for this purpose are enforcing our legal rights, preventing and addressing fraud and unauthorised use of the Service, non-compliance with our Terms and Conditions
          <br/>to comply with legal obligations.
          </li>
          </OrderedList >
          </li> 
          <li><strong>WITH WHOM WE SHARE YOUR PERSONAL DATA</strong><br/>
          We share information with third parties that help us operate, provide, improve, integrate, customize, support, and market our Service. We may share some sets of personal data, in particular, for purposes indicated in Section 3 of this Privacy Policy. The types of third parties we share information with include, in particular:
          <OrderedList style={{marginTop: '0', marginBottom: '0'}}>
            <li>
              <strong>SERVICE PROVIDERS</strong><br/>We share personal data with third parties that we hire to provide services or perform business functions on our behalf, based on our instructions. We share your personal information with the following types of service providers:
              <br/>cloud storage providers (Amazon Web Services)
              <br/>data analytics providers (Facebook, Google, Amplitude)
              <br/>marketing partners (in particular, social media networks, marketing agencies, email delivery services, Facebook, Google, ActiveCampaign)
              <br/>payment processing providers(Solidgate, PayPal, ApplePay, GooglePay)
              <br/>communication services providers (FreshDesk)
            </li>
            <li><strong>LAW ENFORCEMENT AGENCIES AND OTHER PUBLIC AUTHORITIES</strong>
            <br/>We may use and disclose personal data to enforce our Terms and Conditions, to protect our rights, privacy, safety, or property, and/or that of our affiliates, you or others, and to respond to requests from courts, law enforcement agencies, regulatory agencies, and other public and government authorities, or in other cases provided for by law.
            </li>
            <li><strong>THIRD PARTIES AS PART OF A MERGER OR ACQUISITION</strong>
            <br/>As we develop our business, we may buy or sell assets or business offerings. Customers’ information is generally one of the transferred business assets in these types of transactions. We may also share such information with any affiliated entity (e.g. parent company or subsidiary) and may transfer such information in the course of a corporate transaction, such as the sale of our business, a divestiture, merger, consolidation, or asset sale, or in the unlikely event of bankruptcy.
            </li>
          </OrderedList>
          </li>
          <li><strong>HOW YOU CAN EXERCISE YOUR PRIVACY RIGHTS</strong>
          <br/>
          <Paragraph>To be in control of your personal data, you have the following rights:</Paragraph>
          <br/>
          <Paragraph>Accessing / reviewing / updating / correcting your personal data. You may request a copy of your personal data and request us to update/correct your personal data collected during your use of the Service at <Website href="mailto:support@prosperi.university">support@prosperi.university</Website></Paragraph>
          <br/>
          <Paragraph>Deleting your personal data. You can request erasure of your personal data by sending us an email at <Website href="mailto:support@prosperi.university">support@prosperi.university</Website>. When you request deletion of your personal data, we will use reasonable efforts to honor your request. In some cases we may be legally required to keep some of the data for a certain time; in such event, we will fulfill your request after we have complied with our obligations.</Paragraph>
          <br/>
          <Paragraph>Objecting to or restricting the use of your personal data. You can ask us to stop using all or some of your personal data or limit our use thereof by sending requests to <Website href="mailto:support@prosperi.university">support@prosperi.university</Website></Paragraph>
          <br/>
          <Paragraph>If you are based in the EEA, you have the right to lodge a complaint with supervisory authority. We would love you to contact us directly, so we could address your concerns. Nevertheless, you have the right to lodge a complaint with a competent data protection supervisory authority, in particular in the EU Member State where you reside, work or where the alleged infringement has taken place.
</Paragraph>
          <br/>
          <Paragraph>The right to data portability. If you wish to receive your personal data in a machine-readable format, you can send respective request to <Website href="mailto:support@prosperi.university">support@prosperi.university</Website></Paragraph>
          <br/>
          <Paragraph>To exercise any of the available to you privacy rights, please send a request to <Website href="mailto:support@prosperi.university">support@prosperi.university</Website></Paragraph></li>
          <li>
            <strong>AGE LIMITATION</strong>
            <br/>
            We do not knowingly process personal data from persons under 16 years of age. If you learn that anyone younger than 16 has provided us with personal data, please contact us at <Website href="mailto:support@prosperi.university">support@prosperi.university</Website>
          </li>
          <li>
            <strong>INTERNATIONAL DATA TRANSFERS</strong>
            <br/>We may transfer personal data to countries other than the country in which the data was originally collected in order to provide the Service set forth in the Terms and Conditions and for purposes indicated in this Privacy Policy. If these countries do not have the same data protection laws as the country in which you initially provided the information, we deploy special safeguards.

In particular, if we transfer personal data originating from the EEA to countries with not adequate level of data protection, we use one of the following legal bases: (i) Standard Contractual Clauses approved by the European Commission (details available here), or (ii) the European Commission adequacy decisions about certain countries (details available <Website href="https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/adequacy-protection-personal-data-non-eu-countries_en">here</Website>).
          </li>
          <li>
            <strong>CHANGES TO THIS PRIVACY POLICY</strong><br/>
            We may modify this Privacy Policy from time to time. If we decide to make material changes to this Privacy Policy, you will be notified through our Service or by other available means and will have an opportunity to review the revised Privacy Policy. By continuing to access or use the Service after those changes become effective, you agree to be bound by the revised Privacy Policy.
          </li>
          <li>
            <strong>CALIFORNIA PRIVACY RIGHTS</strong><br/>
            This section provides additional details about how we process personal data of California consumers and the rights available to them under the California Consumer Privacy Act (“CCPA”) and California’s Shine the Light law. Therefore, this section applies only to residents of California, United States. California’s Shine the Light law gives California residents the right to ask companies once a year what personal information they share with third parties for those third parties‘ direct marketing purposes. Learn more about what is considered to be <Website href="http://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.81.5">personal information under the statute</Website>. To obtain this information from us, please send an email message to <Website href="mailto:support@prosperi.university">support@prosperi.university</Website> which includes “Request for California Shine the Light Privacy Information” on the subject line and your state of residence and email address in the body of your message. Please be aware that not all information sharing is covered by the “Shine the Light” requirements and only information on covered sharing will be included in our response.
          </li>
          <li>
            <strong>DATA RETENTION</strong>
            <br/>We will store your personal data for as long as it is reasonably necessary for achieving the purposes set forth in this Privacy Policy (including providing the Service to you), which includes (but is not limited to) the period during which you have an account with the App. We will also retain and use your personal data as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
          </li>
          <li>
            <strong>HOW “DO NOT TRACK” REQUESTS ARE HANDLED</strong>
            <br/>Except as otherwise stipulated in this Privacy Policy, this App does not support “Do Not Track” requests. To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies.
          </li>
          
        </OrderedList>
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
         <Content>
          <br/>
          <Paragraph>
* “Personal data” means any information relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person (Article 4 (1) of the GDPR).</Paragraph>
          <br/>
          <Paragraph>(See the full text of the EU’s General Data Protection Regulation (GDPR) at https://eur-lex.europa.eu/eli/reg/2016/679/oj)</Paragraph>
         </Content>
      </Content>
    </Container>
  )
}

export default Privacy