import { DecodedCipherProps } from "../../components/Cipher/DecodedCipher";
import { offWhite, success, error as errorCol } from "../variables/colors";

interface CipherOutput {
  color: string;
  text: string;
}

export const getCipherOutput = (props: DecodedCipherProps): CipherOutput => {
  let { data, error, loading } = props;

  if (data) {
    localStorage.setItem("cipher", JSON.stringify(data));
  } else {
    data = JSON.parse(String(localStorage.getItem("cipher")));
  }

  let value = { color: offWhite, text: "" };
  if (data) value = { color: success, text: data.cipher.decodedCipher };
  if (error) value = { color: errorCol, text: error.graphQLErrors[0].message };
  if (loading) value = { color: offWhite, text: "Loading..." };

  if (error) localStorage.removeItem("cipher");

  return value;
};
