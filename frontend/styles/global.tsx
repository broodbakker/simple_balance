import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing:border-box;
  font-size: 10px;
  color:black;
}

*,*:before,*:after{
box-sizing:inherit
};

body{
margin:0;
padding:0;
font-size: 1.5em;
line-height: 2;
font-family: Nunito,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;
}
a{
text-decoration:none;
color:black;
}
button{
  font-size: 15px;
  font-family: Nunito,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;
  line-height: 2;
  border:none;
}
`;

const style: DefaultTheme = {
  fontFamily:
    "Nunito,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",
  standardColor: "black",
  spacing: {
    XS: "0.5rem",
    S: "1rem",
    M: "1.5rem",
    L: "2rem"
  },
  fontSize: {
    XS: "0.5em",
    S: "1em",
    M: "1.5em",
    L: "2em"
  },
  mediaQuery: {
    S: "600px",
    M: "993px",
    L: "1200px"
  },
  borderRadius: {
    XS: "0.25rem",
    S: "0.5rem",
    M: "1rem",
    L: "2rem"
  },
  color: {}
};

const GlobalCSS = styled.div`
  --spacingXS: 0.5rem;
  --spacingS: 1rem;
  --spacingM: 1.5rem;
  --spacingL: 2rem;
  --fontsizeXS: 0.5em;
  --fontsizeS: 1em;
  --fontsizeM: 1.5em;
  --fontsizeL: 2em;
  --mediaQueryS: 600px;
  --mediaQueryM: 993px;
  --mediaQueryL: 1200px;
  --borderRadiusXS: 0.25rem;
  --borderRadiusS: 0.5rem;
  --borderRadiusM: 1rem;
  --borderRadiusL: 2rem;
`;

export default GlobalStyle;
export { style, GlobalCSS };
