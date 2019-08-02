import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
`;

type Props = {
  surface: number;
  Ssurface?: number;
  Msurface?: number;
  Lsurface?: number;
};

//surface
const FlexChild = styled.div<Props>`
  flex-basis: ${props => props.surface}%;
  @media (min-width: ${props => props.theme.mediaQuery.S}) {
    flex-basis: ${props => props.Ssurface && props.Ssurface}%;
  }
  @media (min-width: ${props => props.theme.mediaQuery.M}) {
    flex-basis: ${props => props.Msurface && props.Msurface}%;
  }
  @media (min-width: ${props => props.theme.mediaQuery.L}) {
    flex-basis: ${props => props.Lsurface && props.Lsurface}%;
  }
`;

export { FlexContainer, FlexChild };
