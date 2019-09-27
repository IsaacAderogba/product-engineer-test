// modules
import styled from "styled-components";

// styles
import { text, titles, secondary } from "../variables/colors";
import {
  body_1,
  body_2,
  body_3,
  heading_1,
  heading_2,
  heading_3,
  heading_4,
  heading_5,
  heading_6
} from "../variables/font-sizes";
import { small_space } from "../variables/spacing";

export interface TextProps {
  color?: string;
  mb?: string;
  mt?: string;
  ml?: string;
  mr?: string;
  align?: string;
}

export const Paragraph = styled("p")<TextProps>`
  line-height: 1.6;
  font-size: ${body_2};
  color: ${(props: TextProps) => (props.color ? props.color : text)};
  margin-bottom: ${(props: TextProps) => (props.mb ? props.mb : small_space)};
  margin-top: ${(props: TextProps) => (props.mt ? props.mt : 0)};
  margin-left: ${(props: TextProps) => (props.ml ? props.ml : 0)};
  margin-right: ${(props: TextProps) => (props.mr ? props.mr : 0)};
  text-align: ${(props: TextProps) => (props.align ? props.align : "left")};
`;

export const P1 = styled(Paragraph)`
  font-size: ${body_1};
`;

export const P2 = styled(Paragraph)`
  font-size: ${body_2};
`;

export const P3 = styled(Paragraph)`
  font-size: ${body_3};
`;

export const H1 = styled("h1")<TextProps>`
  line-height: 1.3;
  font-size: ${heading_1};
  font-weight: 700;
  color: ${(props: TextProps) => (props.color ? props.color : titles)};
  margin-bottom: ${(props: TextProps) => (props.mb ? props.mb : small_space)};
  margin-top: ${(props: TextProps) => (props.mt ? props.mt : 0)};
  margin-left: ${(props: TextProps) => (props.ml ? props.ml : 0)};
  margin-right: ${(props: TextProps) => (props.mr ? props.mr : 0)};
  text-align: ${(props: TextProps) => (props.align ? props.align : "left")};
`;

export const H2 = styled("h2")<TextProps>`
  line-height: 1.3;
  font-size: ${heading_2};
  font-weight: 700;
  color: ${(props: TextProps) => (props.color ? props.color : titles)};
  margin-bottom: ${(props: TextProps) => (props.mb ? props.mb : small_space)};
  margin-top: ${(props: TextProps) => (props.mt ? props.mt : 0)};
  margin-left: ${(props: TextProps) => (props.ml ? props.ml : 0)};
  margin-right: ${(props: TextProps) => (props.mr ? props.mr : 0)};
  text-align: ${(props: TextProps) => (props.align ? props.align : "left")};
`;

export const H3 = styled("h3")<TextProps>`
  line-height: 1.3;
  font-size: ${heading_3};
  font-weight: 700;
  color: ${(props: TextProps) => (props.color ? props.color : titles)};
  margin-bottom: ${(props: TextProps) => (props.mb ? props.mb : small_space)};
  margin-top: ${(props: TextProps) => (props.mt ? props.mt : 0)};
  margin-left: ${(props: TextProps) => (props.ml ? props.ml : 0)};
  margin-right: ${(props: TextProps) => (props.mr ? props.mr : 0)};
  text-align: ${(props: TextProps) => (props.align ? props.align : "left")};
`;

export const H4 = styled("h4")<TextProps>`
  line-height: 1.4;
  font-size: ${heading_4};
  font-weight: 500;
  color: ${(props: TextProps) => (props.color ? props.color : titles)};
  margin-bottom: ${(props: TextProps) => (props.mb ? props.mb : small_space)};
  margin-top: ${(props: TextProps) => (props.mt ? props.mt : 0)};
  margin-left: ${(props: TextProps) => (props.ml ? props.ml : 0)};
  margin-right: ${(props: TextProps) => (props.mr ? props.mr : 0)};
  text-align: ${(props: TextProps) => (props.align ? props.align : "left")};
`;

export const H5 = styled("h5")<TextProps>`
  line-height: 1.5;
  font-size: ${heading_5};
  font-weight: 500;
  color: ${(props: TextProps) => (props.color ? props.color : titles)};
  margin-bottom: ${(props: TextProps) => (props.mb ? props.mb : small_space)};
  margin-top: ${(props: TextProps) => (props.mt ? props.mt : 0)};
  margin-left: ${(props: TextProps) => (props.ml ? props.ml : 0)};
  margin-right: ${(props: TextProps) => (props.mr ? props.mr : 0)};
  text-align: ${(props: TextProps) => (props.align ? props.align : "left")};
`;

export const H6 = styled("h6")<TextProps>`
  line-height: 1.5;
  font-size: ${heading_6};
  font-weight: 500;
  color: ${(props: TextProps) => (props.color ? props.color : titles)};
  margin-bottom: ${(props: TextProps) => (props.mb ? props.mb : small_space)};
  margin-top: ${(props: TextProps) => (props.mt ? props.mt : 0)};
  margin-left: ${(props: TextProps) => (props.ml ? props.ml : 0)};
  margin-right: ${(props: TextProps) => (props.mr ? props.mr : 0)};
  text-align: ${(props: TextProps) => (props.align ? props.align : "left")};
  letter-spacing: 0.05em;
`;

export const A = styled("a")<TextProps>`
  color: ${(props: TextProps) => (props.color ? props.color : secondary)};
`;
