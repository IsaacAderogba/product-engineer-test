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
      <div>
        <CipherHeader />
        <CipherInput />
        <DecodedCipher />
        <CipherFooter />
      </div>
    </StyledCipher>
  );
};

const StyledCipher = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  background: ${primaryGradient};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Cipher;
