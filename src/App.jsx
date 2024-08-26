import React, { Suspense } from "react";
import "./App.css";

//React Router Dom
import { Routes, Route } from "react-router-dom";

//Fallback UI
import FallbackUI from "./components/LoadingIndicator/FallbackUI";

//Pages
const HomePage = React.lazy(() => import("./pages/HomePage"));
const SignupPage = React.lazy(() => import("./pages/SignupPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const WishListPage = React.lazy(() => import("./pages/WishListPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

const App = () => {
  return (
    <Suspense fallback={<FallbackUI />}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/wishlist" element={<WishListPage />} />
        <Route exact path="/checkout/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
