import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <div>
      <Header />
      <SearchBar />

      <h1>Welcome to the Mega Mart!</h1>
      <p>This is the home page.</p>
      <p>
        Feel free to explore our products, read about our history, and learn
        more about our team.
      </p>
      <button>Visit our Store</button>
    </div>
  );
};

export default React.memo(HomePage);
