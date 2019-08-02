import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";

//custom import
import Page from "../utils/page";
import withApollo from "../utils/withApollo";

class MyApp extends App {
  render() {
    const { Component, apollo }: any = this.props;
    return (
      <Container>
        {/* adding apollo */}
        <ApolloProvider client={apollo}>
          <Page>
            {/* all the pages rendered  */}
            <Component />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
