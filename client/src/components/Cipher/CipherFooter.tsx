// modules
import React from "react";
import styled from "styled-components";

// components
import { P2, A } from "../../~reusables/atoms/Text";

// styles
import { offWhite } from "../../~reusables/variables/colors";
import { xs_space } from "../../~reusables/variables/spacing";

const CipherFooter = () => {
  return (
    <StyledCFooter>
      <P2 color={offWhite}>
        Made with{" "}
        <span role="img" aria-label="cup of coffee">
          ☕️{" "}
        </span>
        and{" "}
        <span role="img" aria-label="rockstar sign">
          🤘🏼️
        </span>
        by Isaac. He also made:
      </P2>
      <P2 mb={xs_space} color={offWhite}>
        <A href="https://www.getconduit.co">Conduit</A> - Product management
        system
      </P2>
      <P2 color={offWhite}>
        <A href="https://getpluto.netlify.com/">Pluto</A> - Quiz management
        platform
      </P2>
    </StyledCFooter>
  );
};

const StyledCFooter = styled.footer`
  max-width: 364px;
  margin: 0 auto;
`;

export default CipherFooter;
