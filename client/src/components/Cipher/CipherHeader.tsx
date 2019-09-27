// modules
import React from "react";
import styled from "styled-components";

// components
import pluralAILogo from "../../~reusables/assets/pluralai-logo.png";

const CipherHeader = () => {
  return (
    <StyledCHeader>
      <img src={pluralAILogo} alt="Plural AI logo" />
    </StyledCHeader>
  );
};

const StyledCHeader = styled.header``;

export default CipherHeader;
