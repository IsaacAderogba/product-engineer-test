// modules
import React from "react";
import styled from "styled-components";

// components
import CipherInput from "./CipherInput";
import DecodedCipher from "./DecodedCipher";
import CipherHeader from "./CipherHeader";
import CipherFooter from "./CipherFooter";

// styles
import { primaryGradient } from "../../~reusables/variables/colors";

const Cipher = () => {
  return (
    <StyledCipher>
      <CipherHeader />
      <CipherInput />
      <DecodedCipher />
      <CipherFooter />
    </StyledCipher>
  );
};

const StyledCipher = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  background: ${primaryGradient};
`;

export default Cipher;
