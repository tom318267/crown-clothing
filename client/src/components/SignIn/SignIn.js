import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import "./SignIn.scss";

const SignIn = ({ googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    setCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          handleChange={handleChange}
          label="email"
          value={email}
          required
        />
        <FormInput
          type="password"
          name="password"
          handleChange={handleChange}
          label="password"
          value={password}
          required
        />
        <div className="buttons">
          <CustomButton id="login-button" type="submit">
            Login
          </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Login with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
