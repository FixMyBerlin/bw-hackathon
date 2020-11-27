import React from "react";
import styled from "styled-components";
import breakpoints from "~/styles/breakpoints";
import colors from "~/styles/colors";

interface Props {
  className?: string;
}

const Wrapper = styled.section`
  box-shadow: rgba(0, 0, 0, 0.3) -1px 0px 6px 1px;
  height: 100%;
  padding: 22px 14px;
  background-color: ${colors.white};

  // default breakpoint
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;

  @media (min-width: ${breakpoints.md}) {
    position: initial;
    left: auto;
    right: 0;
    width: 30em;
  }
`;

const DetailPanel = ({ className }: Props) => (
  <Wrapper className={className}>
    <h1>Detail Panel</h1>
    <p>Show details here</p>
  </Wrapper>
);

export default DetailPanel;
