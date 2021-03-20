import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const SharedInputElement = styled(TextField)`
  width: 96.5%;
  height: ${({ height }) => (height ? height : "4.6rem")};
<<<<<<< HEAD
  margin-right: 0.7rem !important;
  z-index: 10 !important;
  border-radius: 5px;
=======
  /* margin-right: 0.7rem !important; */
>>>>>>> a03f375092c332def70d62d109f55b33e70aa5d8

  @media (min-width: 440px) {
    width: ${({ width }) => (width ? width : "25.5rem")};
  }
`;
