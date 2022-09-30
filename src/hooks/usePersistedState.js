import { useEffect, useState } from "react";

export const usePersistedState = (key, initialState) => {
  // Get LocalStorage Value
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    // Case LocalStorage Value exists return value else return initialState = light
    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  // Set LocalStorage Value
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
