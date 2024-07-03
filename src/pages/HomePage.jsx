import React from "react";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
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

export default HomePage;
