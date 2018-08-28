import React from "react";

const SearchContext = React.createContext({
  location: "Richmond, VA",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreads() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
