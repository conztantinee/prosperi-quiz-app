import React from "react";
import StripeForm from "./StripeForm";
import Homepage from "./Homepage";
import PickAge from "./PickAge";
import Continue from "./Continue";
import { Routes, Route, Navigate } from "react-router-dom";
import MainQuiz from "./MainQuiz";
import SellingPage from "./SellingPage";
import Privacy from "./Legal/Privacy";
import Terms from "./Legal/Terms";
import Subscription from "./Legal/Subscription";
import ThankYouPage from "./Thanks";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Provider } from "react-redux";
import { store } from "./store";

const stripePromise = loadStripe(
  "pk_live_51Ml6O4E4a2xRzxtzQ9KAf9frPAhJLhnH0MymmK3VlTd86TEjWre5r2SON3OnkqUIwGu9rgaSFZSeeh58KBi1ZSJH004RjXpGye"
);

function App() {
  return (
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/age" element={<PickAge />} />
          <Route path="/quiz" element={<MainQuiz />} />
          <Route path="/sellingpage" element={<SellingPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/thanks" element={<ThankYouPage />} />
          <Route path="/age/cont" element={<Continue />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Elements>
    </Provider>
  );
}

export default App;
