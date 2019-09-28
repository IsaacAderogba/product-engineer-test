// modules
import React, { useState } from "react";
import styled from "styled-components";
import { useLazyQuery } from "@apollo/react-hooks";

// components//functions
import CipherInput from "./CipherInput";
import DecodedCipher from "./DecodedCipher";
import CipherHeader from "./CipherHeader";
import CipherFooter from "./CipherFooter";
import { decodeCipherQuery } from "../../queries/cipher";

// styles
import { primaryGradient } from "../../~reusables/variables/colors";

const Cipher = () => {
  const [cipherInput, setCipherInput] = useState("");
  const [decodeCipher, { loading, data }] = useLazyQuery(decodeCipherQuery);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(cipherInput)
  };

  return (
    <StyledCipher>
      <div>
        <CipherHeader />
        <form onSubmit={onSubmitForm}>
          <CipherInput cipherInput={cipherInput} setCipherInput={setCipherInput} />
          <DecodedCipher />
        </form>
        <CipherFooter />
      </div>
    </StyledCipher>
  );
};

const StyledCipher = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  background: ${primaryGradient};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Cipher;
