import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Dashboard from "./Containers/Dashboard/Dashboard";
import Profile from "./Containers/Profile/Profile";
import Statistic from "./Containers/Statistic/Statistic";
import Products from "./Containers/Products/Products";
import ProductsInputs from "./Containers/ProductsInputs/ProductsInputs";
import Management from "./Containers/Management/Management";
import AdminsChanges from "./Containers/AdminsChanges/AdminsChanges";

class App extends Component {
  render() {
    return (
      <Router>
      <Layout>
         <Switch>
         <Route path="/Dashboard" exact component={Dashboard}/>   
         <Route path="/Profile" exact component={Profile} />
         <Route path="/Statistic" exact component={Statistic} />
         <Route path="/Products" exact component={Products} />
         <Route path="/Products-inputs" component={ProductsInputs} />
         <Route path="/Management" component={Management} />
         <Route path="/Admins-changes" component={AdminsChanges} />
          <Redirect to="/Dashboard"/>
         </Switch>
         
      </Layout>
      </Router>
    );
  }
}

export default App;
