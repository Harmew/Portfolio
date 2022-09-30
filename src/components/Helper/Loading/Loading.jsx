import React from "react";

// Styles
import { Wrapper } from "./Loading.styled";

const Loading = () => {
  const DURATION = "1s";

  return (
    <Wrapper>
      <svg x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0">
        <g fill="currentColor" stroke="none">
          <circle cx="6" cy="50" r="6">
            <animateTransform
              attributeName="transform"
              dur={DURATION}
              type="translate"
              values="0 15 ; 0 -15; 0 15"
              repeatCount="indefinite"
              begin="0.1"
            />
          </circle>
          <circle cx="30" cy="50" r="6">
            <animateTransform
              attributeName="transform"
              dur={DURATION}
              type="translate"
              values="0 10 ; 0 -10; 0 10"
              repeatCount="indefinite"
              begin="0.2"
            />
          </circle>
          <circle cx="54" cy="50" r="6">
            <animateTransform
              attributeName="transform"
              dur={DURATION}
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.3"
            />
          </circle>
        </g>
      </svg>
    </Wrapper>
  );
};

export default Loading;
