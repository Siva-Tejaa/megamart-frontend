import React, { Suspense } from "react";
import "./App.css";

//React Router Dom
import { Routes, Route } from "react-router-dom";

//Fallback UI
import FallbackUI from "./components/LoadingIndicator/FallbackUI";

//Pages
const HomePage = React.lazy(() => import("./pages/HomePage"));
const SignupPage = React.lazy(() => import("./pages/SignupPage"));
const TermsofUse = React.lazy(() => import("./pages/TermsofUse"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const ForgotPasswordPage = React.lazy(() =>
  import("./pages/ForgotPasswordPage")
);
const SearchPage = React.lazy(() => import("./pages/SearchPage"));
const WishListPage = React.lazy(() => import("./pages/WishListPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

const App = () => {
  return (
    <Suspense fallback={<FallbackUI />}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/termsofuse" element={<TermsofUse />} />
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route exact path="/search/:searchText" element={<SearchPage />} />
        <Route exact path="/wishlist" element={<WishListPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
