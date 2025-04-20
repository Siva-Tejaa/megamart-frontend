import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <Header />
      <SearchBar />
      <div className="p-2">
        {JSON.stringify(user)}

        <h1>Welcome to the Mega Mart!</h1>
        <p>This is the home page.</p>
        <p>
          Feel free to explore our products, read about our history, and learn
          more about our team.
        </p>
        <button>Visit our Store</button>
      </div>
      <Footer />
    </div>
  );
};

export default React.memo(HomePage);
