// modules
import React, { useState } from "react";
import styled from "styled-components";
import { useLazyQuery } from "@apollo/react-hooks";

// components//functions
import CipherInput from "./CipherInput";
import DecodedCipher from "./DecodedCipher";
import CipherHeader from "./CipherHeader";
import CipherFooter from "./CipherFooter";
import { decodeCipherQuery, CipherType } from "../../queries/cipher";

// styles
import { primaryGradient } from "../../~reusables/variables/colors";
import { tablet } from "../../~reusables/variables/media-queries";
import { small_space } from "../../~reusables/variables/spacing";

const Cipher = () => {
  const priorInput = JSON.parse(String(localStorage.getItem("cipherInput")));

  const [cipherInput, setCipherInput] = useState(priorInput ? priorInput : "");
  const [decodeCipher, { loading, data, error }] = useLazyQuery<CipherType>(
    decodeCipherQuery
  );

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    decodeCipher({ variables: { cipher: cipherInput } });
    localStorage.setItem("cipherInput", JSON.stringify(cipherInput));
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

  @media only screen and (max-width: ${tablet}) {
    padding: ${small_space};
  }
`;

export default Cipher;
