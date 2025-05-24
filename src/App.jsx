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
const Profilepage = React.lazy(() => import("./pages/ProfilePage"));

// Layouts
import PublicLayout from "./layouts/PublicLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
// import ProtectedRoute from './ProtectedRoute'; // ProtectedRoute for role-based access control

const App = () => {
  return (
    <Suspense fallback={<FallbackUI />}>
      <Routes>
        {/* Public Routes (no authentication required) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            exact
            path="/forgotpassword"
            element={<ForgotPasswordPage />}
          />
          <Route exact path="/termsofuse" element={<TermsofUse />} />
          <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route exact path="/search/:searchText" element={<SearchPage />} />
        </Route>

        {/* Protected Routes (authentication required) */}
        <Route element={<ProtectedLayout />}>
          <Route exact path="/profile" element={<Profilepage />} />
          <Route exact path="/wishlist" element={<WishListPage />} />
          <Route exact path="/cart" element={<CartPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
