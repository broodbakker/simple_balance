//custom import
//import Head from "../components/head";   <Head title="" />
import CreateGlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import { style, GlobalCSS } from "../styles/global";

type Props = {
  children: any;
};

const Page: React.FunctionComponent<Props> = ({ children }) => (
  <div>
    <CreateGlobalStyle />
    <GlobalCSS>
      <ThemeProvider theme={style}>{children}</ThemeProvider>
    </GlobalCSS>
    >
  </div>
);

export default Page;
