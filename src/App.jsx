import React, { Suspense } from "react";
import "./App.css";

//Fallback UI
import FallbackUI from "./components/LoadingIndicator/FallbackUI";

//Pages
const HomePage = React.lazy(() => import("./pages/HomePage"));

const App = () => {
  return (
    <Suspense fallback={<FallbackUI />}>
      <div>
        <HomePage />
      </div>
    </Suspense>
  );
};

export default App;
