import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CardIcon from "../cart-icon/cart-icon.component";
import CardDropdown from "../card-dropdown/card-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.select";
import { selectCartHiddne } from "../../redux/cart/cart.selector";

import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";

import {
  HeaderContianer,
  LogoContainer,
  OptionsContainer,
  OptionforDiv,
  OptionforLink
} from "./header.style";

const Header = ({ currentUser, hiddne }) => (
  <HeaderContianer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionforLink to="/shop">SHOP</OptionforLink>
      <OptionforLink to="/shop">CONTACT</OptionforLink>
      {currentUser ? (
        <OptionforDiv onClick={() => auth.signOut()}>Sign Out</OptionforDiv>
      ) : (
        <OptionforLink to="/singin">Sing In</OptionforLink>
      )}
      <CardIcon />
    </OptionsContainer>
    {hiddne ? null : <CardDropdown />}
  </HeaderContianer>
);

const mapPropsToState = createStructuredSelector({
  currentUser: selectCurrentUser,
  hiddne: selectCartHiddne
});

export default connect(mapPropsToState)(Header);
