import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StoreFront from "../StoreFront/StoreFront";
import Details from "../Details/Details";
import NotFound from "../NotFound/NotFound";
import Modal from "../Modal/Modal";
import Cart from "../Cart/Cart";
// Passing in the Context object
import { ProductProvider } from "../ProductProvider/ProductProvider";

import "./App.css";

const App = () => {
  return (
    <div>
      <ProductProvider>
        <Router>
          <div className="appContainer">
            <Switch>
              <Route
                path="/"
                exact
                component={props => <StoreFront {...props} />}
              />
              <Route path="/detail" exact component={Details} />
              <Route path="/cart" exact component={Cart} />
              <Route component={NotFound} />
            </Switch>
            {/* <Footer /> */}
            <Modal />
          </div>
        </Router>
      </ProductProvider>
    </div>
  );
};

export default App;
