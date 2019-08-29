import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Canvas from "./pages/Canvas";
import Explode from "./pages/Explode";
import BigGlasses from "./pages/BigGlasses";

// import PixiPage from './pages/PixiPage';
// import ThreePage from './pages/ThreePage';

const AppRouter = () => {
  return (
    <Router>
      <>
        <div style={{ zIndex: 100, position: "relative", background: 'lightgreen' }}>
          <Link to="/" style={{ marginRight: "15px" }}>
            Basic 360
          </Link>
          <Link to="/explode" style={{ marginRight: "15px" }}>
            Explode
          </Link>
          <Link to="/glasses">Big Glasses</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Canvas} />
          <Route path="/explode" component={Explode} />
          <Route path="/glasses" component={BigGlasses} />
          {/* <Route path="/three" exact component={ThreePage} /> */}
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
