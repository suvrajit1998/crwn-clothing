import { createSelector } from "reselect";

const selectshop = state => state.shop;

export const selectshopCollection = createSelector(
  [selectshop],
  shop => shop.collection
);

export const selectcollectionpreview = createSelector(
  [selectshopCollection],
  collection =>
    collection ? Object.keys(collection).map(key => collection[key]) : []
);

export const selectshopcollections = collectionUrlParam =>
  createSelector([selectshopCollection], collection =>
    collection ? collection[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectshop],
  shop => shop.isFetching
);

export const selectCollectionsLoaded = createSelector(
  [selectshop],
  shop => !!shop.collection
)
