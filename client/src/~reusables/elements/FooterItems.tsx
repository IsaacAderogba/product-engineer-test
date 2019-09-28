// modules
import React from "react";

// components
import { P2, A } from "../atoms/Text";

// styles
import { xs_space } from "../variables/spacing";
import { offWhite } from "../variables/colors";

interface OwnProps {
  title: string;
  text: string;
  link: string;
}

const FooterItems = ({ title, link, text }: OwnProps) => {
  return (
    <P2 mb={xs_space} color={offWhite}>
      <A href={link}>{title}</A> - {text}
    </P2>
  );
};

export default FooterItems;
