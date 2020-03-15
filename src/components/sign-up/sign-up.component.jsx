import React, { useState } from "react";

import FormInput from "../formInput/formInput.component";
import CustomButton from "../custom-button/custom-botton.component";

import { auth, creatUserpropfiledocument } from "../../firebase/firebase.utils";

import "./sign-up.style.scss";

const SignUp = () => {
  const [userCodentioals, setUsercodentioals] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  const handlesubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmpassword } = userCodentioals;

    if (password !== confirmpassword) {
      alert("Password Dont't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await creatUserpropfiledocument(user, { displayName });
      setUsercodentioals({
        displayName: "",
        email: "",
        password: "",
        confirmpassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handlechange = e => {
    const { name, value } = e.target;

    setUsercodentioals({ ...userCodentioals, [name]: value });
  };

  const { displayName, email, password, confirmpassword } = userCodentioals;
  return (
    <div className="sign-up">
      <h2 className="title">I have not a account</h2>
      <span className="subtitle">Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handlesubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handlechange}
          label="Display name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handlechange}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handlechange}
          label="password"
          required
        />
        <FormInput
          type="password"
          name="confirmpassword"
          value={confirmpassword}
          onChange={handlechange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};
export default SignUp;
