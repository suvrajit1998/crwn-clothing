import React from "react";

import CollectionPreview from "../collectionpreview/Collectionpreveiw.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectcollectionpreview } from "../../redux/shop/shop.select";

import "./collection-overview.style.scss";

const CollectionOverview = ({ collection }) => (
  <div className="collection-overview">
    {collection.map(({ id, ...othercollectionprops }) => (
      <CollectionPreview key={id} {...othercollectionprops} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collection: selectcollectionpreview
});

export default connect(mapStateToProps)(CollectionOverview);
