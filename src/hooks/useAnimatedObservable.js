import React from "react";

const useAnimatedObservable = () => {
  // State and Refs
  const myRef = React.useRef();
  const [unObserveOnEnter, setUnObserveOnEnter] = React.useState(false);
  const [isVisible, setVisible] = React.useState(false);

  // Intersection Observer
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) setUnObserveOnEnter(true);
    });
    observer.observe(myRef.current);
  }, []);

  return { myRef, isVisible, unObserveOnEnter };
};

export default useAnimatedObservable;
