import React from "react";

import "./custom-button.style.scss";

import { CustomButtoncontainerstyle } from "./custom-button.style";

const CustomButton = ({ children, ...props }) => (
  <CustomButtoncontainerstyle {...props}>{children}</CustomButtoncontainerstyle>
);

export default CustomButton;
