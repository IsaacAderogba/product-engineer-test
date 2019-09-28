// modules
import React from "react";
import styled from "styled-components";
import { ApolloError } from "apollo-boost";

// components
import { Input } from "../../~reusables/atoms/Input";
import { CipherType } from "../../queries/cipher";
import { getCipherOutput } from "../../~reusables/helpers/cipherHelper";

// styles
import { medium_space_1 } from "../../~reusables/variables/spacing";

export interface DecodedCipherProps {
  data: CipherType | undefined;
  error: ApolloError | undefined;
  loading: boolean;
}

const DecodedCipher = (props: DecodedCipherProps) => {
  let { data, error, loading } = props;
  const value = getCipherOutput({ data, error, loading });

  return (
    <StyledDCipher>
      <Input
        readOnly
        placeholder="Decoded output"
        value={value.text}
        background="rgba(247, 248, 248, 0.3)"
        color={value.color}
      />
    </StyledDCipher>
  );
};

const StyledDCipher = styled.section`
  margin-bottom: ${medium_space_1};
  display: flex;
  flex-direction: column;
`;

export default DecodedCipher;
