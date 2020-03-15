import { createSelector } from "reselect";

const selectdirectory = state => state.directory;

export const selectdirectorySection = createSelector(
  [selectdirectory],
  directory => directory.sections
);
