import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//React Router Dom
import { BrowserRouter } from "react-router-dom";

//React or TanStack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//Redux Tool Kit
import store from "./redux/store";
import { Provider } from "react-redux";

// Create a QueryClient instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </>
);
