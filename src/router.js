import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Canvas from './pages/Canvas';
// import PixiPage from './pages/PixiPage';
// import ThreePage from './pages/ThreePage';

const AppRouter = () => {
  return (
    <Router>
      <>
        <Route path="/" exact component={Canvas} />
        {/* <Route path="/three" exact component={ThreePage} /> */}
      </>
    </Router>
  );
};

export default AppRouter;
