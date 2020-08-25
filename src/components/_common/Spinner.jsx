import React from "react";
import spinnerImg from "../_assets/images/common/spinner.svg";
import styled from "styled-components";

const ImgSty = styled.img`
  width: 100px;
  margin: 12px;
`;

const Spinner = () => {
  return <ImgSty src={spinnerImg} alt="loading" />;
};

export default Spinner;
