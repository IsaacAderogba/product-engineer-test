// modules
import React from "react";
import styled from "styled-components";

// components
import pluralAILogo from "../assets/pluralai-logo.png";

// styles
import { xs_space } from "../variables/spacing";

const PluralAILogo = () => {
  return (
    <StyledPLogo>
      <img src={pluralAILogo} alt="Plural AI logo" />
    </StyledPLogo>
  );
};

const StyledPLogo = styled.div`
  height: 32px;
  width: 32px;
  margin-right: ${xs_space};

  img {
    height: 100%;
    width: 100%;
  }
`;

export default PluralAILogo;
