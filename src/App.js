import React, { Fragment } from "react";
import './App.css';

//components
import HeroSec from "./components/heroSec";
import MainSec from "./components/mainSec";
import QuoteSec from "./components/quoteSec";
import CatalogueSec from "./components/catalogueSec";
import PressSec from "./components/pressSec";
import Footer from "./components/footer";

function App() {
  return (
    <Fragment>
      <HeroSec />
      <MainSec />
      <QuoteSec />
      <CatalogueSec />
      <PressSec />
      <Footer />
    </Fragment>

  );
}

export default App;