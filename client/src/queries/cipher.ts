import { gql } from "apollo-boost";

export interface CipherType {
  cipher: {
    decodedCipher: string;
  };
}

export const decodeCipherQuery = gql`
  query($cipher: String!) {
    cipher(cipher: $cipher) {
      decodedCipher
    }
  }
`;
