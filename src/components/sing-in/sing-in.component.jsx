import React, { useState } from "react";
import FormInput from "../formInput/formInput.component";
import CustomButton from "../custom-button/custom-botton.component";
import { auth, singInWithGoogle } from "../../firebase/firebase.utils";

import "./sing-in.style.scss";

const SingIn = () => {
  const [userCredintiols, setcredentioals] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredintiols

  const handlesubmit = async e => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setcredentioals({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handlechange = e => {
    const { value, name } = e.target;

    setcredentioals({...userCredintiols, [name]: value });
  };

  return (
    <div className="sing-in">
      <h2 className="title">I already have an account</h2>
      <span>Sing in With your email and password</span>
      <form onSubmit={handlesubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="email"
          handlechange={handlechange}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          label="password"
          handlechange={handlechange}
          required
        />
        <div className="button">
          <CustomButton type="submit"> Sing In </CustomButton>
          <CustomButton onClick={singInWithGoogle} isgoogleSingIn>
            Sing In with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SingIn;
