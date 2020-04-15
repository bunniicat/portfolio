import React, { useState } from "react";
import "bootstrap3/dist/css/bootstrap.min.css";
import "./scss/styles.scss";

import Loading from "./pages/Loadingpage";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

export default function App({children}){
  const [hasLoaded, setHasLoaded] = useState(false);

  const updateLoaded = () => {
    setHasLoaded(true);
  }


  return hasLoaded ?
  (
    <div className="App">
      <Navigation />
      {children}
      <Footer />
    </div>
  ) :
  (
    <Loading updateLoadingStatus={updateLoaded} />
  )
}