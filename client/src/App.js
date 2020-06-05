import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import { selectCurrentUser } from "./redux/user/user.selectors";
import Spinner from "./components/Spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { checkUserSession } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { GlobalStyle } from "./global.styles";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const ShopPage = lazy(() => import("./pages/Shop/ShopPage"));
const SignInAndSignUp = lazy(() =>
  import("./pages/SignInAndSignUp/SignInAndSignUp")
);
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/login"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
