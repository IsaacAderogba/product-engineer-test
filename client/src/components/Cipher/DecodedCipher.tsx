// modules
import React from "react";
import styled from "styled-components";
import { ApolloError } from "apollo-boost";

// components
import { Input } from "../../~reusables/atoms/Input";
import { CipherType } from "../../queries/cipher";

// styles
import {
  offWhite,
  success,
  error as errorCol
} from "../../~reusables/variables/colors";
import { medium_space_1 } from "../../~reusables/variables/spacing";

interface OwnProps {
  data: CipherType | undefined;
  error: ApolloError | undefined;
  loading: boolean;
}

const DecodedCipher = (props: OwnProps) => {
  let { data, error, loading } = props;

  if (data) {
    localStorage.setItem('cipher', JSON.stringify(data))
  } else {
    data = JSON.parse(String(localStorage.getItem('cipher')));
  }

  let value = { color: offWhite, text: "" };
  if (data) value = { color: success, text: data.cipher.decodedCipher };
  if (error) value = { color: errorCol, text: error.graphQLErrors[0].message };
  if (loading) value = { color: offWhite, text: "Loading..." };

  if (error) localStorage.removeItem('cipher');

  return (
    <StyledDCipher>
      <Input
        readOnly
        value={value.text}
        placeholder="Decoded output"
        background="rgba(247, 248, 248, 0.3)"
        color={value.color}
      />
    </StyledDCipher>
  );
};

const StyledDCipher = styled.section`
  margin-bottom: ${medium_space_1};
`;

export default DecodedCipher;
