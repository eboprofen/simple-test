import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Landing } from "./pages/Landing";
import { Corporate } from "./pages/Corporate";
import { Help } from "./pages/Help";
import { Compliance } from "./pages/Compliance";
import { CorporateLanding } from "./pages/CorporateLanding";
import { Footer } from "./components/Footer";
import { News } from "./pages/News";
import { Location } from "./pages/Location";
import svg from "./assets/logo.svg";
import { NewsDetails } from "./pages/NewsDetails";
import { UnitelLeasing } from "./pages/UnitelLeasing";
import CarLoan from "./pages/CarLoan";
import Digital from "./pages/Digital";
import Terms from "./pages/Terms";
import SimpleBuy from "./pages/SimpleBuy";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    window.addEventListener("load", (event) => {
      setLoading(false);
      if (document.readyState === "complete") {
        setLoading(false);
      }
    });
  }, []);

  return (
    <Router>
      <div className="main-container">
        {loading ? (
          <div style={{ textAlign: "center", margin: "auto 0" }}>
            <object>
              <embed src={svg} />
            </object>
          </div>
        ) : (
          <Switch>
            <Route exact path="/unitel-leasing" component={UnitelLeasing} />
            <Route component={DefaultContainer} />
          </Switch>
        )}
      </div>
    </Router>
  );
}

const DefaultContainer = () => (
  <>
    <div className="content-wrap">
      <NavigationBar />
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Landing} />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/business-loan`}
        component={Corporate}
      />
      <Route exact path={`${process.env.PUBLIC_URL}/help`} component={Help} />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/compliance`}
        component={Compliance}
      />
      <Route exact path={`${process.env.PUBLIC_URL}/news`} component={News} />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/location`}
        component={Location}
      />
      
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/business`}
        component={CorporateLanding}
      />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/car-loan`}
        component={CarLoan}
      />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/digital`}
        component={Digital}
      />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/simple-buy`}
        component={SimpleBuy}
      />
      <Route exact path={`${process.env.PUBLIC_URL}/terms`} component={Terms} />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/news/:id`}
        component={NewsDetails}
      />
    </div>
    <Footer />
  </>
);

export default App;
