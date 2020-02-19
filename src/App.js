import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/ShopPage";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
