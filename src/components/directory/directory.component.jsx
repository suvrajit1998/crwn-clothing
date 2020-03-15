import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectdirectorySection } from "../../redux/directory/directory.selects";

import Menuitem from "../menu-item/menu-item.component";
import "./directory.style.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...othersectionprops }) => (
      <Menuitem key={id} {...othersectionprops} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectdirectorySection
});

export default connect(mapStateToProps)(Directory);
