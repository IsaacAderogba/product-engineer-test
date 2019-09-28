// modules
import React, { useState } from "react";
import styled from "styled-components";
import { useLazyQuery } from "@apollo/react-hooks";

// components//functions
import CipherInput from "./CipherInput";
import DecodedCipher from "./DecodedCipher";
import CipherHeader from "./CipherHeader";
import CipherFooter from "./CipherFooter";
import { decodeCipherQuery, Cipher } from "../../queries/cipher";

// styles
import { primaryGradient } from "../../~reusables/variables/colors";

const Cipher = () => {
  const [cipherInput, setCipherInput] = useState("");
  const [decodeCipher, { loading, data, error }] = useLazyQuery<Cipher>(decodeCipherQuery);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    decodeCipher({ variables: { cipher: cipherInput } });
  };

  return (
    <StyledCipher>
      <div>
        <CipherHeader />
        <form onSubmit={onSubmitForm}>
          <CipherInput
            cipherInput={cipherInput}
            setCipherInput={setCipherInput}
          />
          <DecodedCipher loading={loading} data={data} error={error} />
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
