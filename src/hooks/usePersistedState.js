import React from "react";

export const usePersistedState = (key, initialState) => {
  // Get LocalStorage Value
  const [state, setState] = React.useState(() => {
    const storageValue = localStorage.getItem(key);

    // Case LocalStorage Value exists return value else return initialState = light
    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  // Set LocalStorage Value
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
