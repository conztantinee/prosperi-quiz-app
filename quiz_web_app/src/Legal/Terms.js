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

const Terms = () => {
  return (
    <Container>
      <Header>Terms and Conditions</Header>
      <Subheader>
        <br/>
        <Website href="https://prosperi.university/">Prosperi</Website>, a product of AAAPPS LTD.</Subheader>
        <br/>
        <Paragraph>
          <em>
            <strong>This service includes subscriptions that automatically renew.
            </strong> Please read these terms and conditions of use (the “T&C”) carefully (in particular, Section 4 “subscription terms and fees”, Section 5 “billing and cancellation”) before starting a trial or completing a purchase for our auto-renewing subscription service.
            <strong>To avoid being charged</strong> you must<strong> affirmatively cancel</strong> your subscription <strong> at least 24 hours before the end of the introductory offer or then-current subscription plan.</strong>Deleting the app does not cancel your subscriptions and trials. We also aim to provide information about our subscription policies at or near the point of purchase. Please review these policies prior to making purchases. You may wish to make a printscreen of this information for your reference.
          </em>
        </Paragraph>
        <br/>
        <Paragraph>FURTHERMORE, THESE TERMS CONTAIN IMPORTANT DISCLAIMERS OF WARRANTIES AND LIABILITIES (SECTION 10) AND LIMITATION OF LIABILITY (SECTION 11).</Paragraph>
        <OrderedList>
          <li>
            <strong>Scope of Application</strong>
            <OrderedList style={{marginLeft:"1.5rem"}}>
            <li>The provisions of the Terms and Conditions of use (hereinafter referred to as the "T&C") govern the relationship between the SCORPIOS TECH-FZE, a legal entity incorporated under the laws of United Arab Emirates with registration number DSO-FZE-2706, having its registered office at DTEC, Dubai Silicon Oasis, 00000, Dubai, United Arab Emirates (the "we", "us", "our" or the "Company") and you (the "you", “yours’ or the "User").</li>
            <li>These T&C apply to the use of Company’s website and related subscription services on the website including but not limited to introductory offers, additional paid features and subscription plans (hereinafter referred to as the "Service").</li>
            <li>The Company reserves the right, in its sole discretion, to modify, alter or otherwise update these T&C or to change, delete or otherwise update any features of the Service, as well as set any price changes that will be effective from the start of the next subscription period.</li>
            <li>We may provide you with notice about some critical changes, for example by email or by posting notifications on the Service, but are not obliged to do so in every case. Any other changes will be notified to you only by updating the "Last updated" date of these T&C and you waive any right to receive specific notice of each such change. If you don’t agree to the changes, you should stop using the Service. Use of the Service after any changes to these T&C are made means that you accept such changes.</li>
            <li>These T&C establish a legally binding contractual relationship between you and the Company. For this reason, PLEASE READ THE TERMS AND CONDITIONS CAREFULLY BEFORE USING THE SERVICE.</li>
            <li>To enter into a legally binding agreement with the Company, the User must be a physical entity with deed capacity and 18 years of age or older. Individuals as young as 16 years old may use the Company's website and related subscription services with the permission of their parents, provided they have read and agreed to be bound by these T&C.</li>
            <li>Please review also our <Website href="https://prosperi.university/privacy">Privacy Policy</Website> The terms of the Privacy Policy and other supplemental terms, policies or documents that may be posted on the Service from time to time are hereby expressly incorporated herein by reference.</li>
            <li>IF YOU DO NOT AGREE WITH ANY PART OF THESE T&C AND OTHER SUPPLEMENTAL TERMS, OR IF YOU ARE NOT ELIGIBLE OR AUTHORIZED TO BE BOUND BY THESE T&C AND OTHER SUPPLEMENTAL TERMS, THEN DO NOT ACCESS OR USE THE SERVICE.</li>
            </OrderedList>
          </li>
          <br/>
          <li>
            <strong>Services Descriptions</strong>
            <OrderedList style={{marginLeft:"1.5rem"}}>
              <li>The Company provides the Service by which the User obtains access to a consistent plan for receiving information intended to improve the User's financial literacy, investment reading materials, test questions to check learning progress, articles (hereinafter referred to as the "Digital Content").</li>
              <li>The Service enables users to access an online investment simulator to practice trading with virtual money. This allows users to practice trading with little to no consequences, learn how the stock market works and learn how to use an online brokerage.</li>
              <li>All of the money in the investment simulator is virtual and is used solely for educational and practical purposes. They are intended solely for use with the investment simulator.</li>
              <li>The User is granted access to the Digital Content upon registering for the Service, which may include introductory offers, additional paid features, and subscription plans (monthly, annually, or otherwise, depending on the option you select at the time of purchase).</li>
              <li>Some subscription plans may have differing conditions and limitations, which will be disclosed at your sign-up or in other communications made available to you. You can find specific details regarding your subscription plan by clicking on the subscription section in the profile tab after logging in to your account.</li>
              <li>Certain features of the Service may be available on a subscription or one-time purchase basis for a fee.</li>
              <li>Subject to these T&C, the Company grants you a non-transferable, non-exclusive, license (without the right to sublicense) to use the Service solely for your personal, non-commercial purposes.</li>
              <li>Your access to and use of the Service is at your own risk. Your decision to make an investment should be made at your own discretion and upon their own will only. The Company is not liable for any damage to your computer system, loss of data, or monetary loss resulting from your access to or use of the Service, or reliance on any information or advice.</li>
              <li>The User acknowledges that all the information, text, images, graphics, marks, logos, compilations (meaning the collection, arrangement and assembly of information), data, other content, software and materials available through subscription services or used by the Company to operate the Service (including Digital Content and excluding any User Content (as defined below)) is proprietary to us or to third parties.</li>
              <li>The information you submit to us as part of your registration to the Service (the "User Content"), remains your intellectual property, and the Company makes no claim to the copyright or other proprietary rights in such registration information and the User Content. You agree, notwithstanding the foregoing, that the Company may retain copies of all registration information and User Content and use such information and User Content as reasonably required or incidental to its operation of the Service and as described in these T&C and other supplemental terms.</li>
              <li>The Company expressly reserves all rights, including all intellectual property rights, in the foregoing, and any use, redistribution, sale, decompilation, reverse engineering, disassembly, translation, or other exploitation of them is strictly prohibited unless expressly permitted by these T&C. Unless otherwise expressly stated in these T&C, the provision of the Service does not transfer to you or any third party any rights, title, or interest in or to such intellectual property rights.</li>
              <li>You acknowledge that a variety of Company's actions may impair or prevent you from accessing the Service at certain times and/or in the same way, for limited periods or permanently, and agree that the Company has no responsibility or liability as a result of any such actions or results, including, without limitation, for the deletion of, or failure to make available to you, any Digital Content or Services.</li>
              <li>You agree, and represent and warrant, that your use of the Service, or any portion thereof, will be consistent with the foregoing license, covenants and restrictions and will neither infringe nor violate the rights of any other party or breach any contract or legal duty to any other parties. In addition, you agree that you will comply with all applicable laws, regulations and ordinances relating to the Service or your use of it, and you will be solely responsible for your own individual violations of any such laws.</li>
              <li>The Services enable users to access an AI Chat with mentor functions (the “AI Chat”). AI Chat is an artificial intelligence. AI Chat is implemented to the Services for the educational purposes only and is not fine-tuned to provide investment advice or any other material advice. <strong>You should not rely on AI Chat as a sole source of investment or any material advice.</strong> </li>
              <li>While using AI Chat you may provide input to the Services (“Input”), and receive output generated and returned by the Services based on the Input (“Output”). Input and Output are collectively “AI Content.” As between the parties and to the extent permitted by applicable law, you own all Input, and subject to your compliance with these T&C, Company hereby assigns to you all its right, title and interest in and to Output generated while using AI Chat. Company may use Content as necessary to provide and maintain the Services, comply with applicable law, and enforce our policies. You are responsible for AI Content, including for ensuring that it does not violate any applicable law or these T&C.</li>
              <li>Similarity of AI Content. Due to the nature of machine learning, Output may not be unique across users and the Services may generate the same or similar output for Company or a third party. For example, you may provide input to a model such as “How many days in January?” and receive output such as “There are 31 days in January.” Other users may also ask similar questions and receive the same response. Responses that are requested by and generated for other users are not considered your Content.</li>
              <li>Use of AI Content to Improve Services. One of the main benefits of machine learning models is that they can be improved over time. To help Company provide and maintain the Services, you agree and instruct that we may use Content to develop and improve the Services. We understand that in some cases you may not want your Content used to improve Services. You can opt out of having AI Content used for improvement by contacting support@prosperi.io with your credentials that you used to register in the Services.</li>
            </OrderedList>
          </li>
          <br/>
          <li>
            <strong>Third Party Ads</strong>
            <OrderedList style={{marginLeft:"1.5rem"}}>
              <li>The Service may contain links to third-party websites or resources, as well as advertisements for third-party products or services (collectively, "Third Party Ads"). Such Third Party Ads are not under the Company's control, and the Company is not liable for any Third Party Ads. The Company only provides these Third Party Ads as a convenience and does not review, approve, monitor, endorse, warrant, or make any representations about them. Third-party advertisements and other information may not be entirely accurate.</li>
              <li>You accept sole responsibility for, and bear all risk associated with, your use of any such websites or resources. When you link to a third-party site, the terms and policies of the applicable service provider, including privacy and data collection practices, take precedence. Before proceeding with any transaction with a third party, you should conduct whatever investigation you believe is necessary or appropriate. Your dealings with Third Party Ads found on or through the Company Website, including payment and delivery of related goods or services, are solely between you and such merchant or advertiser.</li>
              <li>You hereby release us, our officers, employees, agents and successors from claims, demands any and all losses, damages, rights, claims, and actions of any kind including personal injuries, death, property damage, and financial damage that is either directly or indirectly related to or arises from any interactions with or conduct of any Third Party Ads.</li>
            </OrderedList>
          </li>
          <br/>
          <li>
            <strong>Subscription terms and fees</strong>
            <OrderedList style={{marginLeft:"1.5rem"}}>
              <li>For our Services, we may offer a paid trial subscription (hereinafter referred to as the "introductory offer"), additional paid features, and subscription plan (monthly, annually, or otherwise, depending on the option you select at the time of purchase). We may also provide offers that renew at the full not discounted price and other offers that may be interesting for you.</li>
              <li>Please note that if a paid trial subscription or additional paid features are offered for the service, this will be clearly indicated on the price screen prior to checkout.</li>
              <li>Fees for Services are made on a subscription or one-time purchase basis.</li>
              <li>Introductory offers provide you access to the Service for a period of time, with details specified when you sign up for the offer. Unless you cancel before the end of the introductory offer, your access to the Service will automatically continue and you will be automatically charged a price for a monthly subscription plan without notice. It is ultimately your responsibility to know when the paid trial subscription will end.</li>
              <li>After an introductory offer, the User gets access to a subscription plan (monthly, annually, or otherwise, depending on the option you select at the time of purchase) after payment for subscription services.</li>
              <li>Subscription plans are automatically renewed at the end of each month/year unless you cancel earlier than 24 before the end of the current billing period. Money for the next period of use is debited 24 hours before the end of the current one.</li>
              <li>The prices and the amount of Digital Content available through subscription services may change from time to time by territory with or without clear notice (except where such information is mandatory under applicable law).</li>
              <li>We will give you reasonable notice of any such pricing changes by posting the new prices on or through the website and/or by sending you an e-mail notification, or in other prominent way. If you do not wish to pay the new price, you can cancel the applicable subscription prior to the change going into effect.</li>
              <li>If you have any questions in relation to the subscription prices, auto-renewal period or price changes, please contact us directly at <Website href="mailto:support@prosperi.university">support@prosperi.university</Website>.</li>
            </OrderedList>
          </li>
          <br/>
          <li>
            <strong>Billing and Cancellation</strong>
            <OrderedList style={{marginLeft:"1.5rem"}}>
              <li>Payment methods for the Services are billed by the Company via PayPal or other payment providers.</li>
              <li>The Company charges the applicable fees to the payment card you submit at the time of purchase (after you confirm by single-touch identification, facial recognition, or entering your payment method details on the web, or otherwise accepting subscription terms provided on the payment screen on our web page).</li>
              <li>You authorize us to store your payment method(s) and automatically charge the applicable subscription fees to the payment card that you submit for the renewal term.</li>
              <li>Unless you cancel before the end of the introductory offer, your access to the Service will automatically continue and you will be automatically charged a price for a subscription plan (monthly, annually, or otherwise, depending on the option you select at the time of purchase) without notice. It is ultimately your responsibility to know when the paid trial subscription will end.</li>
              <li>The period of auto-renewal will be the same as your initial subscription period unless otherwise disclosed to you on the Service. The renewal rate will be no more than the rate for the immediately prior subscription period, excluding any promotional and discount pricing, unless we notify you of a rate change prior to your auto-renewal.</li>
              <li>In some cases, your payment date may change, such as when your payment method fails to settle or when you change your subscription plan. To view your next payment date, go to the website and click on the "Subscription" link on the "Account" page.</li>
              <li>You must cancel your subscription in accordance with the cancellation procedures disclosed to you for the particular subscription. We will not refund fees that may have occurred to your account once Digital Content has been delivered to you.</li>
              <li>When you make the payment for the subscription services, you acknowledge and agree that all purchases are non-refundable or exchangeable. Since the Service is of a digital nature, we cannot accept any request for refunds and therefore your right of withdrawal is lost at this point. Notwithstanding anything to the contrary in the foregoing, the Company will provide refunds and/or subscription cancellations in cases and to the extent required by mandatory provisions of the applicable law.</li>
              <li>The Company may also provide refunds at its own discretion and subject to <Website href="https://prosperi.university/subscription">Subscription Terms</Website> on our websites.</li>
              <li>A subscription or one-time purchase paid via PayPal are subject to such PayPal’s refund policies. This means we cannot grant refunds.</li>
              <li>We post clear and conspicuous <Website href="https://prosperi.university/subscription">Subscription Terms</Website> on our websites.</li>
            </OrderedList>
          </li>
          <br/>
          <li>
            <strong>Compliance</strong>
            <OrderedList start={{marginLeft: "1.5rem"}}>
              <li>The Services are provided in accordance with the laws of the United Arab Emirates. We make no representation or warranty that a Service or the Digital Content (as defined herein) are appropriate or available for use in other locations.</li>
              <li>If you use the Services from a jurisdiction other than the United Arab Emirates you agree to do so at your own risk, and you are responsible for complying with any and all local laws applicable to your use of a Service.</li>
            </OrderedList>
          </li>
          <br/>
          <li>
            <strong>Data Protection</strong>
            <OrderedList start={{marginLeft: "1.5rem"}}>
              <li>The Company collects, stores, and processes the User's data in accordance with its Privacy Policy.</li>
              <li>The User agrees to the collection, storage, and processing of the data in the manner and for the purpose described in the Privacy Policy.</li>
            </OrderedList>
          </li>
          <br/>
          <li>
            <strong>Copyright statement</strong>
            <OrderedList start={{marginLeft: "1.5rem"}}>
              <li>The Company copyrighted the product, including but not limited to all materials, logo, etc.</li>
              <li>Any redistribution or reproduction of part or all the Services and/or Digital content available through subscription services in any form is prohibited. Any other proposed use of Services and/or Digital Content shall be granted by the Company in the form of formal written permission.</li>
            </OrderedList>
          </li>
          <br/>
          <li>
            <strong>User Representations and Restrictions</strong>
            <OrderedList start={{marginLeft: "1.5rem"}}>
              <li>
              By using the Service, you represent and warrant that:
              <OrderedList start={{marginLeft: "1.5rem"}}>
                <li>you have the legal capacity and you agree to comply with these T&C;</li>
                <li>you are not under the age of 16;</li>
                <li>you will not access the Service through automated or non-human means, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Service, or using or launching any unauthorized script or other software;</li>
                <li>you will not use the Service for any illegal or unauthorized purpose;</li>
                <li>you are not located in a country that is subject to a U.S. government embargo, or that has been designated by the U.S. government as a "terrorist supporting" country;</li>
                <li>you are not listed on any U.S. government list of prohibited or restricted parties; and</li>
                <li>your use of the Service will not violate any applicable law or regulation.</li>
              </OrderedList>
              </li>
              <li>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to refuse any and all current or future use of the Service (or any portion thereof).</li>
              <li>You may not access or use the Service for any purpose other than that for which we make the Service available. The Service may not be used in connection with any revenue generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended except those that are specifically authorized or approved by us.</li>
              <li>
              As a user of the Service, you agree not to:
              <OrderedList start={{marginLeft: "1.5rem"}}>
                <li>systematically retrieve data or other content from the Service to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us;</li>
                <li>make any modification, adaptation, improvement, enhancement, translation, or derivative work from the Service;</li>
                <li>use the Service for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the Service;</li>
                <li>circumvent, disable, or otherwise interfere with security-related features of the Service;</li>
                <li>engage in unauthorized framing of or linking to the Service;</li>
                <li>decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Service;</li>
                <li>attempt to bypass any measures of the Service designed to prevent or restrict access to the Service, or any portion of the Service;</li>
                <li>use the Service to send automated queries to any website or to send any unsolicited commercial e-mail;</li>
                <li>disparage, tarnish, or otherwise harm, in our opinion, us and/or the Service;</li>
                <li>use the Service in a manner inconsistent with any applicable laws or regulations; or</li>
                <li>otherwise infringe these T&C.</li>
              </OrderedList>
              </li>
            </OrderedList>
         </li>
         <br/>
         <li>
          <strong>Disclaimers of warranties and liabilities</strong>
          <OrderedList start={{marginLeft: "1.5rem"}}>
                <li>Any statement or information that may be posted on the Service is for informational and educational purposes only and is not intended to replace or substitute for any professional financial, legal, or other advice.</li>
                <li>The company does not provide investment or financial advice or advocate the purchase or sale of any security or investment via the Service.</li>
                <li>There is no guarantee that the Digital Content will meet your or any other person's needs or requirements. The Service may not be appropriate for all persons and is not a substitute for professional financial advice.</li>
                <li>We make no guarantees about the level of success you will have, and you accept the risk that results will vary from person to person. The Service may provide examples of exceptional results that do not apply to the average person and are not intended to represent or guarantee that anyone will achieve the same or similar result.</li>
                <li>As with any investment learning program or service, your results will vary and will be based on a number of factors, including but not limited to your individual capacity, life experience, financial status, starting point, expertise, and level of commitment. You agree that the company is not liable for any success or failure of your financial risk that is directly or indirectly related to the purchase and use of the Service.</li>
                <li>You should acknowledge there is a risk of capital loss and income is not guaranteed and will depend on various factors. Your decision to make an investment should be made at your own discretion and upon their own will only.</li>
                <li>The Company makes no representations or warranties and, to the fullest extent permitted by law, expressly disclaims any and all liability relating to your reliance on the statements or other information offered or provided within or through the Service. If you have specific concerns or a situation arises in which you require professional advice, you should consult with an appropriately appropriate, trained and qualified specialist.</li>
                <li>The inclusion of any sites or other product information does not imply a recommendation but merely brings possible options. It is the User's responsibility to conduct appropriate investigations and inquiries concerning indicated information before taking any decisions.</li>
                <li>
                We specifically disclaim any representations or warranties, express or implied, including, without limitation:
                <OrderedList start={{marginLeft: "1.5rem"}}>
                <li>Warranties relating to the accuracy, reliability, correctness, timeliness or completeness of information made available on the website or otherwise by us, including any advice, opinion, statement, or other material or database displayed, uploaded or distributed and available through the website, and warranties otherwise relating to performance, nonperformance, or other acts or omissions by us or any third party.</li>
                <li>The Company disclaims responsibility for any loss, damage, or injury arising out of or in connection with the Service information usage.</li>
                <li>The Company will not be liable to the User for any indirect, consequential, special, incidental, punitive, or exemplary damages resulting from access or use of the website's Services or such Digital content, tools, or prizes, or in connection with any failure of performance, error, transmission, computer virus, or line or system failure, including, without limitation, lost profits, lost savings, and lost revenues.</li>
                </OrderedList>
                </li>
          </OrderedList>
         </li>
         <br/>
         <li>
          <strong>Limitation of liability</strong>
          <OrderedList start={{marginLeft: "1.5rem"}}>
            <li>IN NO EVENT SHALL WE (AND OUR AFFILIATES) BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFIT OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES ARISING FROM THESE TERMS OR YOUR USE OF, OR INABILITY TO USE, THE SERVICE (INCLUDING THE DIGITAL CONTENT) AND PRODUCTS, OR THIRD PARTY ADS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ACCESS TO, AND USE OF, THE SERVICE (INCLUDING THE DIGITAL, CONTENT AND USER CONTENT), AND THIRD PARTY ADS ARE AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTING SYSTEM OR LOSS OF DATA RESULTING THEREFROM.</li>
            <li>NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, YOU AGREE THAT THE AGGREGATE LIABILITY OF THE COMPANY TO YOU FOR ANY AND ALL CLAIMS ARISING FROM THE USE OF THE APP, CONTENT, SERVICE OR PRODUCTS, IS LIMITED TO THE AMOUNTS YOU HAVE PAID TO THE COMPANY FOR ACCESS TO AND USE OF THE SERVICE. THE LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE TERMS BETWEEN THE COMPANY AND YOU.</li>
            <li>SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OF CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU AND YOU MAY ALSO HAVE OTHER LEGAL RIGHTS THAT VARY FROM JURISDICTION TO JURISDICTION.</li>
          </OrderedList>
         </li>
         <br/>
         <li>
          <strong>Indemnification</strong>
          <OrderedList start={{marginLeft: "1.5rem"}}>
            <li>You agree to indemnify and hold the Company, its successors, subsidiaries, affiliates, any related companies, its suppliers, licensors and partners, and the officers, directors, employees, agents and representatives of each of them harmless, including costs and attorneys' fees, from any claim or demand made by any third party due to or arising out of (i) your use of the Service or Digital Products, (ii) your User Content, or (ii) your violation of these T&C.</li>
          </OrderedList>
         </li>
         <br/>
         <li>
          <strong>Dispute resolution</strong>
          <OrderedList start={{marginLeft: "1.5rem"}}>
            <li>These T&C and any dispute or claim arising out of or relating to these T&C, or the breach thereof, which the Company and User are unable to resolve after good faith negotiations shall be governed and settled under the laws of the United Arab Emirates.</li>
            <li>Complaints and requests shall be directed to the Support Service at <Website href="mailto:support@prosperi.university">support@prosperi.university</Website></li>
            <li>You will receive a detailed response from our responsible team once the complaint is reviewed but no later than after one month from the date of the complaint submission.</li>
            <li>Any dispute or claim arising out of or in connection with these T&C shall be referred to and finally resolved by mediation in the DIFC Court.</li>
            <li>If any provision or provisions of these T&C shall be held to be invalid, illegal, or unenforceable, the validity, legality and enforceability of the remaining provisions shall remain in full force and effect.</li>
          </OrderedList>
         </li>
         <br/>
         <li>
          <strong>Miscellaneous Provisions</strong>
          <OrderedList start={{marginLeft: "1.5rem"}}>
            <li>Suppose any delay in the service provision will arise in the event out of the Company’s control (unforeseeable circumstances). In that case, the proper notification of users on such will be made as soon as possible. Adequate notification and minimization effect actions exclude the Company’s liability for such delays.</li>
            <li>Occasional add, change, or removal of the Digital Content feature(s) may occur, and the Company will make all reasonable actions.</li>
            <li>We may change all the information provided on the Service at our sole discretion without notice. We may at any time modify or discontinue, temporarily or permanently, the Service (or any part thereof) at our sole discretion with or without notice. You agree that we shall not be liable to you or any third party for any modification, suspension or discontinuance of the Service.</li>
          </OrderedList>
         </li>
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

export default Terms