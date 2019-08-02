// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    standardColor: string;
    spacing: {
      XS: string;
      S: string;
      M: string;
      L: string;
    };
    fontSize: {
      XS: string;
      S: string;
      M: string;
      L: string;
    };
    mediaQuery: {
      S: string;
      M: string;
      L: string;
    };
    borderRadius: {
      XS: string;
      S: string;
      M: string;
      L: string;
    };
    color: {};
  }
}
